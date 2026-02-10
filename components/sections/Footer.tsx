"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer id="contact" className="relative bg-[#111] text-[#F6F5F2] py-40 overflow-hidden">
            {/* Animated Background Lights */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-accent blur-[150px] opacity-30"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, 100, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-1/2 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-900 blur-[150px] opacity-20"
                />
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <p className="font-sans text-sm tracking-[0.3em] uppercase mb-4 opacity-70">Join us this Sunday</p>
                <h1 className="font-serif text-5xl md:text-9xl leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#F6F5F2] to-[#999]">
                    GEREJA ISA ALMASIH
                </h1>
                <h2 className="font-serif text-3xl md:text-6xl mt-2 text-accent">
                    LENGKONG BESAR
                </h2>

                <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-sm font-mono opacity-60 border-t border-white/10 pt-10">
                    <div className="flex gap-6 mb-4 md:mb-0">
                        <a href="#" className="hover:text-accent transition-colors">Instagram</a>
                        <a href="#" className="hover:text-accent transition-colors">Youtube</a>
                    </div>
                    <div>
                        Jl. Lengkong Besar No. 56, Bandung
                    </div>
                    <div>
                        © {new Date().getFullYear()} All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
