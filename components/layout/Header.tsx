"use client";

import Link from "next/link";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { X, Menu, LayoutDashboard } from "lucide-react";

export default function Header() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLoginSuccess = async (credentialResponse: any) => {
        try {
            const response = await axios.post(`/api/auth/login`, {
                token: credentialResponse.credential
            });

            if (response.status === 200) {
                document.cookie = "auth_token=true; path=/; max-age=86400";
                localStorage.setItem("auth_token", "true");
                setIsAuthenticated(true);
                router.push("/dashboard");
            }
        } catch (error: any) {
            console.error("Login failed or backend error:", error);
            const errorMessage = error.response?.data?.message || error.message || "Unknown error";
            const statusCode = error.response?.status;
            alert(`Login Failed!\nStatus: ${statusCode}\nMessage: ${JSON.stringify(error.response?.data) || errorMessage}`);
        }
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className="flex justify-between items-center px-6 py-4 md:px-12 md:py-6 mix-blend-difference text-white relative z-50">
                <div className="text-xl font-bold tracking-tighter uppercase font-inter">
                    Takshila
                </div>

                <div className="flex items-center gap-8">
                    <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
                        {["Home", "Artists", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="hover:opacity-70 transition-opacity"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        {isAuthenticated ? (
                            <Link
                                href="/dashboard"
                                className="flex items-center gap-2 px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full hover:opacity-90 transition-opacity"
                            >
                                <LayoutDashboard size={14} />
                                Dashboard
                            </Link>
                        ) : (
                            <GoogleLogin
                                onSuccess={handleLoginSuccess}
                                onError={() => console.log("Login Failed")}
                                theme="filled_black"
                                shape="pill"
                                text="signin"
                            />
                        )}
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-2xl focus:outline-none"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            <div className={`fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ mixBlendMode: 'normal' }}>
                <nav className="flex flex-col items-center gap-8 text-3xl font-playfair italic tracking-wider text-white">
                    {["Home", "Artists", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-neutral-400 transition-colors"
                            onClick={toggleMenu}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                <div className="mt-4">
                    {isAuthenticated ? (
                        <Link
                            href="/dashboard"
                            onClick={toggleMenu}
                            className="flex items-center gap-2 px-8 py-3 bg-white text-black text-sm font-bold uppercase tracking-wider rounded-full hover:opacity-90 transition-opacity border border-white"
                        >
                            <LayoutDashboard size={16} />
                            Dashboard
                        </Link>
                    ) : (
                        <GoogleLogin
                            onSuccess={handleLoginSuccess}
                            onError={() => console.log("Login Failed")}
                            theme="filled_black"
                            shape="pill"
                            text="signin"
                        />
                    )}
                </div>
            </div>
        </header>
    );
}
