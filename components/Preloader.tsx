"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [loaded, setLoaded] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const startFrame = 38;
        const endFrame = 192;
        const count = endFrame - startFrame + 1;
        let loadedCount = 0;
        const images: HTMLImageElement[] = [];

        const updateProgress = () => {
            loadedCount++;
            const currentProgress = Math.round((loadedCount / count) * 100);
            setProgress(currentProgress);

            if (loadedCount === count) {
                setTimeout(() => setLoaded(true), 800);
            }
        };

        for (let i = 0; i < count; i++) {
            const img = new Image();
            const frameNumber = startFrame + i;
            const zeroPadIndex = frameNumber.toString().padStart(3, '0');
            img.src = `/sequence/ezgif-frame-${zeroPadIndex}.jpg`;
            img.onload = updateProgress;
            img.onerror = updateProgress;
            images.push(img);
        }
    }, []);

    return (
        <AnimatePresence>
            {!loaded && (
                <motion.div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-foreground"
                    initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                    exit={{
                        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                >
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="font-serif text-3xl md:text-5xl tracking-widest uppercase">
                            Gereja Isa Almasih
                        </h1>
                        <p className="font-sans text-sm tracking-[0.2em] opacity-80">
                            Lengkong Besar
                        </p>
                        <div className="mt-8 relative w-64 h-[1px] bg-foreground/20">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-accent"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <span className="font-mono text-xs mt-2">{progress}%</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
