import Link from "next/link";
import { Star } from "lucide-react";
import Image from "next/image";
import Logo from "../ui/Logo";

export default function HeroSection() {
    return (
        <section id="home" className="relative h-screen w-full overflow-hidden">

            {/* --- 1. FONDS & TEXTURES --- */}
            <div className="fixed inset-0 z-50 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <Image
                src="/jpgs/hero-bg.jpg"
                alt="Pizza artisanale et ingrédients frais ambiance sombre"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center -z-20"
                quality={85}
            />

            {/* Overlays */}
            <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/50 via-mona-ink-950/25 to-mona-ink-950" />


            {/* --- 2. LOGO (Absolute en haut, comme demandé) --- */}
            <div className="absolute top-0 w-full z-30 pt-10 px-4 md:px-12 grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8">

                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-90 h-30 bg-[radial-gradient(closest-side,rgba(255,250,240,0.04),transparent)] -z-10 blur-xl pointer-events-none"></div>

                {/* Ligne Gauche : Remplit sa colonne */}
                <hr className="w-full border-mona-cream-50/50" />

                {/* Logo : Centré par la grille */}
                <Logo className="relative z-10" />

                {/* Ligne Droite : On utilise un wrapper pour gérer le décalage sans casser la grille */}
                <div className="w-full flex items-center"> {/* Le pr-16 crée ton décalage */}
                    <hr className="w-full border-mona-cream-50/50" />
                </div>

            </div>

            {/* --- 3. CONTENEUR PRINCIPAL (Layout "Sandwich") --- */}
            <div className="relative z-10 flex flex-col h-full w-full pt-32 pb-6 px-4">
                <div className="flex-grow flex flex-col justify-center items-center">
                    <h2 className="font-display text-[4rem] sm:text-[6rem] md:text-[7rem] leading-none text-center italic font-extralight tracking-tight text-mona-cream-50 whitespace-nowrap drop-shadow-lg">
                        Cuisine de saison
                    </h2>
                    <h2 className="font-display text-[4rem] sm:text-[6rem] md:text-[7rem] leading-none text-center italic font-extralight tracking-tight text-mona-cream-50 whitespace-nowrap drop-shadow-lg">
                        <span className="font-light italic mr-4 opacity-80">&</span>
                        Vins Vivants<span>.</span>
                    </h2>
                </div>


                {/* B. LE BLOC DU BAS (Description + Social Proof + Signature) */}
                {/* Ce bloc est naturellement poussé tout en bas par le titre au-dessus */}
                <div className="flex flex-col items-center justify-end w-full gap-6">

                    {/* Description */}
                    <p className="max-w-3xl text-center text-mona-cream-50/80 font-light text-sm md:text-base leading-relaxed tracking-wide">
                        Une cuisine instinctive et brute, entièrement dictée par le rythme des micro-saisons. Ici, le menu s’efface pour laisser parler la terre : des assiettes sourcées en direct chez nos producteurs, travaillées sans artifice et sublimées par une cave vivante.
                    </p>

                    {/* Ligne de séparation */}
                    <div className="w-full max-w-3xl border-t border-mona-cream-50"></div>

                    {/* Social Proof */}
                    <div className="flex flex-row items-center justify-between gap-6 md:gap-16 w-full max-w-3xl">

                        {/* Clients */}
                        <div className="flex flex-1 items-center gap-4">
                            <div className="flex -space-x-8 md:-space-x-4">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Client" className="w-10 h-10 rounded-full border-2 border-mona-ink-950 object-cover" />
                                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Client" className="w-10 h-10 rounded-full border-2 border-mona-ink-950 object-cover" />
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Client" className="w-10 h-10 rounded-full border-2 border-mona-ink-950 object-cover" />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-xs md:text-sm font-bold text-mona-cream-50">1k+</span>
                                <span className="text-[7px] md:text-[10px] uppercase tracking-wider opacity-70 text-mona-cream-50">Gourmets</span>
                            </div>
                        </div>

                        {/* Note */}
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-3xl font-display italic text-mona-cream-50 leading-none mb-1">4.9</span>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-3 h-3 fill-mona-cream-50 text-mona-cream-50" />
                                ))}
                            </div>
                        </div>

                        {/* Produits */}
                        <div className="flex flex-row-reverse flex-1 items-center justify-start gap-4">
                            <div className="flex -space-x-8 md:-space-x-4">
                                <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=100&h=100&fit=crop" alt="Vin" className="w-10 h-10 rounded-full border-2 border-mona-ink-950 object-cover" />
                                <img src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=100&h=100&fit=crop" alt="Vin" className="w-10 h-10 rounded-full border-2 border-mona-ink-950 object-cover" />
                                <img src="https://images.unsplash.com/photo-1598532213919-078e54dd1f40?w=100&h=100&fit=crop" alt="Plat" className="w-10 h-10 rounded-full border-2 border-mona-ink-950 object-cover" />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-xs md:text-sm font-bold text-mona-cream-50">120+</span>
                                <span className="text-[7px] md:text-[10px] uppercase tracking-wider opacity-70 text-mona-cream-50">Réf. Vins</span>
                            </div>
                        </div>
                    </div>

                    {/* Signature  */}
                    <div className="flex w-full max-w-md mx-auto items-center justify-center gap-4 text-mona-cream-50/50 text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] mt-4">
                        <p className="flex-1 text-right">
                            Orléans
                        </p>

                        <span className="text-xs">♦</span>

                        <p className="flex-1 text-left">
                            Depuis 1994
                        </p>

                    </div>
                </div>

            </div>
        </section>
    );
}