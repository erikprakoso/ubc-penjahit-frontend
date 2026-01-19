import { Instagram, Facebook, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-stone-950 text-white/80 py-20 font-light">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-5 space-y-6">
                        <a href="/" className="inline-block">
                            <img src="/logo.jpg" alt="Udin Busana Logo" className="h-16 w-auto rounded-xl border border-white/10 mb-4" />
                            <h2 className="text-3xl font-serif font-bold text-white tracking-tight">
                                Udin Busana<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-orange-400 italic">Collection</span>
                            </h2>
                        </a>
                        <p className="text-lg leading-relaxed max-w-sm text-white/60">
                            Menghadirkan keanggunan dalam setiap jahitan. Dedikasi kami adalah kepuasan dan kepercayaan Anda dalam berbusana.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a
                                href="https://www.instagram.com/hasanudin.12/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.facebook.com/hasanudin.sultan.94"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-3 space-y-6">
                        <h3 className="text-white font-serif text-xl">Navigasi</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Beranda', href: '/' },
                                { name: 'Tentang Kami', href: '#about' },
                                { name: 'Layanan', href: '#services' },
                                { name: 'Galeri', href: '#gallery' },
                                { name: 'Kontak', href: '#contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="flex items-center gap-2 hover:text-primary transition-colors group">
                                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-4 space-y-6">
                        <h3 className="text-white font-serif text-xl">Hubungi Kami</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 group">
                                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0 group-hover:text-white transition-colors" />
                                <p className="leading-relaxed group-hover:text-white transition-colors">
                                    Jl. Danyang - Kuwu, Pulokulon,<br />
                                    Grobogan, Jawa Tengah 58181
                                </p>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <Phone className="w-5 h-5 text-primary shrink-0 group-hover:text-white transition-colors" />
                                <a href="tel:+6285786489297" className="hover:text-white transition-colors">0857-8648-9297</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>© {new Date().getFullYear()} Udin Busana Collection. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
