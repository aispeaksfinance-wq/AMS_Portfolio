'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ChevronRight } from 'lucide-react';
import { Magnetic } from '@/components/ui/Magnetic';

export function Hero() {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]" />

            {/* Immersive Floating Elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[15%] right-[10%] w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[20%] left-[5%] w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[40%] left-[15%] w-24 h-24 border border-primary/20 rounded-full -z-10"
            />

            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-extrabold tracking-[0.2em] uppercase mb-8 border border-primary/20 backdrop-blur-sm"
                    >
                        Digital Artisan & Product Designer
                    </motion.span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter mb-8 leading-[0.9] overflow-hidden">
                        <motion.span
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                            className="inline-block"
                        >
                            Creative
                        </motion.span> <br />
                        <motion.span
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-x"
                        >
                            Excellence
                        </motion.span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground mb-12 leading-relaxed font-medium"
                    >
                        Sculpting immersive digital worlds through code and design.
                        Blurring the lines between art and technology.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-10"
                    >
                        <Magnetic>
                            <Button size="lg" className="group rounded-xl px-12 relative overflow-hidden h-14">
                                <span className="relative z-10">Explore Work</span>
                                <motion.div
                                    className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500"
                                />
                                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                            </Button>
                        </Magnetic>
                        <Magnetic>
                            <Button variant="ghost" size="lg" className="hover:bg-primary/5 px-12 h-14 font-bold tracking-tight">
                                Get in Touch
                            </Button>
                        </Magnetic>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
