'use client';

import { Eye, EyeOff, Lock, User } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useState } from 'react';
import { toast } from 'sonner';

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-4">
                <div className="relative">
                    <User className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="PhoneNumber"
                        disabled={isLoading}
                        className="pl-10 bg-gray-50 border border-gray-300 text-gray-900 focus:ring-[#12994A] focus:border-[#12994A]"
                    />
                </div>
                <div className="relative">
                    <Lock className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        disabled={isLoading}
                        className="pl-10 bg-gray-50 border border-gray-300 text-gray-900 focus:ring-[#12994A] focus:border-[#12994A]"
                    />
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
                className="w-full mt-3 bg-[#12994A] hover:bg-[#0F7F3A] text-white font-semibold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            >
                Log In
            </Button>
        </form>
    );
};

export default LoginForm;
