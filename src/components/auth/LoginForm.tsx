'use client';

import { User } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useState } from 'react';
import { toast } from 'sonner';

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <form>
            <div className="space-y-4">
                <div className="relative">
                    <User className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="PhoneNumber"
                        disabled={isLoading}
                        className="pl-10 bg-gray-50 border borer-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="relative">
                    <User className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="Password"
                        disabled={isLoading}
                        className="pl-10 bg-gray-50 border borer-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
            </div>
            <Button
                type="submit"
                disabled={isLoading}
                className="w-full mt-3 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            >
                Log In
            </Button>
        </form>
    );
};

export default LoginForm;
