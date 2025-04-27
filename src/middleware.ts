import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
    let response = NextResponse.next();

    // protected routes list
    const protectedRoutes = ['/dashboard'];

    const isProtectedRoute = protectedRoutes.some(
        (route) =>
            request.nextUrl.pathname === route ||
            request.nextUrl.pathname.startsWith(route + '/')
    );

    if (isProtectedRoute) {
        const accessToken = request.cookies.get('accessToken');
        if (!accessToken) {
            if (request.nextUrl.pathname !== '/login') {
                const loginUrl = new URL('login', request.url);
                loginUrl.searchParams.set('from', request.nextUrl.pathname);
                response = NextResponse.redirect(loginUrl);
            }
        }
    }

    return response;
}
