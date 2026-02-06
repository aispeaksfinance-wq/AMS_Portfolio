'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { projects } from '@/data/portfolio';
import { ExternalLink, ArrowRight, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export function Portfolio() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll every 6 seconds
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % projects.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section
            id="portfolio"
            className="pt-16 pb-32 bg-background relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    {/* Left Side: Content */}
                    <div className="lg:w-1/3 z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-6">Selected Projects</h2>
                            <h3 className="text-5xl md:text-6xl font-heading font-black tracking-tighter mb-8 leading-[0.9]">
                                Crafting Digital <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Impact</span>
                            </h3>
                            <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-medium">
                                A curated selection of high-end projects where design meets functionality in perfect harmony.
                            </p>

                            <div className="space-y-4 mb-12">
                                {projects.map((project, i) => (
                                    <button
                                        key={project.id}
                                        onClick={() => setActiveIndex(i)}
                                        className={cn(
                                            "flex items-center gap-4 transition-all duration-300 text-left group",
                                            activeIndex === i ? "text-primary translate-x-2" : "text-muted-foreground/60 hover:text-foreground hover:translate-x-1"
                                        )}
                                    >
                                        <span className={cn(
                                            "w-10 h-[2px] transition-all",
                                            activeIndex === i ? "bg-primary w-16" : "bg-muted-foreground/20"
                                        )} />
                                        <span className="text-sm font-bold uppercase tracking-widest">{project.title}</span>
                                    </button>
                                ))}
                            </div>

                            <Button variant="outline" className="rounded-xl px-8 group">
                                View Full Archive
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right Side: Stacked Cards */}
                    <div className="lg:w-2/3 relative h-[500px] md:h-[600px] flex items-center justify-center w-full">
                        <div className="relative w-full max-w-md aspect-[3/4]">
                            <AnimatePresence mode="popLayout">
                                {projects.map((project, i) => {
                                    // Calculate relative index from active
                                    const relativeIndex = (i - activeIndex + projects.length) % projects.length;
                                    const isActive = relativeIndex === 0;

                                    // Stack positions
                                    const x = relativeIndex * 20;
                                    const y = -relativeIndex * 20;
                                    const rotate = relativeIndex * 6;
                                    const scale = 1 - (relativeIndex * 0.05);
                                    const opacity = 1 - (relativeIndex * 0.3);

                                    return (
                                        <motion.div
                                            key={project.id}
                                            style={{ zIndex: projects.length - relativeIndex }}
                                            initial={{ opacity: 0, scale: 0.8, x: 100 }}
                                            animate={{
                                                opacity: opacity > 0 ? opacity : 0,
                                                scale,
                                                x,
                                                y,
                                                rotate,
                                                filter: isActive ? 'blur(0px)' : 'blur(2px)'
                                            }}
                                            exit={{ opacity: 0, scale: 0.5, x: -200, rotate: -20 }}
                                            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                                            className="absolute inset-0 cursor-pointer"
                                            onClick={() => {
                                                if (isActive) {
                                                    window.open(project.link, '_blank');
                                                } else {
                                                    setActiveIndex(i);
                                                }
                                            }}
                                        >
                                            <div className="w-full h-full bg-card border border-border rounded-[2rem] overflow-hidden shadow-2xl group relative">
                                                <div className="relative w-full h-full">
                                                    {/* Project Image / Placeholder */}
                                                    <div className="absolute inset-0 bg-muted overflow-hidden">
                                                        {project.image ? (
                                                            <div className="relative w-full h-full">
                                                                <Image
                                                                    src={project.image}
                                                                    alt={project.title}
                                                                    fill
                                                                    className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                                                                />
                                                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay" />
                                                            </div>
                                                        ) : (
                                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-card to-muted">
                                                                <div className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.5em] opacity-10 -rotate-45">
                                                                    {project.title}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Blur Overlay for background cards */}
                                                    {!isActive && <div className="absolute inset-0 bg-background/40 backdrop-blur-[4px] z-10" />}

                                                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                                                        <div className="flex flex-wrap gap-2 mb-4">
                                                            {project.tags.slice(0, 2).map(tag => (
                                                                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-white/70 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <h4 className="text-3xl font-heading font-black text-white mb-2 leading-tight">{project.title}</h4>
                                                        <p className="text-sm text-white/60 line-clamp-2 font-medium">{project.description}</p>

                                                        {isActive && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                className="mt-6 flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest group/btn"
                                                            >
                                                                View Project <Plus size={14} className="group-hover/btn:rotate-90 transition-transform" />
                                                            </motion.div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
