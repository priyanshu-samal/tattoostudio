import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function protectDashboard(request: NextRequest) {
    // Check for the auth cookie
    const token = request.cookies.get('auth_token');

    // Protect the dashboard route
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        if (!token) {
            // If no token, redirect to home immediately
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    return NextResponse.next();
}
