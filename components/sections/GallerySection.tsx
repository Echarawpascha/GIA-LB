"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const images = [
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2670&auto=format&fit=crop",
];

export default function GallerySection() {
    return (
        <section id="gallery" className="py-20 bg-background overflow-hidden">
            <h2 className="font-serif text-4xl md:text-6xl mb-12 text-center text-foreground">Moments</h2>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="gallery-swiper w-full py-10"
            >
                {images.map((src, i) => (
                    <SwiperSlide key={i} className="!w-[300px] md:!w-[600px] !h-[400px]">
                        <img src={src} className="block w-full h-full object-cover rounded-xl" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
