"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiInstagram, FiArrowRight } from "react-icons/fi";

const rayons = [
    {
        name: "Rayon Arcamanik Ujungberung",
        image: "/images/rayon-pusat.jpg", // Placeholder path
        location: "Main Sanctuary, Lengkong Besar",
        instagram: "@giaarcauber",
        mapLink: "#"
    },
    {
        name: "Rayon Gandawijaya",
        image: "/images/rayon-barat.jpg", // Placeholder path
        location: "West Hall, Kebon Jeruk",
        instagram: "@giarayongandawijaya",
        mapLink: "#"
    },
    {
        name: "Rayon Taman Cibaduyut Indah",
        image: "/images/rayon-timur.jpg", // Placeholder path
        location: "East Wing, Antapani",
        instagram: "@giarayontci",
        mapLink: "#"
    },
        {
        name: "Rayon Baladewa",
        image: "/images/rayon-timur.jpg", // Placeholder path
        location: "East Wing, Antapani",
        instagram: "@gia.baladewa",
        mapLink: "#"
    }
];

export default function RayonSection() {
    return (
        <section className="w-full py-32 px-6 bg-[#F6F5F2] text-[#2A2A2A]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
                >
                    <div>
                        <h2 className="text-4xl font-serif mb-6 tracking-tight">Join Our Services</h2>
                        <p className="opacity-60 max-w-xl text-lg font-light leading-relaxed">Find a community near you and grow together in faith.</p>
                    </div>
                    <a href="#" className="flex items-center gap-3 text-[#D4AF37] hover:text-[#2A2A2A] transition-colors pb-1 border-b border-[#D4AF37]/30 hover:border-[#2A2A2A] text-sm uppercase tracking-widest font-medium">
                        See all locations <FiArrowRight />
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {rayons.map((rayon, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.05)] transition-shadow duration-700"
                            whileHover={{ y: -8 }}
                        >
                            <div className="aspect-[4/3] w-full relative overflow-hidden bg-[#2A2A2A]/5">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#2A2A2A]/10 to-transparent group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
                                <div className="absolute inset-0 flex items-center justify-center text-[#2A2A2A]/20 font-serif italic text-xl opacity-100 group-hover:opacity-0 transition-opacity duration-700">
                                    {rayon.name} Image
                                </div>
                            </div>

                            <div className="p-10">
                                <h3 className="text-2xl font-serif mb-6 group-hover:text-[#D4AF37] transition-colors duration-500">{rayon.name}</h3>

                                <div className="flex flex-col gap-4">
                                    <a href={rayon.mapLink} className="flex items-center gap-4 text-sm text-[#2A2A2A]/70 hover:text-[#D4AF37] transition-colors duration-300">
                                        <div className="p-2.5 rounded-full bg-[#F6F5F2] group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
                                            <FiMapPin className="text-[#2A2A2A]/50 group-hover:text-[#D4AF37] transition-colors" />
                                        </div>
                                        {rayon.location}
                                    </a>
                                    <a href={`https://instagram.com/${rayon.instagram.replace('@', '')}`} className="flex items-center gap-4 text-sm text-[#2A2A2A]/70 hover:text-[#D4AF37] transition-colors duration-300">
                                        <div className="p-2.5 rounded-full bg-[#F6F5F2] group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
                                            <FiInstagram className="text-[#2A2A2A]/50 group-hover:text-[#D4AF37] transition-colors" />
                                        </div>
                                        {rayon.instagram}
                                    </a>
                                </div>

                                <motion.div
                                    className="absolute bottom-0 left-0 w-full h-1 bg-[#D4AF37]/80"
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    whileHover={{ scaleX: 1, opacity: 1 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
