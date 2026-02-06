'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ScenicBackground() {
    const { scrollYProgress } = useScroll();

    // Parallax transformations for different layers
    const skyY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
    const mountainsFarY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const mountainsMidY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const treesY = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);

    return (
        <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none bg-background transition-colors duration-500">
            {/* Layer 1: Sky / Far Mountains (Lightest Accent/Primary Blend) */}
            <motion.div
                style={{ y: skyY }}
                className="absolute inset-0 flex items-end justify-center opacity-10 text-primary"
            >
                <svg viewBox="0 0 1440 320" className="w-full h-auto translate-y-24 scale-110">
                    <path fill="currentColor" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </motion.div>

            {/* Layer 2: Mid Mountains (Deeper Theme Color) */}
            <motion.div
                style={{ y: mountainsFarY }}
                className="absolute inset-0 flex items-end justify-center opacity-20 text-accent/60"
            >
                <svg viewBox="0 0 1440 320" className="w-full h-auto translate-y-12 scale-105">
                    <path fill="currentColor" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,224C840,245,960,267,1080,250.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </motion.div>

            {/* Layer 3: Main Mountains (Muted Dark Base) */}
            <motion.div
                style={{ y: mountainsMidY }}
                className="absolute inset-0 flex items-end justify-center text-muted-foreground/10"
            >
                <svg viewBox="0 0 1440 320" className="w-full h-auto translate-y-4">
                    <path fill="currentColor" d="M0,288L80,266.7C160,245,320,203,480,202.7C640,203,800,245,960,266.7C1120,288,1280,288,1360,288L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </motion.div>

            {/* Layer 4: Road/Ground (Glassy Dark Section) */}
            <div className="absolute bottom-0 left-0 right-0 h-[220px] bg-card/20 backdrop-blur-md" />

            {/* Layer 5: Soaring Birds (Dynamic Sky) */}
            <motion.div
                style={{ y: treesY }}
                className="absolute inset-0 pointer-events-none"
            >
                {/* Distance Group (Top Left) */}
                <BirdGroup className="absolute top-[15%] left-[10%] scale-75 opacity-40" delay={0} />
                {/* Mid Group (Center Right) */}
                <BirdGroup className="absolute top-[25%] right-[15%] scale-90 opacity-60" delay={2} />
                {/* Near Group (Bottom Left) */}
                <BirdGroup className="absolute top-[40%] left-[25%] opacity-80" delay={4} />
            </motion.div>
        </div>
    );
}

function Bird({ className, delay = 0 }: { className?: string, delay?: number }) {
    return (
        <motion.div
            className={className}
            animate={{
                y: [0, -4, 0], // Reduced bobbing to stay more steady
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
        >
            <svg viewBox="0 0 24 12" className="w-10 h-5 fill-primary/80">
                <motion.path
                    d="M2,6 Q6,2 12,6 Q18,2 22,6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5" // Increased stroke for visibility
                    strokeLinecap="round"
                    animate={{
                        d: [
                            "M2,6 Q6,2 12,6 Q18,2 22,6", // Flat/V
                            "M2,10 Q6,6 12,10 Q18,6 22,10", // Flap down
                            "M2,6 Q6,2 12,6 Q18,2 22,6"
                        ]
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: delay * 0.2
                    }}
                />
            </svg>
        </motion.div>
    );
}

function BirdGroup({ className, delay = 0 }: { className?: string, delay?: number }) {
    return (
        <div className={className}>
            <Bird className="absolute" delay={delay} />
            <Bird className="absolute left-12 top-6 scale-75" delay={delay + 0.5} />
            <Bird className="absolute left-20 -top-4 scale-50" delay={delay + 1.2} />
        </div>
    );
}
