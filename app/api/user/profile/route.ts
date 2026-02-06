import { NextResponse } from 'next/server';
import axios from 'axios';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!apiUrl) {
            return NextResponse.json({ message: "API URL not configured" }, { status: 500 });
        }


        const cookieStore = await cookies();
        const allCookies = cookieStore.getAll().map((c: any) => `${c.name}=${c.value}`).join('; ');


        const response = await axios.get(`${apiUrl}/fetch_profile`, {
            headers: {
                Cookie: allCookies,

            },
            validateStatus: () => true
        });

        const data = response.data;
        const status = response.status;

        return NextResponse.json(data, { status });

    } catch (error: any) {
        console.error("Proxy Profile Error:", error);
        return NextResponse.json(
            { message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
