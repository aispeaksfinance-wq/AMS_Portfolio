'use client';

import React, { useEffect, useRef } from 'react';

const GRID_SIZE = 30; // Closer dots for high density
const MOUSE_RADIUS = 150; // Interaction radius
const REPULSION_STRENGTH = 0.5; // How strongly dots are pushed
const RETURN_STRENGTH = 0.05; // How strongly dots return to home
const FRICTION = 0.9; // Movement dampening

interface Particle {
    x: number;
    y: number;
    homeX: number;
    homeY: number;
    vx: number;
    vy: number;
    colorOffset: number; // For color variety
}

export function DotGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const particlesRef = useRef<Particle[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const initGrid = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            const cols = Math.ceil(width / GRID_SIZE) + 1;
            const rows = Math.ceil(height / GRID_SIZE) + 1;

            const newParticles: Particle[] = [];
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    const x = j * GRID_SIZE;
                    const y = i * GRID_SIZE;
                    newParticles.push({
                        x,
                        y,
                        homeX: x,
                        homeY: y,
                        vx: 0,
                        vy: 0,
                        colorOffset: Math.random()
                    });
                }
            }
            particlesRef.current = newParticles;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        let primaryColor = '#3b82f6';
        let accentColor = '#8b5cf6';

        const updateColors = () => {
            const style = getComputedStyle(document.documentElement);
            primaryColor = style.getPropertyValue('--primary').trim() || '#3b82f6';
            accentColor = style.getPropertyValue('--accent').trim() || '#8b5cf6';
        };

        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const mouse = mouseRef.current;
            const particles = particlesRef.current;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < MOUSE_RADIUS) {
                    const angle = Math.atan2(dy, dx);
                    const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
                    p.vx -= Math.cos(angle) * force * REPULSION_STRENGTH;
                    p.vy -= Math.sin(angle) * force * REPULSION_STRENGTH;
                }

                p.vx += (p.homeX - p.x) * RETURN_STRENGTH;
                p.vy += (p.homeY - p.y) * RETURN_STRENGTH;

                p.vx *= FRICTION;
                p.vy *= FRICTION;
                p.x += p.vx;
                p.y += p.vy;

                const isNearMouse = distance < MOUSE_RADIUS;
                const intensity = isNearMouse ? (1 - distance / MOUSE_RADIUS) : 0;

                // Draw pill/line shape
                ctx.save();
                ctx.translate(p.x, p.y);

                // Base slant + slight reaction to mouse
                const baseRotation = -Math.PI / 4; // Slant like the screenshot
                ctx.rotate(baseRotation);

                const length = isNearMouse ? 4 + intensity * 8 : 4;
                const width = isNearMouse ? 1.5 + intensity * 0.5 : 1.2;

                ctx.beginPath();
                // Base color variety
                const isAccentBase = p.colorOffset > 0.8;
                const baseColor = isAccentBase ? accentColor : primaryColor;

                ctx.strokeStyle = isNearMouse
                    ? `${accentColor}${Math.floor(intensity * 100 + 80).toString(16).padStart(2, '0')}`
                    : `${baseColor}22`;

                ctx.lineWidth = width;
                ctx.lineCap = 'round';
                ctx.moveTo(-length / 2, 0);
                ctx.lineTo(length / 2, 0);
                ctx.stroke();

                if (intensity > 0.6) {
                    ctx.shadowBlur = 8;
                    ctx.shadowColor = accentColor;
                    ctx.stroke();
                }

                ctx.restore();
            }

            requestAnimationFrame(animate);
        };

        initGrid();
        updateColors();
        window.addEventListener('resize', initGrid);
        window.addEventListener('mousemove', handleMouseMove);

        const observer = new MutationObserver(updateColors);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        const animationFrame = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', initGrid);
            window.removeEventListener('mousemove', handleMouseMove);
            observer.disconnect();
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-20 pointer-events-none opacity-60"
        />
    );
}
