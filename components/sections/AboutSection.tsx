"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const width = useTransform(scrollYProgress, [0.2, 0.5], ["30%", "100%"]);

    return (
        <section ref={containerRef} id="about" className="relative min-h-[120vh] bg-background text-foreground py-20 px-4 md:px-10 overflow-hidden flex flex-col items-center justify-center">

            <div className="max-w-6xl mx-auto text-center space-y-12 z-10 w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-7xl leading-tight"
                >
                    We consist of people who <span className="italic text-accent">love</span> God and people.
                </motion.h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-xl font-manrope font-light max-w-4xl mx-auto">
                    <p>
                        Gereja Isa Almasih Jemaat Lengkong Besar is a community driven by faith, hope, and love.
                        Founded decades ago, we continue to be a beacon of light in the city of Bandung.
                    </p>
                    <motion.div
                        style={{ width }}
                        className="h-40 md:h-60 rounded-full overflow-hidden relative shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop"
                            alt="Church Community"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <p>
                        Our mission is to bring the gospel to every generation, creating a home where everyone belongs.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-sm tracking-widest uppercase opacity-60"
                >
                    Established 1959
                </motion.div>
            </div>
        </section>
    );
}
