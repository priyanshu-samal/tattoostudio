export default function VideoCarousel() {
    const videos = [
        "/video/1.mp4",
        "/video/2.mp4",
        "/video/3.mp4",
        "/video/4.mp4",
        "/video/5.mp4",
        "/video/6.mp4",
    ];

    return (
        <section className="relative w-full bg-white text-black py-24 overflow-hidden">
            <div className="w-full max-w-[1800px] mx-auto px-4 md:px-12 mb-12">

                {/* Header Layout */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-black/10 pb-8">
                    <h2 className="text-xs font-inter font-bold tracking-[0.2em] uppercase text-neutral-400 mb-4 md:mb-0">
                        Visual Gallery
                    </h2>
                    <p className="font-inter text-sm md:text-base text-neutral-500 max-w-md text-right leading-relaxed">
                        A glimpse into the studio's daily rhythm. Where focus meets precision, and ink meets skin in a dance of permanence.
                    </p>
                </div>

                {/* Infinite Carousel */}
                <div className="relative w-full overflow-hidden">
                    {/* 
                        gap-16: Increased padding between videos.
                        Width logic: We create a base set of 12 videos (original 6 duplicated once) 
                        to ensure it's wider than any screen.
                        Then we render that base set TWICE ([Set][Set]) and animate -50% (globals.css).
                        This ensures a perfect seamless loop.
                    */}
                    <div className="flex w-max animate-scroll hover:pause-animation">
                        {[...videos, ...videos, ...videos, ...videos].map((src, i) => (
                            <div
                                key={i}
                                className="relative w-[250px] md:w-[400px] aspect-[3/4] pr-16 flex-shrink-0"
                            >
                                <div className="w-full h-full rounded-2xl overflow-hidden bg-neutral-100 relative">
                                    <video
                                        src={src}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/10"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Layout */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-12 border-t border-black/10 pt-8">
                    <h3 className="text-xs font-inter font-bold tracking-[0.2em] uppercase text-black">
                        Artistry In Motion
                    </h3>
                    <h3 className="text-xs font-inter font-bold tracking-[0.2em] uppercase text-black">
                        Est. 2026
                    </h3>
                </div>

            </div>
        </section>
    );
}
