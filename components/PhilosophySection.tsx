"use client"

import { PHILOSOPHY } from "@/lib/content"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Shield, Users, BarChart } from "lucide-react"

export default function PhilosophySection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const principles = PHILOSOPHY.principles;

    // Icons for visual representation (cycling through a few relevant ones)
    const icons = [Target, Shield, Users, BarChart, Target, Shield];

    return (
        <section
            ref={ref}
            className="py-24 md:py-32 bg-muted/20 relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <span className="text-accent text-sm font-mono uppercase tracking-wider mb-4 block">
                        My Approach
                    </span>
                    <h2 className="text-4xl md:text-6xl font-light text-foreground mb-8">
                        Professional <span className="font-semibold text-accent">Philosophy</span>
                    </h2>

                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
                            "{PHILOSOPHY.quote}"
                        </p>
                    </div>
                </motion.div>

                {/* Principles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {principles.map((principle, index) => {
                        const Icon = icons[index % icons.length];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                className="bg-card p-6 rounded-xl border border-border hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-medium text-foreground pt-2">
                                        {principle}
                                    </h3>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
