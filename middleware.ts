import { protectDashboard } from '@/lib/auth-middleware';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    return protectDashboard(request);
}


export const config = {
    matcher: '/dashboard/:path*',
}
