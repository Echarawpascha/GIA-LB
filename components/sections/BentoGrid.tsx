"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";
import { FaChurch, FaChild, FaHandsHelping } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const items = [
    {
        title: "Sunday Service",
        description: "Join us every Sunday at 9 AM & 5 PM.",
        colSpan: "md:col-span-2",
        icon: <FaChurch className="text-4xl mb-4" />,
        bg: "bg-[#1a1a1a]"
    },
    {
        title: "First Community 2",
        description: "Empowering the next generation.",
        colSpan: "md:col-span-1",
        icon: <IoIosPeople className="text-4xl mb-4" />,
        bg: "bg-[#222]"
    },
    {
        title: "First Kids",
        description: "Fun and faith for little ones.",
        colSpan: "md:col-span-1",
        icon: <FaChild className="text-4xl mb-4" />,
        bg: "bg-[#1c1c1c]"
    },
    {
        title: "Community Outreach",
        description: "Serving our neighbors with love.",
        colSpan: "md:col-span-2",
        icon: <FaHandsHelping className="text-4xl mb-4" />,
        bg: "bg-[#252525]"
    },
    {
        title: "Grow In Faith Together",
        description: "Life is better together.",
        colSpan: "md:col-span-2",
        icon: <IoIosPeople className="text-4xl mb-4" />,
        bg: "bg-[#1e1e1e]"
    },
];

export default function BentoGrid() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        const el = containerRef.current;
        el?.addEventListener("mousemove", handleMouseMove);
        return () => el?.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section id="ministries" className="py-20 px-4 md:px-10 bg-foreground text-background">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-serif text-4xl md:text-6xl mb-12 text-center text-[#F6F5F2]">Our Ministries</h2>

                <div
                    ref={containerRef}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 group relative"
                >
                    {items.map((item, i) => (
                        <Link href="#" key={i} className={clsx(item.colSpan, "relative h-64 md:h-80 rounded-3xl overflow-hidden group/card")}>
                            {/* Glow Effect Layer */}
                            <div
                                className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 placeholder-glow"
                                style={{
                                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.15), transparent 40%)`
                                }}
                            />

                            {/* Border Glow via pseudo-element simulation or just gap background showing through? 
                            Here we use an overlay approach for the card content 
                        */}
                            <div className={clsx("absolute inset-[1px] rounded-3xl p-8 flex flex-col justify-end transition-transform duration-500 hover:scale-[0.98]", item.bg)}>
                                <div className="text-accent">{item.icon}</div>
                                <h3 className="font-serif text-2xl text-[#F6F5F2]">{item.title}</h3>
                                <p className="font-sans text-sm text-gray-400 mt-2">{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
