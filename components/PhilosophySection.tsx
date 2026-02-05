import abstractBg from "@/public/assets/abstract-bg.jpg";
import workspace from "@/public/assets/workspace.jpg";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const philosophyWords = [
    "Independent",
    "Systematic",
    "Multidisciplinary",
    "Focused",
];

const PhilosophySection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="py-24 md:py-32 bg-gradient-to-b from-surface/50 to-background relative overflow-hidden"
        >
            {/* Decorative background */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                        My Approach
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text">
                        Philosophy
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-full" />
                </motion.div>

                {/* Image Mosaic */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="col-span-2 row-span-2"
                    >
                        <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl group">
                            <Image
                                src={workspace}
                                alt="Workspace"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent group-hover:from-primary/40 transition-all duration-500" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="col-span-1"
                    >
                        <div className="relative h-36 md:h-44 rounded-3xl overflow-hidden shadow-xl group">
                            <img
                                src={"https://img.freepik.com/free-vector/creative-abstract-quantum-illustration_23-2149236239.jpg"}
                                alt="Abstract"
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors duration-500" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="col-span-1"
                    >
                        <div className="relative h-36 md:h-44 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center group hover:from-primary/30 hover:to-purple-500/30 transition-all duration-500 shadow-xl">
                            <span className="text-primary font-bold text-4xl group-hover:scale-125 transition-transform duration-500">{'</>'}</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="col-span-2"
                    >
                        <div className="relative h-36 md:h-44 rounded-3xl overflow-hidden shadow-xl group">
                            <Image
                                src="https://res.cloudinary.com/dgmrrew73/image/upload/v1770303195/stock-vector-55536305-L_pckjvx.png"
                                alt="Abstract background"
                                fill
                                className="object-cover scale-x-[-1] group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-emerald-500/30 group-hover:to-emerald-500/40 transition-colors duration-500" />
                        </div>
                    </motion.div>
                </div>

                {/* Philosophy Words */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {philosophyWords.map((word, index) => {
                        const colors = [
                            'from-primary to-blue-500',
                            'from-purple-500 to-pink-500',
                            'from-emerald-500 to-teal-500',
                            'from-orange-500 to-rose-500'
                        ];
                        const bgColors = [
                            'bg-primary/10',
                            'bg-purple-500/10',
                            'bg-emerald-500/10',
                            'bg-orange-500/10'
                        ];
                        const lineColors = [
                            'bg-gradient-to-r from-primary to-blue-500',
                            'bg-gradient-to-r from-purple-500 to-pink-500',
                            'bg-gradient-to-r from-emerald-500 to-teal-500',
                            'bg-gradient-to-r from-orange-500 to-rose-500'
                        ];
                        const hoverBgColors = [
                            'hover:bg-primary/20',
                            'hover:bg-purple-500/20',
                            'hover:bg-emerald-500/20',
                            'hover:bg-orange-500/20'
                        ];

                        return (
                            <motion.div
                                key={word}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                whileHover={{ scale: 1.1, y: -8 }}
                                className="text-center"
                            >
                                <div className={`${bgColors[index]} ${hoverBgColors[index]} px-8 py-5 rounded-2xl mb-4 inline-block transition-all duration-300 shadow-lg hover:shadow-2xl`}>
                                    <h3 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${colors[index]} bg-clip-text text-transparent`}>
                                        {word}
                                    </h3>
                                </div>
                                <div className={`w-16 h-2 ${lineColors[index]} mx-auto rounded-full`} />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
