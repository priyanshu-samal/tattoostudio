import { ArrowUpRight } from "lucide-react";

export default function Brand() {
    return (
        <section className="relative z-20 lg:-mt-24 w-full bg-[#0a0a0a] text-neutral-200 py-12 lg:py-24 overflow-hidden rounded-t-[50px]">
            <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 pointer-events-none z-0 opacity-10">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className="border-r border-white/20 h-full w-full last:border-r-0"
                    />
                ))}
            </div>

            <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">

                    <div className="lg:col-span-4 flex flex-col justify-between h-full lg:min-h-0">
                        <div className="flex items-center gap-2 mb-8 lg:mb-0">
                            <h2 className="text-xs font-inter font-bold tracking-[0.2em] uppercase text-neutral-500">
                                The Brand
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 gap-8 lg:pt-0">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-[10px] font-inter uppercase tracking-widest text-neutral-500 mb-1">Year</h3>
                                    <p className="font-playfair text-lg text-white">2026</p>
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-inter uppercase tracking-widest text-neutral-500 mb-1">Service</h3>
                                    <p className="font-playfair text-lg text-white">Tattoo Artistry</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-[10px] font-inter uppercase tracking-widest text-neutral-500 mb-1">Location</h3>
                                    <p className="font-playfair text-lg text-white">New Delhi, India</p>
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-inter uppercase tracking-widest text-neutral-500 mb-1">Focus</h3>
                                    <p className="font-playfair text-lg text-white">Custom Design</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8 flex flex-col gap-10 lg:pl-12">
                        <h3 className="font-rozha text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-white">
                            Takshila offers <span className="italic font-playfair font-thin text-white/50">a journey</span> through artistic expression, with each design crafted to <span className="italic font-playfair font-thin text-white/50">honor</span> your personal narrative.
                        </h3>

                        <div className="flex flex-col md:flex-row gap-8 items-start justify-between border-t border-white/10 pt-8 mt-2">
                            <p className="font-inter text-sm md:text-base text-neutral-400 leading-relaxed max-w-xl">
                                With a focus on traditional craftsmanship and a warm, inviting atmosphere, we provide a tattoo experience that feels both personal and profound. Each session promises a masterpiece in ink that stands the test of time, blending modern techniques with timeless aesthetics.
                            </p>

                            <button className="group flex items-center gap-3 text-sm font-inter uppercase tracking-wider text-white hover:text-white/70 transition-colors shrink-0">
                                Read Our Story
                                <span className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
                                    <ArrowUpRight size={16} />
                                </span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
