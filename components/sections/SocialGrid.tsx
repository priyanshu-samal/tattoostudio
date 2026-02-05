import Link from "next/link";
import Image from "next/image";
import { Heart, MessageCircle, Send, Bookmark, Instagram } from "lucide-react";

export default function SocialGrid() {
    return (
        <section className="relative min-h-screen w-full bg-white text-[#171717] py-10 lg:py-32 flex flex-col justify-center">
            <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 pointer-events-none z-0">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className="border-r border-black/10 h-full w-full last:border-r-0"
                    />
                ))}
            </div>

            <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

                <div className="lg:col-span-7 order-2 lg:order-1">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                        <div className="col-span-2 row-span-2 bg-white border border-neutral-200 shadow-sm rounded-sm p-3 max-w-sm self-start z-10">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <Instagram size={24} strokeWidth={1.5} />
                                    <div>
                                        <div className="text-[10px] font-bold font-inter lowercase leading-tight">takshila.studio</div>
                                        <div className="text-[8px] text-neutral-500 font-inter uppercase tracking-wide leading-tight">New Delhi</div>
                                    </div>
                                </div>
                                <div className="text-neutral-300 text-[10px]">•••</div>
                            </div>

                            <div className="aspect-square bg-neutral-100 rounded-sm mb-2 relative overflow-hidden group">
                                <Image
                                    src="/info/insta.jpg"
                                    alt="Tattoo artwork"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex justify-between items-center mb-2 text-neutral-700">
                                <div className="flex gap-3">
                                    <Heart size={16} className="hover:text-red-500 cursor-pointer transition-colors" />
                                    <MessageCircle size={16} className="hover:text-black cursor-pointer transition-colors" />
                                    <Send size={16} className="hover:text-black cursor-pointer transition-colors" />
                                </div>
                                <Bookmark size={16} className="hover:text-black cursor-pointer transition-colors" />
                            </div>

                            <div className="text-[10px] font-inter space-y-1">
                                <div className="font-bold">1,240 likes</div>
                                <p className="leading-tight text-neutral-600">
                                    <span className="font-bold mr-1 text-black">takshila.studio</span>
                                    The art of permanence. #takshila
                                </p>
                            </div>
                        </div>

                        <div className="aspect-square hidden md:block border border-black/5 bg-transparent"></div>

                        <div className="aspect-square bg-neutral-100 relative group overflow-hidden">
                            <Image
                                src="/info/1.jpg"
                                alt="Tattoo 1"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="aspect-square border border-black/5 bg-transparent"></div>

                        <div className="aspect-square bg-neutral-100 relative group overflow-hidden">
                            <Image
                                src="/info/2.jpg"
                                alt="Tattoo 2"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="aspect-square hidden md:block border border-black/5 bg-transparent"></div>

                        <div className="aspect-square bg-neutral-100 relative group overflow-hidden">
                            <Image
                                src="/info/4.jpg"
                                alt="Tattoo 4"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="aspect-square bg-neutral-100 relative group overflow-hidden">
                            <Image
                                src="/info/5.jpg"
                                alt="Tattoo 5"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="col-span-2 row-span-2 aspect-square bg-neutral-100 relative group overflow-hidden">
                            <Image
                                src="/info/6.jpg"
                                alt="Tattoo 6"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="aspect-square border border-black/5 bg-transparent"></div>

                        <div className="aspect-square bg-neutral-100 relative group overflow-hidden">
                            <Image
                                src="/info/7.jpg"
                                alt="Tattoo 7"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </div>

                <div className="contents lg:flex lg:flex-col lg:col-span-5 lg:gap-8 lg:order-2">

                    <div className="order-1">
                        <div>
                            <h2 className="font-playfair italic text-5xl md:text-7xl font-thin leading-[1.1] mb-8">
                                To <span className="font-rozha not-italic">CRAFT</span> a TIMELESS <br />
                                STATEMENT In Ink <br />
                                & Soul
                            </h2>
                            <p className="font-inter text-sm md:text-base text-neutral-500 max-w-xl leading-relaxed uppercase tracking-wider pl-2 border-l-2 border-black/10">
                                Every design is a collaboration, a fusion of your vision and our artistry. We believe in creating distinct, meaningful tattoos that resonate with your personal journey and stand the test of time.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 order-3">
                        <div className="aspect-square hidden md:block border border-black/5 bg-transparent"></div>

                        <div className="aspect-square bg-neutral-100 relative group overflow-hidden">
                            <Image
                                src="/info/8.jpg"
                                alt="Tattoo 8"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="aspect-square bg-neutral-100 relative group overflow-hidden">
                            <Image
                                src="/info/9.jpg"
                                alt="Tattoo 9"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="aspect-square border border-black/5 bg-transparent"></div>

                        <div className="col-span-2 row-span-2 aspect-[2/1] bg-neutral-100 relative group overflow-hidden">
                            <Image
                                src="/info/10.jpg"
                                alt="Tattoo 10"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="aspect-square bg-neutral-100 relative group overflow-hidden">
                            <Image
                                src="/info/11.jpg"
                                alt="Tattoo 11"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="aspect-square bg-neutral-100 relative group overflow-hidden">
                            <Image
                                src="/info/3.jpg"
                                alt="Tattoo 3"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="aspect-square bg-neutral-100 relative group overflow-hidden">
                            <Image
                                src="/info/4.jpg"
                                alt="Tattoo 4"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="aspect-square border border-black/5 bg-transparent"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}
