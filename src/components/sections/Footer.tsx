import React from 'react';
import Link from 'next/link';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <Link href="/" className="text-xl font-heading font-bold tracking-tight text-primary">
                            DESIGNER<span className="text-foreground">.</span>
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
