import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Star } from 'lucide-react';
import FadeIn from './animations/FadeIn';
import GoldenParticles from './animations/GoldenParticles';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950 pt-16">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-40 pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s' }}></div>
            </div>

            {/* Golden Dust Particles */}
            <GoldenParticles />

            {/* Bottom Fade for Seamless Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent z-1 pointer-events-none" />

            <div className="container px-4 py-12 md:py-24 relative z-10 flex flex-col items-center text-center gap-8">
                <FadeIn delay={0.2} direction="down">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl">
                        {/* Star Rating Container */}
                        <div className="flex gap-1">
                            {/* 4 Full Stars */}
                            {[...Array(4)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                            ))}
                            {/* 1 Partial Star (80% filled for 4.8 rating) */}
                            <div className="relative">
                                <Star className="w-4 h-4 fill-current text-white/20" />
                                <div className="absolute top-0 left-0 overflow-hidden" style={{ width: '80%' }}>
                                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                </div>
                            </div>
                        </div>
                        <span className="text-sm font-medium text-white/90">Rating 4.8 di Google</span>
                    </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight text-white font-serif drop-shadow-2xl">
                        Udin Busana
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-orange-400 mt-2 italic pb-4">Collection</span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.6}>
                    <p className="max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed font-light">
                        Penjahit Halus & Seragam Premium di Grobogan. Kami menghadirkan keanggunan melalui Kebaya, Jas, Batik, dan seragam profesional dengan ketelitian dan layanan terbaik.
                    </p>
                </FadeIn>

                <FadeIn delay={0.8}>
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow" asChild>
                            <a href="#services">Lihat Layanan</a>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg gap-2 rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white" asChild>
                            <a href="https://maps.app.goo.gl/VXHW+PJ" target="_blank" rel="noopener noreferrer">
                                <MapPin className="w-5 h-5" />
                                Kunjungi Workshop
                            </a>
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
