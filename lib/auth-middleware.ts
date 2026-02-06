import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function protectDashboard(request: NextRequest) {

    const token = request.cookies.get('auth_token');


    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        if (!token) {

            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    return NextResponse.next();
}
