import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FadeIn from './animations/FadeIn';

export default function LocationSection() {
    return (
        <section id="contact" className="flex flex-col md:block relative w-full overflow-hidden bg-stone-950 md:h-[700px]">
            {/* Map - Stacked on Mobile, Full Background on Desktop */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.44045000219896!2d110.9963872!3d-7.1205287!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70ae07c3db34e9%3A0x58d82e728b3b3d50!2sUdin%20Busana%20Collection!5e0!3m2!1sen!2sid!4v1768521329514!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[350px] w-full md:absolute md:inset-0 md:h-full z-10 bg-stone-800 order-1 md:order-none"
            ></iframe>

            {/* Floating Contact Card */}
            <div className="relative z-20 md:absolute md:inset-0 flex items-center justify-center md:justify-end container px-4 mx-auto md:pointer-events-none order-2 md:order-none py-8 md:py-0">
                <FadeIn direction="left" className="w-full md:w-[450px] pointer-events-auto">
                    <div className="bg-stone-900/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10 md:mr-10 text-white">
                        <h2 className="text-3xl font-serif font-bold tracking-tight mb-2 text-white">Kunjungi Workshop</h2>
                        <p className="text-white/60 mb-8">
                            Rasakan pengalaman tailoring eksklusif di studio kami.
                        </p>

                        <div className="space-y-6">
                            {/* Address */}
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                                    <MapPin className="w-6 h-6 text-primary group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 text-white">Alamat</h3>
                                    <p className="text-white/70 leading-relaxed text-sm group-hover:text-white transition-colors">
                                        Jl. Danyang - Kuwu, Pulokulon,<br />
                                        Grobogan, Jawa Tengah 58181
                                    </p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                                    <Clock className="w-6 h-6 text-primary group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 text-white">Jam Operasional</h3>
                                    <p className="text-primary font-medium text-sm">Buka Setiap Hari</p>
                                    <p className="text-white/70 text-sm group-hover:text-white transition-colors">07.00 - 17.00 WIB</p>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                                    <Phone className="w-6 h-6 text-primary group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 text-white">Hubungi Kami</h3>
                                    <p className="text-white/60 text-sm mb-1">Siap melayani konsultasi</p>
                                    <a href="tel:+6285786489297" className="text-lg font-bold hover:text-primary transition-colors text-white">0857-8648-9297</a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <Button size="lg" className="w-full bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20" asChild>
                                <a href="https://wa.me/6285786489297" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                            </Button>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
