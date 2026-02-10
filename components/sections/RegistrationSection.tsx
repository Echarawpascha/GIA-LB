"use client";

import { motion } from "framer-motion";
import { FiDroplet, FiHeart, FiSun, FiArrowUpRight } from "react-icons/fi";

const registrationCards = [
    {
        icon: FiDroplet,
        title: "Baptisan Air",
        description: "Public declaration of your faith in Jesus Christ.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdD0F-3xDLqwnGSZrgCedxYC7zs05KyI6W8196N9r5JviJAwQ/viewform"
    },
    {
        icon: FiHeart,
        title: "Bimbingan Pra-Nikah",
        description: "Preparing couples for a god-centered marriage.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfRWp_XeDv5-Pb0ASi87E70uasRkF994yj1r8eyPkxczc2JOA/viewform"
    },
    {
        icon: FiSun,
        title: "Penyerahan Anak",
        description: "Dedicating your child to the Lord's community.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdPZRu6_V7IgzaIwx37OZ3yNSOaVBTM-hy68RfAL5UYSOKV7g/viewform"
    }
];

export default function RegistrationSection() {
    return (
        <section className="w-full py-32 px-6 bg-[#F6F5F2] text-[#2A2A2A] border-t border-[#2A2A2A]/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-serif mb-6 tracking-tight">Registration</h2>
                    <p className="opacity-60 max-w-xl text-lg font-light leading-relaxed">Sign up for upcoming spiritual milestones and classes.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {registrationCards.map((card, index) => (
                        <motion.a
                            key={index}
                            href={card.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="group relative bg-white/40 border border-[#2A2A2A]/5 p-10 rounded-[2rem] overflow-hidden cursor-pointer"
                            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.8)", scale: 1.01 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex flex-col h-full gap-8">
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 rounded-full bg-[#2A2A2A]/5 flex items-center justify-center text-[#2A2A2A]/70 group-hover:text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-colors duration-500">
                                        <card.icon size={22} strokeWidth={1} />
                                    </div>
                                    <FiArrowUpRight className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out" />
                                </div>

                                <div>
                                    <h3 className="text-xl font-serif font-medium mb-3 tracking-wide">{card.title}</h3>
                                    <p className="text-base text-[#2A2A2A]/60 leading-relaxed font-light">
                                        {card.description}
                                    </p>
                                </div>

                                <div className="mt-auto pt-6">
                                    <span className="text-xs font-bold tracking-widest uppercase border-b border-transparent group-hover:border-[#D4AF37]/50 transition-all duration-500 pb-1 text-[#2A2A2A]/80">Register</span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
