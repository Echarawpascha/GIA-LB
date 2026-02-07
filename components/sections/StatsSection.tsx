"use client";

import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

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

export default function StatsSection() {
    return (
        <section className="py-20 bg-background text-foreground">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col gap-2">
                        <div className="font-serif text-5xl md:text-7xl text-accent">
                            <Counter value={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="font-sans text-sm tracking-widest uppercase opacity-70">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
