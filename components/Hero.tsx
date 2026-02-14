"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { Button } from "@/components/Button";
import styles from "@/app/page.module.css";
import { useEffect } from "react";

// Animation Variants
// Animation Variants


const contentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.5, // Wait for background to start blurring
        },
    },
};

const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.2,
        },
    },
};

const letterVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
        rotate: 20,
        scale: 0.5,
    },
    visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

// Helper Component for Animated Text
const AnimatedText = ({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) => {
    // Split text into words, then characters
    const words = text.split(" ");

    return (
        <motion.span
            className={className}
            style={{ display: "inline-block", ...style }}
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, i) => (
                <span key={i} style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: i === words.length - 1 ? 0 : "0.25em" }}>
                    {Array.from(word).map((char, j) => (
                        <motion.span key={j} variants={letterVariants} style={{ display: "inline-block" }}>
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.span>
    );
};

export function Hero() {
    const contentControls = useAnimation();


    useEffect(() => {
        // Just trigger content animation after a delay to sync with global background
        // Background takes ~1.5s to appear, then starts blurring.
        // We want content to appear as blur starts.
        const timer = setTimeout(() => {
            contentControls.start("visible");
        }, 2200);

        return () => clearTimeout(timer);
    }, [contentControls]);



    return (
        <section className={styles.hero} style={{ position: "relative", overflow: "visible" }}>


            {/* Content Layer */}
            <motion.div
                className={styles.heroContent}
                style={{
                    position: "relative",
                    zIndex: 10,
                    maxWidth: "1200px", // Match container width
                    margin: "0 auto",
                    padding: "0 1.5rem", // Match container padding
                    width: "100%",
                    height: "100%",
                    display: "flex", // Ensure flex to center content if needed
                    alignItems: "center",
                    justifyContent: "center",
                }}

                variants={contentVariants}
                initial="hidden"
                animate={contentControls}
            >

                <div className={styles.textContent}>
                    <div className={styles.title} style={{ overflow: "hidden" }}>
                        <AnimatedText text="고등 수학 전문 강사" />
                        <br />
                        <motion.span
                            style={{ display: "inline-block", color: "var(--accent)" }}
                            variants={itemVariants}
                        >
                            성락윤T
                        </motion.span>
                    </div>

                    <motion.p className={styles.subtitle} variants={itemVariants}>
                        학생의 가능성은 타고나는 것이 아니라 설계됩니다.<br />
                        개인별 학습 성향을 분석해 가장 <strong>효율적인 전략</strong>을 제시합니다.<br />
                        고등 전 과정을 아우르는 <strong>실전 중심 수업</strong>으로 <br />
                        고3 수능까지 완성합니다.
                    </motion.p>

                    <motion.div variants={itemVariants} className={styles.buttonGroup}>
                        <Button href="/students" variant="primary">학생용 안내</Button>
                        <Button href="/parents" variant="secondary">학부모용 안내</Button>
                    </motion.div>

                </div>

                <motion.img
                    src="/main_image.jpg"
                    alt="성락윤 선생님 프로필"
                    className={styles.profileImage}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8, x: 50 },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            x: 0,
                            transition: { duration: 0.8, ease: "easeOut" },
                        },
                    }}
                />
            </motion.div>
        </section>
    );
}
