"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import clsx from "clsx";

const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "#about" },
    { title: "Ministries", href: "#ministries" },
    { title: "Gallery", href: "#gallery" },
    { title: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const menuVars: Variants = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const containerVars: Variants = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            },
        },
    };

    const linkVars: Variants = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1],
            },
        },
        open: {
            y: 0,
            transition: {
                ease: [0, 0.55, 0.45, 1],
                duration: 0.7,
            },
        },
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-[60]">
            <img
                src="Living&Impacting.png"
                alt="Logo"
                className="w-20 h-20 object-contain"
            />
            <button onClick={toggle} className="text-3xl focus:outline-none">
                <RxHamburgerMenu />
            </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 bg-foreground text-background z-[50] flex flex-col justify-center items-center origin-top overflow-hidden"
                    >
                        <div className="absolute top-6 right-6 z-[61]">
                            <button onClick={toggle} className="text-4xl text-background focus:outline-none">
                                <IoCloseOutline />
                            </button>
                        </div>

                        <motion.div
                            variants={containerVars}
                            initial="initial"
                            animate="open"
                            exit="initial"
                            className="flex flex-col gap-4 text-center"
                        >
                            {navLinks.map((link, index) => (
                                <div key={index} className="overflow-hidden">
                                    <motion.div variants={linkVars}>
                                        <Link
                                            href={link.href}
                                            className="text-5xl md:text-7xl font-serif hover:text-accent transition-colors duration-300"
                                            onClick={toggle}
                                        >
                                            {link.title}
                                        </Link>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>

                        <div className="absolute bottom-10 w-full px-10 flex justify-between text-sm font-mono opacity-50">
                            <span>Facebook / Instagram / Youtube</span>
                            <span>© 2026 GIA Lengkong Besar</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
