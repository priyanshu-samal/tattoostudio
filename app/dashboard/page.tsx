"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();

    const handleSignOut = () => {
        // Clear both storage and cookie
        localStorage.removeItem("auth_token");
        document.cookie = "auth_token=; path=/; max-age=0"; // Expire cookie immediately
        router.push("/");
    };

    return (
        <div className="min-h-screen w-full bg-white text-black flex items-center justify-center">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-rozha">Welcome to the Dashboard</h1>
                <p className="font-inter text-neutral-500">You have successfully logged in.</p>
                <button
                    onClick={handleSignOut}
                    className="mt-4 px-6 py-2 bg-black text-white text-sm font-bold uppercase tracking-wider rounded-full hover:opacity-80 transition-opacity"
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
}
