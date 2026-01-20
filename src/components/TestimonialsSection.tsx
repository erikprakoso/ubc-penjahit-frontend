import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Star, User } from 'lucide-react';

import FadeIn from './animations/FadeIn';

const reviews = [
    { text: "Busana yang bagus", stars: 4, user: "Febryan TVG" },
    { text: "Memberikan penilaian bintang 5", stars: 5, user: "Abdurrahman Al ghi fari" },
    { text: "Memberikan penilaian bintang 5", stars: 5, user: "Nur Yani" },
    { text: "Memberikan penilaian bintang 5", stars: 5, user: "RadityaEsa Kurniawan" },
    { text: "Memberikan penilaian bintang 5", stars: 5, user: "rokim Grab" },
    { text: "Memberikan penilaian bintang 5", stars: 5, user: "Nursidik Sidik" },
    { text: "Hasilnya memuaskan, pas di badan dan sesuai dengan keinginan saya.", stars: 5, user: "Erik Prakoso" },
];

export default function TestimonialsSection() {
    return (
        <section id="reviews" className="py-24 bg-stone-950 relative">
            {/* Luxury Ambient Light */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-stone-950/50 to-stone-950 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

            {/* Bottom Fade for Seamless Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent z-1 pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <FadeIn direction="down">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-4 text-white">Suara Mereka</h2>
                    </FadeIn>
                    <FadeIn delay={0.2} direction="down">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <span className="text-5xl font-bold text-white">4.8</span>
                            <div className="flex flex-col items-start">
                                <div className="flex gap-1">
                                    {/* 4 Full Stars */}
                                    {[...Array(4)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                                    ))}
                                    {/* 1 Partial Star (80% filled for 4.8 rating) */}
                                    <div className="relative">
                                        <Star className="w-5 h-5 fill-current text-white/20" />
                                        <div className="absolute top-0 left-0 overflow-hidden" style={{ width: '80%' }}>
                                            <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                                        </div>
                                    </div>
                                </div>
                                <span className="text-white/60 text-sm">Berdasarkan Ulasan Google</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <div className="relative overflow-hidden w-full mask-gradient-x">
                    <div className="flex gap-6 animate-marquee w-max py-4">
                        {[...reviews, ...reviews, ...reviews].map((review, i) => (
                            <div key={i} className="w-[350px] md:w-[400px] p-8 rounded-2xl bg-stone-900/80 border border-white/10 hover:border-primary/50 transition-colors shrink-0">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg">
                                        <User className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-lg">{review.user}</p>
                                        <div className="flex text-yellow-500 text-xs mt-1">
                                            {[...Array(review.stars)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-white/80 italic text-lg leading-relaxed font-light">"{review.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
