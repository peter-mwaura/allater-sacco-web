'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export const useAuthGuard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
        null
    );
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const token =
            typeof window !== 'undefined'
                ? localStorage.getItem('accessToken')
                : null;

        if (!token) {
            router.replace(`/login?from=${encodeURIComponent(pathname)}`);
            setIsAuthenticated(false);
        } else {
            setIsAuthenticated(true);
        }
    }, [router, pathname]);

    return isAuthenticated;
};
