import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StaggerContainerProps {
    children: React.ReactNode;
    delay?: number;
    staggerDelay?: number;
    className?: string;
}

export default function StaggerContainer({
    children,
    delay = 0,
    staggerDelay = 0.1,
    className = ""
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delay,
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className={className}
        >
            {React.Children.map(children, (child) => (
                <motion.div variants={item}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
}
