'use client';

import { Eye, EyeOff, Lock, User } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useState } from 'react';
import { toast } from 'sonner';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginUserAction } from '@/actions/login';
import { useRouter } from 'next/navigation';

const schema = z.object({
    phonenumber: z
        .string()
        .min(10, { message: 'Phonenumber must be at least 10 characters' }),
    password: z
        .string()
        .min(4, { message: 'Password must be at least 4 characters' }),
});

type LoginFormProps = {
    from?: string; // optional prop
};

const LoginForm = ({ from = '/dashboard' }: LoginFormProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const router = useRouter();

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        try {
            const formData = new FormData();
            Object.keys(data).forEach((key) => formData.append(key, data[key]));
            const result = await loginUserAction(formData);
            if (result.status === 200 && result.accessToken) {
                localStorage.setItem('accessToken', result.accessToken);
                toast.success('Login successful', {
                    description: result.success,
                });
                router.push(from);
            } else {
                throw new Error(result.error || 'Something went wrong');
            }
        } catch (error) {
            console.log(error);
            toast.error('Login Failed', {
                description:
                    error instanceof Error
                        ? error.message
                        : 'An unexpected error occurred.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
                <div className="relative">
                    <User className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                    <Input
                        {...register('phonenumber')}
                        type="text"
                        placeholder="07********"
                        disabled={isLoading}
                        className="pl-10 bg-gray-50 border border-gray-300 text-gray-900 focus:ring-[#12994A] focus:border-[#12994A]"
                    />
                    {errors.phonenumber && (
                        <div className="text-red-600 text-sm">
                            {errors.phonenumber.message}
                        </div>
                    )}
                </div>
                <div className="relative">
                    <Lock className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                    <Input
                        {...register('password')}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="****"
                        disabled={isLoading}
                        className="pl-10 bg-gray-50 border border-gray-300 text-gray-900 focus:ring-[#12994A] focus:border-[#12994A]"
                    />
                    {errors.password && (
                        <div className="text-red-600 text-sm">
                            {errors.password.message}
                        </div>
                    )}
                    <div
                        className="absolute right-8 top-2 w-5 h-5 text-gray-400 "
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <EyeOff className="w-full h-full" />
                        ) : (
                            <Eye className="w-full h-full" />
                        )}
                    </div>
                </div>
            </div>
            <Button
                type="submit"
                disabled={isLoading}
                className="w-full mt-3 bg-[#12994A] hover:bg-[#0F7F3A] text-white font-semibold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            >
                Log In
            </Button>
        </form>
    );
};

export default LoginForm;
