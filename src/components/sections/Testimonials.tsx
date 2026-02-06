'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/portfolio';
import { Quote } from 'lucide-react';

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Testimonials</h2>
                    <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">What My Clients Say</h3>
                    <p className="text-muted-foreground text-lg">
                        I'm proud to have collaborated with ambitious companies and individuals to create impactful digital experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-10 rounded-3xl bg-card border border-border relative overflow-hidden"
                        >
                            <div className="absolute top-8 right-10 text-primary/10">
                                <Quote size={80} fill="currentColor" />
                            </div>
                            <div className="relative z-10">
                                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 italic">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold overflow-hidden">
                                        {/* Placeholder until avatarts generated */}
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
