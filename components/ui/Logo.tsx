interface LogoProps {
    className?: string;
}

export default function Logo({ className }: LogoProps) {
    return (
        <h1 className={`flex items-baseline font-display text-3xl md:text-5xl font-normal tracking-wide text-mona-cream-50 ${className}`}>
            <span>M</span>
            <span className="relative mx-0.5">
                O
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-mona-cream-50 text-[6px] md:text-xs">♦</span>
            </span>
            <span>NA</span>
        </h1>
    )
}