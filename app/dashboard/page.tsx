"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardPage() {
    const router = useRouter();
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch Profile on Load
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                if (!apiUrl) return;

                // Call the API endpoint: GET /fetch_profile
                // Note: axios automatically sends cookies (if httpOnly) or we might need to attach Authorization header 
                // depending on how your backend handles sessions. 
                // Based on your Postman, it looks like a simple GET request.
                // Assuming the backend set a cookie during the /google_login call.
                const response = await axios.get(`${apiUrl}/fetch_profile`, {
                    withCredentials: true // Important for sending cookies cross-origin
                });

                setProfile(response.data);
            } catch (err: any) {
                console.error("Failed to fetch profile:", err);
                setError(err.response?.data?.message || err.message || "Failed to load profile");
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleSignOut = () => {
        // Clear both storage and cookie
        localStorage.removeItem("auth_token");
        document.cookie = "auth_token=; path=/; max-age=0"; // Expire cookie immediately
        router.push("/");
    };

    return (
        <div className="min-h-screen w-full bg-white text-black flex items-center justify-center p-8">
            <div className="text-center space-y-6 max-w-2xl w-full">
                <h1 className="text-4xl font-rozha">Dashboard</h1>

                {loading && <p className="animate-pulse">Loading profile...</p>}

                {error && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-mono text-left">
                        Error: {error}
                    </div>
                )}

                {profile && (
                    <div className="bg-neutral-50 p-6 rounded-2xl text-left border border-neutral-200 overflow-auto max-h-[500px]">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">
                            User Profile Data
                        </h2>
                        <pre className="text-xs font-mono text-neutral-800 whitespace-pre-wrap">
                            {JSON.stringify(profile, null, 2)}
                        </pre>
                    </div>
                )}

                {!loading && !error && !profile && (
                    <p className="text-neutral-500 italic">No profile data available.</p>
                )}

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
