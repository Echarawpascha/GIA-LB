"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export default function SmoothScroll() {
    const pathname = usePathname();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Stop Lenis on unmount
        return () => {
            lenis.destroy();
        };
    }, []); // Run only once

    // Optional: Reset scroll on route change
    useEffect(() => {
        // Native Next.js scroll handling usually suffices, but Lenis might need manual reset if persistent
        // window.scrollTo(0, 0); 
    }, [pathname]);

    return null;
}
