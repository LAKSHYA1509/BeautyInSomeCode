import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import abstractBg from "@/components/assets/abstract-bg.jpg";
import workspace from "@/components/assets/workspace.jpg";

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
            className="section-padding bg-surface relative overflow-hidden"
        >
            <div className="container-custom">
                {/* Image Mosaic */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="col-span-2 row-span-2"
                    >
                        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden float-animation">
                            <Image
                                src={workspace}
                                alt="Workspace"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="col-span-1"
                    >
                        <div className="relative h-32 md:h-36 rounded-2xl overflow-hidden" style={{ animationDelay: "1s" }}>
                            <Image
                                src={abstractBg}
                                alt="Abstract"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="col-span-1"
                    >
                        <div className="relative h-32 md:h-36 rounded-2xl overflow-hidden bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-2xl">{'</>'}</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="col-span-2"
                    >
                        <div className="relative h-32 md:h-36 rounded-2xl overflow-hidden">
                            <Image
                                src={abstractBg}
                                alt="Abstract background"
                                fill
                                className="object-cover scale-x-[-1]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/30" />
                        </div>
                    </motion.div>
                </div>

                {/* Philosophy Words */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {philosophyWords.map((word, index) => (
                        <motion.div
                            key={word}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            className="text-center"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                                {word}
                            </h3>
                            <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
