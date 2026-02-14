"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";

const backgroundVariants: Variants = {
    initial: {
        opacity: 0,
        scale: 1.1,
        filter: "blur(0px) brightness(1)",
    },
    animate: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px) brightness(1)",
        transition: {
            duration: 1.5,
            ease: "easeOut",
        },
    },
    blur: {
        opacity: 0.4, // Dimmed for readability of content on top
        scale: 1.05,
        filter: "blur(10px) brightness(0.7)",
        transition: {
            duration: 1.5,
            ease: "easeInOut",
        },
    },
};

export function MainBackground() {
    const controls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            // 1. Appear clear
            await controls.start("animate");
            // 2. Blur and dim
            controls.start("blur");
        };
        sequence();
    }, [controls]);

    return (
        <motion.div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: -1,
                overflow: "hidden",
                backgroundColor: "#0f172a", // Fallback color
            }}
            variants={backgroundVariants}
            initial="initial"
            animate={controls}
        >
            <picture>
                <source media="(max-width: 768px)" srcSet="/background2.png" />
                <img
                    src="/background.png"
                    alt="Background"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                />
            </picture>
        </motion.div>
    );
}



