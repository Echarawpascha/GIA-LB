"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";

export default function SequenceScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);

    const startFrame = 1;
    const endFrame = 82;
    const frameCount = endFrame - startFrame + 1;

    // 1. Load Images
    useEffect(() => {
        const loadImages = async () => {
            const imgs: HTMLImageElement[] = [];
            const promises: Promise<void>[] = [];

            for (let i = 0; i < frameCount; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    const frameNumber = startFrame + i;
                    const zeroPadIndex = frameNumber.toString().padStart(4, '0');
                    img.src = `/sequence/frame_${zeroPadIndex}.webp`;
                    img.onload = () => resolve();
                    img.onerror = () => resolve();
                    imgs[i] = img;
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(imgs);
            setLoaded(true);
        };

        loadImages();
    }, []);

    // 2. Scroll Logic
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map 0-1 scroll to 0-(frameCount-1)
    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

    // 3. Draw to Canvas
    const render = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !loaded || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const imgIndex = Math.round(index);
        const img = images[imgIndex];

        if (img) {
            // Cover logic
            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.width / img.height;
            let drawWidth, drawHeight, offsetX, offsetY;

            if (canvasRatio > imgRatio) {
                drawWidth = canvas.width;
                drawHeight = (canvas.width / img.width) * img.height;
                offsetX = 0;
                offsetY = (canvas.height - drawHeight) / 2;
            } else {
                drawWidth = (canvas.height / img.height) * img.width;
                drawHeight = canvas.height;
                offsetX = (canvas.width - drawWidth) / 2;
                offsetY = 0;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
    };

    // Resize handler
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Re-render current frame needed? 
                // The scroll listener will handle it or we force one
                render(currentIndex.get());
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Init

        return () => window.removeEventListener("resize", handleResize);
    }, [loaded, images]); // Re-run when loaded

    // Update on scroll
    useMotionValueEvent(currentIndex, "change", (latest) => {
        render(latest);
    });

    // Text Opacity Transforms
    const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.4, 0.5, 0.7], [0, 1, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1]);

    return (
        <div ref={containerRef} className="relative h-[300vh] w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />

                {/* Text Overlays */}
                <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center items-center text-center text-foreground mix-blend-difference bg-black/10">
                    {/* Using mix-blend-difference for readability against images if needed, or just plain text */}
                    {/* Note: User asked for specific positions */}

                    {/* 0% - Center */}
                    <motion.div style={{ opacity: opacity1 }} className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        <h1 className="font-serif text-5xl md:text-8xl tracking-tight text-[#F6F5F2]">Gereja Isa Almasih</h1>
                        <p className="font-sans text-xl md:text-2xl mt-4 tracking-widest text-[#D4AF37]">LENGKONG BESAR</p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
                            className="absolute bottom-10 text-sm font-mono text-[#F6F5F2]"
                        >
                            SCROLL TO BEGIN
                        </motion.div>
                    </motion.div>

                    {/* 30% - Left */}
                    <motion.div style={{ opacity: opacity2 }} className="absolute inset-0 flex items-center justify-start p-10 md:p-20">
                        <div className="max-w-xl text-left">
                            <h2 className="font-serif text-4xl md:text-6xl text-[#F6F5F2] leading-tight">
                                A place to worship, <br />
                                <span className="text-[#D4AF37] italic">grow</span>, and belong.
                            </h2>
                        </div>
                    </motion.div>

                    {/* 60% - Right */}
                    <motion.div style={{ opacity: opacity3 }} className="absolute inset-0 flex items-center justify-end p-10 md:p-20">
                        <div className="max-w-xl text-right">
                            <h2 className="font-serif text-4xl md:text-6xl text-[#F6F5F2] leading-tight">
                                Living and Impacting <br />
                                faith and <span className="text-[#D4AF37] italic">love</span>.
                            </h2>
                        </div>
                    </motion.div>
                </div>

                {/* Wave Transition - Narrative Bridge */}
                <motion.div
                    style={{
                        opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]),
                        y: useTransform(scrollYProgress, [0.9, 1], [80, 0])
                    }}
                    className="absolute bottom-0 left-0 w-full z-20 pointer-events-none"
                >
                    <svg
                        viewBox="0 0 1440 320"
                        className="w-full h-auto block"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#F6F5F2"
                            fillOpacity="1"
                            d="M0,288L120,245.3C240,203,480,117,720,117.3C960,117,1200,203,1320,245.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                        />
                    </svg>
                </motion.div>
            </div>
        </div>
    );
}
