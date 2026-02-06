import React from 'react';
import Link from 'next/link';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <Link href="/" className="flex items-center gap-2 group mb-4">
                            <div className="relative w-8 h-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                                <svg viewBox="0 0 40 40" className="w-full h-full">
                                    <circle
                                        cx="20" cy="20" r="18"
                                        className="fill-primary/10 stroke-primary/30 stroke-[1.5]"
                                    />
                                    <path
                                        d="M12 28L20 8L28 28M15 22H25"
                                        className="stroke-primary stroke-[3] fill-none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <span className="text-lg font-heading font-bold tracking-tight text-foreground">
                                AMS Web <span className="text-primary/80">Designer</span>
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground mt-2 max-w-xs">
                            Web designer crafting high-end, modern digital experiences since 2020.
                        </p>
                    </div>

                    <div className="flex gap-8 text-sm font-medium">
                        <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
                        <Link href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Work</Link>
                        <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
                        <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
                    </div>

                    <div className="text-sm text-muted-foreground">
                        &copy; {currentYear} Designer Portfolio. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
