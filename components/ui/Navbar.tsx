"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            {/* --- BARRE DE NAVIGATION (Visible tout le temps) --- */}
            <nav className="fixed top-0 w-full z-50 md:py-6 px-3 md:px-12 flex justify-between md:justify-center items-center text-mona-cream-50 uppercase tracking-[0.2em] font-light">
                
                {/* VERSION DESKTOP (Cachée sur mobile) */}
                <div className="hidden md:flex w-full justify-between items-center text-xs md:text-sm">
                    {/* Groupe Gauche */}
                    <div className="flex gap-16">
                        <NavLink href="/" label="Accueil" />
                        <NavLink href="/#menu" label="La Carte" />
                    </div>

                    {/* Groupe Droite */}
                    <div className="flex gap-16">
                        <NavLink href="/#about" label="À propos" />
                        <NavLink href="/#contact" label="Contact" />
                    </div>
                </div>

                {/* VERSION MOBILE (Bouton Burger) */}
                <div className="md:hidden flex w-full mt-8 justify-end">
                    <button 
                        onClick={() => setIsOpen(true)} 
                        className="py-2 text-mona-cream-50 hover:opacity-70 transition-opacity"
                        aria-label="Ouvrir le menu"
                    >
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </nav>

            {/* --- OVERLAY MOBILE --- */}
            <div className={`fixed inset-0 z-[60] bg-mona-ink-950/95 backdrop-blur-xl transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                
                {/* Bouton Fermer (Croix) */}
                <button 
                    onClick={closeMenu}
                    className="absolute top-6 right-6 p-2 text-mona-cream-50 hover:opacity-70"
                >
                    <X className="w-8 h-8" />
                </button>

                {/* Liens Mobile (Centrés et Gros) */}
                <div className="flex flex-col items-center justify-center h-full gap-10 text-mona-cream-50">
                    <MobileLink href="/" label="Accueil" onClick={closeMenu} />
                    <MobileLink href="/#menu" label="La Carte" onClick={closeMenu} />
                    <MobileLink href="/#about" label="À propos" onClick={closeMenu} />
                    <MobileLink href="/#contact" label="Contact" onClick={closeMenu} />
                    
                    {/* Petit bonus : Signature en bas du menu mobile */}
                    <div className="absolute bottom-10 text-[10px] uppercase tracking-[0.3em] opacity-50">
                        Mona — Orléans
                    </div>
                </div>
            </div>
        </>
    );
}

function NavLink({ href, label }: { href: string, label: string }) {
    return (
        <Link 
            href={href} 
            className="hover:text-white hover:underline decoration-1 underline-offset-4 transition-all"
        >
            {label}
        </Link>
    );
}

function MobileLink({ href, label, onClick }: { href: string, label: string, onClick: () => void }) {
    return (
        <Link 
            href={href} 
            onClick={onClick}
            className="font-display text-3xl italic tracking-wide hover:opacity-70 transition-opacity"
        >
            {label}
        </Link>
    );
}