"use client";

import { motion } from "framer-motion";
import { FiMessageCircle, FiHeart, FiUsers, FiArrowRight } from "react-icons/fi";

const contactCards = [
    {
        icon: FiMessageCircle,
        title: "Contact via WhatsApp",
        description: "Get connected with our admin for general inquiries.",
        action: "Chat Now",
        link: "https://api.whatsapp.com/send/?phone=6281222122614&text&type=phone_number&app_absent=0"
    },
    {
        icon: FiHeart,
        title: "Layanan Doa & Konseling",
        description: "We are here to pray with you and provide support.",
        action: "Request Prayer",
        link: "https://api.whatsapp.com/send/?phone=6281221979686&text&type=phone_number&app_absent=0"
    },
    {
        icon: FiUsers,
        title: "Bergabung dalam GIFT",
        description: "Grow in Faith Together - Join our small groups.",
        action: "Find a Group",
        link: "https://api.whatsapp.com/send/?phone=6289687215655&text&type=phone_number&app_absent=0"
    }
];

export default function ContactSection() {
    return (
        <section className="w-full py-32 px-6 bg-[#F6F5F2] text-[#2A2A2A]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {contactCards.map((card, index) => (
                        <motion.a
                            key={index}
                            href={card.link}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative bg-white/50 backdrop-blur-sm border border-[#2A2A2A]/5 p-10 rounded-[2rem] overflow-hidden cursor-pointer"
                            whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.03)", scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex flex-col h-full justify-between gap-8">
                                <div className="flex flex-col gap-6">
                                    <div className="w-14 h-14 rounded-full bg-[#D4AF37]/5 flex items-center justify-center text-[#D4AF37]">
                                        <card.icon size={26} strokeWidth={1} />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-serif font-medium mb-3 tracking-wide">{card.title}</h3>
                                        <p className="text-base text-[#2A2A2A]/60 leading-relaxed font-light">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-sm font-medium tracking-widest uppercase text-[#D4AF37]/80 group-hover:text-[#2A2A2A] transition-colors duration-500">
                                    {card.action}
                                    <FiArrowRight className="transition-transform duration-500 group-hover:translate-x-2" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
