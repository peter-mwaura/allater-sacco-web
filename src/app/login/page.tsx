// LoginPage.tsx
'use client';

import LoginPageContent from '@/components/auth/LoginPageContent';
import { Suspense } from 'react';

const LoginPage = () => {
    return (
        <Suspense fallback={<p className="text-center mt-20">Loading...</p>}>
            <LoginPageContent />
        </Suspense>
    );
};

export default LoginPage;
