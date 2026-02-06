'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/data/portfolio';
import { Layout, Code, Users, Smartphone, Palette, Zap } from 'lucide-react';

const iconMap: Record<string, any> = {
    layout: Layout,
    code: Code,
    users: Users,
    smartphone: Smartphone,
    palette: Palette,
    zap: Zap,
};

export function Services() {
    return (
        <section id="services" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Services</h2>
                    <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">How I Can Help You</h3>
                    <p className="text-muted-foreground text-lg">
                        Delivering high-end digital solutions that elevate your brand and engage your audience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = iconMap[service.icon] || Zap;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-3xl bg-card border border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Icon size={28} />
                                </div>
                                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                                <p className="text-muted-foreground leading-relaxed italic">
                                    "{service.description}"
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
