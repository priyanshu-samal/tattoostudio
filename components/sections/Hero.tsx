import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full bg-[#0a0a0a] text-[#ededed] overflow-hidden flex flex-col justify-center">
            <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 pointer-events-none z-0">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className="border-r border-white/10 h-full w-full last:border-r-0"
                    />
                ))}
            </div>

            <div className="relative z-20 w-full max-w-[1800px] mx-auto px-4 md:px-0 h-full flex flex-col justify-center items-center pointer-events-none">
                <div className="flex flex-col items-center text-center space-y-2 md:space-y-6 pointer-events-auto">
                    <h1 className="font-rozha text-[15vw] md:text-[12vw] leading-[0.8] tracking-tight mix-blend-overlay opacity-90">
                        तक्षशिला
                    </h1>

                    <p className="font-playfair italic text-xl md:text-4xl font-thin tracking-wide mt-4 text-white/70">
                        The Art of Permanence
                    </p>
                </div>

                <div className="absolute left-4 top-1/4 md:left-[10%] md:top-[20%] w-[25vw] md:w-[15vw] aspect-[2/3] z-0 overflow-hidden">
                    <Image
                        src="/hero/1.png"
                        alt="Detailed Tattoo Work"
                        fill
                        className="object-contain opacity-80"
                    />
                </div>

                <div className="absolute right-4 top-1/3 md:right-[15%] md:top-[35%] w-[25vw] md:w-[15vw] aspect-[2/3] z-0 overflow-hidden">
                    <Image
                        src="/hero/2.png"
                        alt="Atmosphere"
                        fill
                        className="object-contain opacity-80"
                    />
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 uppercase tracking-[0.3em] text-xs md:text-sm font-inter text-white/40">
                    Est. 2026
                </div>
            </div>
        </section>
    );
}
