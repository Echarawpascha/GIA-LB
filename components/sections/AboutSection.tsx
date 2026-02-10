"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue } from "framer-motion";

export default function AboutSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const width = useTransform(scrollYProgress, [0.2, 0.5], ["30%", "100%"]);

    return (
        <section ref={containerRef} id="about" className="relative min-h-[120vh] bg-[#F6F5F2] text-foreground pb-20 pt-0 px-4 md:px-10 overflow-hidden flex flex-col items-center justify-center -mt-1">

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
                        Gereja Isa Almasih Lengkong Besar Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </p>
                    <motion.div
                        style={{ width }}
                        className="h-40 md:h-60 rounded-full overflow-hidden relative shadow-2xl"
                    >
                        <img
                            src="https://gialengbes.weebly.com/uploads/2/1/5/9/21598410/8350596_orig.jpg"
                            alt="Church Community"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <p>
                        Our mission is Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore neque ipsam quasi totam, sit, accusantium dolorem
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col items-center gap-12"
                >
                    <div className="text-sm tracking-widest uppercase opacity-60">
                        Established 1959
                    </div>

                    {/* Stats moved from StatsSection */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center w-full pt-8 border-t border-foreground/10">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <div className="font-serif text-4xl md:text-5xl text-accent">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="font-sans text-xs tracking-widest uppercase opacity-70">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} />;
}

const stats = [
    { label: "Years of Service", value: 60, suffix: "+" },
    { label: "Community Members", value: 2500, suffix: "+" },
    { label: "Ministries", value: 12, suffix: "" },
    { label: "Weekly Services", value: 5, suffix: "" },
];
