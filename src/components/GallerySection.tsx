import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FadeIn from './animations/FadeIn';
import { ArrowUpRight } from 'lucide-react';

const galleryItems = [
    {
        id: 1,
        title: "Kebaya & Batik Modern",
        category: "Traditional Wear",
        image: "/batik-kebaya.webp",
        size: "md:col-span-2 md:row-span-2",
        delay: 0,
        link: "https://www.instagram.com/p/CaM3cO5ltyF/"
    },
    {
        id: 2,
        title: "Bridesmaid Series",
        category: "Party Wear",
        image: "/bridesmaid.webp",
        size: "md:col-span-1 md:row-span-1",
        delay: 0.1,
        link: "https://www.instagram.com/p/CaDc2Lch7Ff/"
    },
    {
        id: 3,
        title: "Engagement Couple",
        category: "Special Occasion",
        image: "/batik-kebaya-lamaran.jpg",
        size: "md:col-span-1 md:row-span-1",
        delay: 0.2,
        link: "https://www.instagram.com/p/CXKynLIFwvq/"
    },
    {
        id: 4,
        title: "Classic Menswear",
        category: "Bespoke Suit",
        image: "/jas-pria.webp",
        size: "md:col-span-1 md:row-span-1",
        delay: 0.3,
        link: "https://www.instagram.com/p/Cmhs2Xpyota/"
    },
    {
        id: 5,
        title: "Premium Batik",
        category: "Heritage",
        image: "/batik.webp",
        size: "md:col-span-1 md:row-span-1",
        delay: 0.4,
        link: "https://www.instagram.com/p/CtNrTznyntE/"
    },
    {
        id: 6,
        title: "Kebaya Wisuda",
        category: "Graduation",
        image: "/kebaya-wisuda.jpg",
        size: "md:col-span-1 md:row-span-1",
        delay: 0.5,
        link: "https://www.instagram.com/p/CO40Z8pFzAH/"
    },
    {
        id: 7,
        title: "Father & Son Suit",
        category: "Family Set",
        image: "/jas-pria-dewasa-anak.jpg",
        size: "md:col-span-1 md:row-span-1",
        delay: 0.6,
        link: "https://www.instagram.com/p/B8D3TwkFzUY/"
    },
    {
        id: 8,
        title: "Modest Fashion",
        category: "Muslim Wear",
        image: "/muslim-wanita.jpg",
        size: "md:col-span-1 md:row-span-1",
        delay: 0.6,
        link: "https://www.instagram.com/p/BvQehQ9lhQg/"
    },
    {
        id: 9,
        title: "Modern Koko",
        category: "Men's Muslim Wear",
        image: "/baju-muslim.webp",
        size: "md:col-span-1 md:row-span-1",
        delay: 0.6,
        link: "https://www.instagram.com/p/CdkSRM-FQ7n/"
    }
];

export default function GallerySection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

    return (
        <section id="gallery" className="py-24 bg-stone-950 text-white relative">
            {/* Luxury Ambient Light */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-stone-950/50 to-stone-950 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

            {/* Bottom Fade for Seamless Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent z-1 pointer-events-none" />

            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <FadeIn direction="down">
                            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">Portofolio</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white mb-4">Mahakarya Kami</h2>
                        </FadeIn>
                        <FadeIn delay={0.2} direction="down">
                            <p className="text-white/60 text-lg font-light leading-relaxed">
                                Setiap jahitan adalah dedikasi. Jelajahi koleksi karya terbaik kami yang menggabungkan presisi teknis dan estetika tinggi.
                            </p>
                        </FadeIn>
                    </div>
                </div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2,
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-8 auto-rows-[300px]"
                >
                    {galleryItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
                            }}
                            className={`${item.size} group relative overflow-hidden rounded-3xl bg-white/5 cursor-pointer`}
                        >
                            <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />

                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                decoding="async"
                                className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                            />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-primary text-xs font-bold tracking-widest uppercase bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                            {item.category}
                                        </span>
                                        {item.link ? (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100 hover:bg-primary hover:text-white"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <ArrowUpRight className="w-5 h-5" />
                                            </a>
                                        ) : (
                                            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                                <ArrowUpRight className="w-5 h-5" />
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-white drop-shadow-lg">{item.title}</h3>
                                </div>
                            </div>

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
