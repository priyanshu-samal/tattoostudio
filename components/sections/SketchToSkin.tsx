"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowLeftRight, MoveHorizontal } from "lucide-react";

export default function SketchToSkin() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        if (!isDragging || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;

        // Calculate position percentage (0 to 100)
        let position = ((clientX - containerRect.left) / containerRect.width) * 100;
        position = Math.max(0, Math.min(100, position)); // Clamp between 0 and 100

        setSliderPosition(position);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);


    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleMove);
            window.addEventListener('touchend', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <section className="relative w-full bg-white text-[#171717] py-20 lg:py-32 overflow-hidden">
            <div className="w-full max-w-[1800px] mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div>
                            <h2 className="text-xs font-inter font-bold tracking-[0.2em] uppercase text-neutral-400 mb-6">
                                The Process
                            </h2>
                            <h3 className="font-rozha text-5xl md:text-7xl leading-[1.1] mb-6">
                                From <span className="text-neutral-300">Sketch</span> <br />
                                To <span className="italic font-playfair font-thin">Skin</span>
                            </h3>
                            <p className="font-inter text-sm md:text-base text-neutral-500 leading-relaxed max-w-md">
                                See how our conceptual sketches translate into living, breathing art. We ensure every line, shade, and nuance is preserved, adapting the design to flow perfectly with your body's natural geometry.
                            </p>
                        </div>

                        <div className="flex items-center gap-4 text-xs font-inter uppercase tracking-widest text-neutral-400">
                            <MoveHorizontal size={16} />
                            <span>Drag to Compare</span>
                        </div>
                    </div>

                    <div className="lg:col-span-7 w-full">
                        <div
                            ref={containerRef}
                            className="relative w-full aspect-[4/5] md:aspect-[16/9] lg:aspect-[3/2] select-none cursor-ew-resize overflow-hidden rounded-sm"
                            onMouseDown={handleMouseDown}
                            onTouchStart={handleMouseDown}
                        >
                            <div className="absolute inset-0 w-full h-full bg-neutral-100/50">
                                <Image
                                    src="/info/1.jpg"
                                    alt="Final Tattoo"
                                    fill
                                    className="object-cover"
                                    draggable={false}
                                />
                                <div className="absolute bottom-6 right-6 text-white text-xs font-bold font-inter tracking-widest uppercase z-10 drop-shadow-md">
                                    Healed Result
                                </div>
                            </div>

                            <div
                                className="absolute inset-0 w-full h-full bg-white transition-none"
                                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                            >
                                <div className="absolute inset-0 w-full h-full grayscale contrast-125 brightness-110 bg-white">
                                    <Image
                                        src="/info/1.jpg"
                                        alt="Initial Sketch"
                                        fill
                                        className="object-cover opacity-80 mix-blend-multiply"
                                        draggable={false}
                                    />
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-40 mix-blend-multiply"></div>
                                </div>
                                <div className="absolute bottom-6 left-6 text-black text-xs font-bold font-inter tracking-widest uppercase z-10">
                                    Initial Concept
                                </div>
                            </div>

                            <div
                                className="absolute top-0 bottom-0 w-[2px] bg-white z-20 cursor-ew-resize shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                                style={{ left: `${sliderPosition}%` }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-black">
                                    <ArrowLeftRight size={16} strokeWidth={1.5} />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
