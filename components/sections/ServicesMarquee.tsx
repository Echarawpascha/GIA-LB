"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const services = [
    "Sunday Service", "First Community", "First Teens", "First Kids", "Grow in Faith Together",
    "Kaum Pria", "Pasutri", "Doa & Konseling", "Baptisan Air"
];

export default function ServicesMarquee() {
    return (
        <div className="py-20 bg-foreground text-background overflow-hidden cursor-default select-none">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView="auto"
                loop={true}
                speed={5000} // Continuous speed? Swiper default autoplay is ticks. 
                // For continuous linear marquee, css is often better, but Swiper with linear easing works.
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                className="marquee-swiper w-full"
                style={{ transitionTimingFunction: 'linear' } as React.CSSProperties}
            >
                {services.map((item, i) => (
                    <SwiperSlide key={i} className="!w-auto">
                        <h3 className="font-serif text-6xl md:text-8xl opacity-80 hover:opacity-100 hover:text-accent transition-colors duration-300 whitespace-nowrap">
                            {item} —
                        </h3>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
