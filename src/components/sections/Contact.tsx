'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Dribbble } from 'lucide-react';

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
        formData.append("from_name", "AMS Portfolio");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSubmitted(true);
            } else {
                console.error("Error", data);
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error", error);
            alert("Connection error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Contact</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8">Let's Create Something <span className="text-primary">Extraordinary</span> Together</h3>
                        <p className="text-muted-foreground text-lg mb-12">
                            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects and creative opportunities.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Email Me</h4>
                                    <a href="mailto:aispeaksfinance@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">aispeaksfinance@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Location</h4>
                                    <p className="text-muted-foreground">Bengaluru</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {[
                                { icon: Linkedin, link: '#' },
                                { icon: Github, link: '#' },
                                { icon: Dribbble, link: '#' },
                            ].map((social, i) => (
                                <a key={i} href={social.link} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm relative">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 bg-card rounded-3xl z-10"
                            >
                                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                                    <Send size={40} />
                                </div>
                                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                                <p className="text-muted-foreground mb-8">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                                <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Name</label>
                                        <input
                                            name="name"
                                            required
                                            className="w-full bg-muted border border-border rounded-xl px-5 py-3 outline-none focus:border-primary transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                                        <input
                                            name="email"
                                            type="email"
                                            required
                                            className="w-full bg-muted border border-border rounded-xl px-5 py-3 outline-none focus:border-primary transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                                    <select name="subject" className="w-full bg-muted border border-border rounded-xl px-5 py-3 outline-none focus:border-primary transition-colors">
                                        <option>Web Design</option>
                                        <option>UI/UX Strategy</option>
                                        <option>Development</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full bg-muted border border-border rounded-xl px-5 py-3 outline-none focus:border-primary transition-colors resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                                <Button type="submit" size="lg" className="w-full py-4 text-base" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
