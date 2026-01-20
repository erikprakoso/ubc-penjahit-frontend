import React from 'react';
import { Button } from '@/components/ui/button';
import FadeIn from './animations/FadeIn';

export default function AboutSection() {
    return (
        <section id="about" className="py-32 bg-stone-950 relative overflow-hidden">
            {/* Decorative Elements */}
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-transparent -skew-x-12 translate-x-32 z-0 pointer-events-none" />

            {/* Bottom Fade for Seamless Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent z-10 pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Image Area - Asymmetrical & Floating */}
                    <div className="lg:col-span-7 relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary via-red-400 to-orange-400 opacity-20 blur-3xl rounded-full group-hover:opacity-30 transition-opacity duration-700" />
                        <FadeIn direction="right" className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-4 mt-12">
                                <img
                                    src="/kebaya.webp"
                                    alt="Detail jahitan"
                                    className="rounded-2xl shadow-2xl w-full h-64 object-cover transform hover:-translate-y-2 transition-transform duration-500 ring-1 ring-white/10"
                                />
                                <div className="bg-stone-900/80 backdrop-blur-md text-white p-6 rounded-2xl shadow-2xl border border-white/10">
                                    <p className="font-serif text-4xl font-bold text-primary mb-1">10+</p>
                                    <p className="text-sm font-light text-white/80">Tahun Pengalaman</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <img
                                    src="/kemeja-batik-pria.png"
                                    alt="Tekstur kain"
                                    className="rounded-2xl shadow-2xl w-full h-80 object-cover transform hover:-translate-y-2 transition-transform duration-500 ring-1 ring-white/10"
                                />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-5 space-y-8">
                        <FadeIn delay={0.2}>
                            <div className="relative">
                                <div className="w-16 h-1 bg-gradient-to-r from-primary via-red-400 to-orange-400 mb-6" />
                                <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
                                    Seni Menjahit <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-orange-400">Eksklusif</span>
                                </h2>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <p className="text-lg text-white/70 leading-relaxed font-light">
                                <span className="text-white font-medium">Udin Busana Collection</span> didirikan pada tahun 2016 dengan satu visi: menghadirkan busana yang tidak hanya dipakai, tetapi dirasakan.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <p className="text-white/50 leading-relaxed">
                                Kami percaya bahwa setiap jahitan menceritakan kisah. Dari pemilihan bahan premium hingga pengukuran presisi, kami memastikan setiap karya kami merefleksikan kepribadian dan standar tinggi Anda. Bukan sekadar penjahit, kami adalah mitra gaya Anda.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.5}>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="px-5 py-3 bg-white/5 border border-white/10 rounded-lg text-white/90 font-medium text-sm hover:bg-white/10 transition-colors cursor-default">Jahit Eksklusif</div>
                                <div className="px-5 py-3 bg-white/5 border border-white/10 rounded-lg text-white/90 font-medium text-sm hover:bg-white/10 transition-colors cursor-default">Bahan Premium</div>
                                <div className="px-5 py-3 bg-white/5 border border-white/10 rounded-lg text-white/90 font-medium text-sm hover:bg-white/10 transition-colors cursor-default">Konsultasi Ahli</div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.6}>
                            <div className="pt-8 flex items-center gap-8">
                                <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg hover:shadow-primary/20 bg-white text-stone-950 hover:bg-white/90" asChild>
                                    <a href="#contact">Konsultasi Gratis</a>
                                </Button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
