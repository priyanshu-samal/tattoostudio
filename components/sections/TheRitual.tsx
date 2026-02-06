"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function TheRitual() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const rituals = [
        {
            title: "The Consultation",
            content: "Every masterpiece begins with a conversation. We discuss your vision, placement, and anatomy to ensure the design flows naturally with your body. This is where your story meets our craft."
        },
        {
            title: "The Design",
            content: "Our artists retreat to the drawing board, blending references with their signature style. You receive a digital preview before the appointment, ensuring every line is intentional."
        },
        {
            title: "The Session",
            content: "A sterile, calm environment where focus is paramount. We use single-use needles and premium vegan inks. Pain is temporary; the art is forever. We guide you through every breath."
        },
        {
            title: "The Healing",
            content: "Your skin is the canvas, and healing is the varnish. We provide comprehensive aftercare instructions and a curated kit to ensure your piece settles vibrantly and stands the test of time."
        }
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative w-full bg-[#0a0a0a] text-neutral-200 py-24 lg:py-32 overflow-hidden">
            <div className="w-full max-w-[1800px] mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                <div className="lg:col-span-5 relative">
                    <h2 className="text-xs font-inter font-bold tracking-[0.2em] uppercase text-neutral-500 mb-8">
                        Process
                    </h2>
                    <h3 className="font-rozha text-5xl md:text-7xl text-white leading-[1.1] mb-8">
                        The <br />
                        <span className="italic font-playfair font-thin text-neutral-400">Ritual</span>
                    </h3>
                    <p className="font-inter text-neutral-400 leading-relaxed max-w-md">
                        Polishing the details before the needle touches skin. A transparent look into how we transform abstract ideas into permanent legacy.
                    </p>

                    <div className="absolute left-0 top-full h-32 w-[1px] bg-gradient-to-b from-white/20 to-transparent mt-12 hidden lg:block"></div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-center">
                    {rituals.map((item, index) => (
                        <div key={index} className="border-b border-white/10 last:border-0">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between py-8 text-left group hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg"
                            >
                                <span className="font-rozha text-2xl md:text-3xl text-white group-hover:text-neutral-300 transition-colors">
                                    0{index + 1}. {item.title}
                                </span>
                                <span className={`p-2 rounded-full border border-white/10 transition-all duration-300 ${openIndex === index ? 'bg-white text-black rotate-180' : 'text-white'}`}>
                                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[300px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="font-inter text-neutral-400 leading-relaxed max-w-xl pl-4 md:pl-0">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
