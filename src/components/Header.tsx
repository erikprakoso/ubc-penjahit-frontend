import React, { useState } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
// Assuming Button will be available at this path
import { Button } from '@/components/ui/button';

const links = [
    { href: '#about', label: 'Tentang' },
    { href: '#services', label: 'Layanan' },
    { href: '#gallery', label: 'Galeri' },
    { href: '#reviews', label: 'Ulasan' },
    { href: '#contact', label: 'Kontak' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-stone-950/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <a href="/" className="flex items-center gap-2">
                    <img src="/logo.jpg" alt="Udin Busana Logo" className="h-12 w-auto rounded-full border border-white/10" />
                    <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
                        Udin Busana <span className="text-primary italic font-serif">Collection</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-white/70 hover:text-primary transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button variant="outline" size="sm" className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white" asChild>
                        <a href="tel:085786489297" className="flex items-center gap-2 text-white">
                            <Phone className="w-4 h-4" />
                            Telepon
                        </a>
                    </Button>
                    <Button size="sm" asChild>
                        <a href="https://maps.app.goo.gl/VXHW+PJ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white">
                            <MapPin className="w-4 h-4" />
                            Kunjungi
                        </a>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-stone-950 border-b border-white/10 shadow-xl p-4 flex flex-col gap-4 animate-accordion-down">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-lg font-medium text-white py-2 border-b border-white/10 last:border-0"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="flex gap-4 mt-4">
                        <Button className="flex-1" asChild>
                            <a href="https://maps.app.goo.gl/VXHW+PJ" className="text-white">Peta</a>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
