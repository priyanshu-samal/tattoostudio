import { ArrowUpRight, Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative z-20 w-full bg-white text-black py-12 lg:py-24 overflow-hidden rounded-t-[50px] lg:-mt-24">

            <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">

                    {/* Left Column: Metadata (Matches Brand layout) */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full lg:min-h-0">
                        {/* Top Label */}
                        <div className="flex flex-col items-start gap-4 mb-10 lg:mb-0">
                            <h2 className="text-xs font-inter font-bold tracking-[0.2em] uppercase text-neutral-500">
                                Contact
                            </h2>
                            <div className="relative w-44 h-44 rounded-full overflow-hidden">
                                <Image
                                    src="/f.jpg"
                                    alt="Takshila Icon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Bottom Metadata */}
                        <div className="grid grid-cols-2 gap-8 lg:pt-0">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-[10px] font-inter uppercase tracking-widest text-neutral-500 mb-1">Visit</h3>
                                    <p className="font-playfair text-lg text-black">Hauz Khas Village,<br />New Delhi 110016</p>
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-inter uppercase tracking-widest text-neutral-500 mb-1">Email</h3>
                                    <p className="font-playfair text-lg text-black">hello@takshila.com</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-[10px] font-inter uppercase tracking-widest text-neutral-500 mb-1">Socials</h3>
                                    <div className="flex gap-4">
                                        <Link href="#" className="font-playfair text-lg text-black hover:opacity-70 transition-opacity">IG</Link>
                                        <Link href="#" className="font-playfair text-lg text-black hover:opacity-70 transition-opacity">FB</Link>
                                        <Link href="#" className="font-playfair text-lg text-black hover:opacity-70 transition-opacity">X</Link>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-inter uppercase tracking-widest text-neutral-500 mb-1">Phone</h3>
                                    <p className="font-playfair text-lg text-black">+91 98765 43210</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Statement / Link (Matches Brand layout) */}
                    <div className="lg:col-span-8 flex flex-col gap-10 lg:pl-12">
                        <h3 className="font-rozha text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-black">
                            Ready to express your story? <span className="italic font-playfair font-thin text-black/50">Book a consultation</span> and let's create something timeless.
                        </h3>

                        <div className="flex flex-col md:flex-row gap-8 items-start justify-between border-t border-black/10 pt-8 mt-2">
                            <p className="font-inter text-sm md:text-base text-neutral-500 leading-relaxed max-w-xl">
                                &copy; 2026 Takshila Tattoo Studio. All rights reserved. <br />
                                <span className="text-xs mt-2 block opacity-70">Privacy Policy &bull; Terms of Service</span>
                            </p>

                            <button className="group flex items-center gap-3 text-sm font-inter uppercase tracking-wider text-black hover:text-black/70 transition-colors shrink-0">
                                Book Now
                                <span className="bg-black/5 p-2 rounded-full group-hover:bg-black/10 transition-colors">
                                    <ArrowUpRight size={16} />
                                </span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
