import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 md:px-12 md:py-6 mix-blend-difference text-white">
            <div className="text-xl font-bold tracking-tighter uppercase font-inter">
                Takshila
            </div>
            <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
                {["Home", "Artists", "Gallery", "Contact"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="hover:opacity-70 transition-opacity"
                    >
                        {item}
                    </Link>
                ))}
            </nav>
            <button className="md:hidden text-2xl">
                {/* Mobile Menu Icon Placeholder */}
                ☰
            </button>
        </header>
    );
}
