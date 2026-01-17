import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scissors, Shirt, Ruler, ShoppingBag, CheckCircle2 } from 'lucide-react';
import FadeIn from './animations/FadeIn';
import StaggerContainer from './animations/StaggerContainer';

const services = [
    {
        title: "Kebaya & Pernikahan",
        description: "Kebaya eksklusif untuk pernikahan, wisuda, dan acara spesial. Termasuk gaya modern dan muslim.",
        icon: Scissors,
    },
    {
        title: "Jas Formal & Batik",
        description: "Jas pria jahitan kustom, kemeja batik, dan busana pengantin pria dengan jaminan pas yang sempurna.",
        icon: Ruler,
    },
    {
        title: "Seragam & Korporat",
        description: "Seragam berkualitas tinggi untuk sekolah, kantor, dan organisasi. Menerima pesanan dalam jumlah besar.",
        icon: Shirt,
    },
    {
        title: "Busana Muslim",
        description: "Gamis Syari, Hijab, dan busana sopan yang elegan, dirancang untuk kenyamanan dan gaya.",
        icon: ShoppingBag,
    }
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-stone-950 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                </svg>
            </div>

            {/* Bottom Fade for Seamless Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent z-0 pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <FadeIn direction="down">
                        <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">Layanan Premium</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">Keahlian Kami</h2>
                    </FadeIn>
                    <FadeIn delay={0.2} direction="down">
                        <p className="text-white/70 text-lg leading-relaxed">
                            Kami menggabungkan seni tradisional dengan teknik modern untuk menciptakan busana yang tidak hanya pas, tapi juga bercerita.
                        </p>
                    </FadeIn>
                </div>

                {/* Main Services Grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {services.map((service, index) => (
                        <div key={index} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-serif md:text-2xl">{service.title}</h3>
                            <p className="text-white/60 leading-relaxed font-light">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </StaggerContainer>

                {/* Interactive Tabs for Specialization */}
                <FadeIn delay={0.4} fullWidth>
                    <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold mb-2 font-serif">Spesialisasi & Kategori</h3>
                            <p className="text-white/60">Temukan layanan yang sesuai dengan kebutuhan Anda</p>
                        </div>

                        <Tabs defaultValue="wanita" className="w-full">
                            <TabsList className="grid w-full grid-cols-3 mb-8 bg-black/20 p-1 rounded-xl h-auto">
                                <TabsTrigger value="wanita" className="py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg transition-all">Busana Wanita</TabsTrigger>
                                <TabsTrigger value="pria" className="py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg transition-all">Busana Pria</TabsTrigger>
                                <TabsTrigger value="seragam" className="py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg transition-all">Seragam</TabsTrigger>
                            </TabsList>

                            <TabsContent value="wanita" className="mt-0">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Kebaya Modern & Tradisional",
                                        "Gaun Pengantin (Bridal)",
                                        "Gamis Syari & Hijab",
                                        "Dress Pesta & Wisuda",
                                        "Blouse & Rok Batik",
                                        "Busana Casual Premium"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span className="text-white/90 font-light">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>
                            <TabsContent value="pria" className="mt-0">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Jas Formal (Bespoke Suit)",
                                        "Kemeja Batik Tulis/Cap",
                                        "Safari & PDH",
                                        "Celana Formal & Chino",
                                        "Baju Koko Eksklusif",
                                        "Alterasi Jas"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span className="text-white/90 font-light">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>
                            <TabsContent value="seragam" className="mt-0">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Seragam Kantor/Instansi",
                                        "Seragam Sekolah & Komunitas",
                                        "Seragam Keluarga (Sarimbit)",
                                        "Permak & Alterasi",
                                        "Konsultasi Desain Gratis",
                                        "Produksi Massal (Konveksi)"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span className="text-white/90 font-light">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
