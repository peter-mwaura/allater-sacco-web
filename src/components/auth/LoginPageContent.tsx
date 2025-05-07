'use client';

import LoginForm from '@/components/auth/LoginForm';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

const LoginPageContent = () => {
    const searchParams = useSearchParams();
    const from = searchParams.get('from') || '/dashboard';
    const router = useRouter();
    const [checkingAuth, setCheckingAuth] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            router.replace(from); // Redirect if already logged in
        } else {
            setCheckingAuth(false); // Show form if not authenticated
        }
    }, [from, router]);

    if (checkingAuth) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-gray-600 text-lg">
                    Checking authentication...
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full flex flex-col justify-center md:flex-row bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 lg:p-12">
                <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-[#12994A]">
                            Login
                        </h1>
                        <p className="text-sm text-gray-500">
                            Welcome back! Please enter your details
                        </p>
                        <LoginForm from={from} />
                        <p className="text-center text-sm text-gray-600">
                            Don't have an account?
                            <Link
                                className="font-semibold ml-3 text-[#12994A] hover:text-[#12994A]"
                                href={'#'}
                            >
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex w-1/2 p-12 items-center justify-center relative">
                <img
                    src="/images/auth.jpg"
                    alt="allaterworkspace"
                    className="absolute inset-0 object-cover w-full h-full"
                />
            </div>
        </div>
    );
};

export default LoginPageContent;
