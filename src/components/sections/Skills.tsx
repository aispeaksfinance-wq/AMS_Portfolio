'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

export function Skills() {
    const categories = ['Design', 'Frontend', 'Tools', 'Others'];

    return (
        <section id="about" className="pt-32 pb-16 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-4">Expertise & Skills</h2>
                        <h3 className="text-5xl md:text-6xl font-heading font-black tracking-tighter mb-8 leading-tight">
                            Technical <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Competencies</span>
                        </h3>
                        <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl font-medium">
                            I combine design intuition with technical proficiency to build products that are both beautiful and functionally superior.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1, duration: 0.8 }}
                            whileHover={{ y: -5 }}
                            className="relative group h-full"
                        >
                            <div className="h-full p-8 rounded-[2rem] bg-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-2xl shadow-black/5">
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <span className="text-4xl font-black italic tracking-tighter uppercase">{category[0]}</span>
                                </div>

                                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground/40 mb-10 border-b border-border/50 pb-4">{category}</h4>

                                <div className="space-y-8">
                                    {skills
                                        .filter((skill) => skill.category === category)
                                        .map((skill, index) => (
                                            <div key={skill.name} className="relative">
                                                <div className="flex justify-between items-end mb-3">
                                                    <span className="text-sm font-bold tracking-tight text-foreground/80 group-hover:text-foreground transition-colors">{skill.name}</span>
                                                    <motion.span
                                                        initial={{ opacity: 0 }}
                                                        whileInView={{ opacity: 1 }}
                                                        className="text-[10px] font-black tabular-nums text-primary/60"
                                                    >
                                                        {skill.level}%
                                                    </motion.span>
                                                </div>

                                                <div className="h-1.5 w-full bg-muted/50 rounded-full overflow-hidden relative">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 + catIndex * 0.2 }}
                                                        className="h-full bg-gradient-to-r from-primary to-accent relative"
                                                    >
                                                        {/* Animated Highlight Edge */}
                                                        <motion.div
                                                            animate={{
                                                                opacity: [0.4, 1, 0.4],
                                                                x: ['-100%', '100%']
                                                            }}
                                                            transition={{
                                                                duration: 2,
                                                                repeat: Infinity,
                                                                ease: "linear"
                                                            }}
                                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full"
                                                        />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
