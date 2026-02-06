import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function TheMakers() {
    return (
        <section className="relative w-full bg-[#0a0a0a] text-neutral-200 py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 pointer-events-none z-0 opacity-5">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className="border-r border-white/20 h-full w-full last:border-r-0"
                    />
                ))}
            </div>

            <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 md:px-12">

                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <h2 className="text-xs font-inter font-bold tracking-[0.2em] uppercase text-neutral-500 mb-6">
                            The Makers
                        </h2>
                        <h3 className="font-rozha text-4xl md:text-6xl text-white leading-[1.1]">
                            Masters of <br />
                            <span className="italic font-playfair font-thin text-white/50">The Craft</span>
                        </h3>
                    </div>
                    <p className="font-inter text-sm md:text-base text-neutral-400 max-w-sm leading-relaxed mb-2">
                        Meet the artists redefining the boundaries of ink. Each with a distinct vision, united by a commitment to perfection.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
                    {[
                        {
                            name: "Arjun Singh",
                            role: "Realism",
                            quote: "Beauty lies in the details unseen.",
                            tattooImage: "/intro/1.jpg",
                            artistImage: "/intro/5.jpg"
                        },
                        {
                            name: "Priyank Sharma",
                            role: "Fine Line",
                            quote: "Less ink, more meaning.",
                            tattooImage: "/intro/2.jpg",
                            artistImage: "/intro/6.jpg"
                        },
                        {
                            name: "Rohan Das",
                            role: "Geometric",
                            quote: "Order in chaos.",
                            tattooImage: "/intro/3.jpg",
                            artistImage: "/intro/7.jpg"
                        },
                        {
                            name: "Kashish Iyer",
                            role: "Watercolor",
                            quote: "Flow like the river.",
                            tattooImage: "/intro/4.jpg",
                            artistImage: "/intro/8.jpg"
                        }
                    ].map((artist, idx) => (
                        <div key={idx} className="group relative h-[400px] cursor-pointer [perspective:1000px]">
                            <div className="relative w-full h-full transition-all duration-700 transform [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                                <div className="absolute inset-0 [backface-visibility:hidden]">
                                    <div className="relative w-full h-full bg-neutral-900 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <Image
                                            src={artist.tattooImage}
                                            alt={`${artist.name} Work`}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                            <h4 className="font-rozha text-xl text-white">{artist.name}</h4>
                                            <p className="font-inter text-[10px] uppercase tracking-widest text-neutral-400">{artist.role}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-black">
                                    <Image
                                        src={artist.artistImage}
                                        alt={artist.name}
                                        fill
                                        className="object-cover opacity-60"
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center z-10 bg-black/20">
                                        <p className="font-playfair italic text-xl text-white mb-4 drop-shadow-md">
                                            "{artist.quote}"
                                        </p>
                                        <div className="w-8 h-[1px] bg-white/50 mb-4"></div>
                                        <p className="font-inter text-[10px] uppercase tracking-widest text-neutral-300 drop-shadow-md">
                                            Artist Ideology
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
