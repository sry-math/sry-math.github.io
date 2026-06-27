"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ProfileSectionProps {
    image: string;
    eyebrow: string;
    title: string;
    body: string;
    /** 배경 사진의 세로 초점 위치 (예: "20%" → 위쪽, "50%" → 가운데) */
    focus?: string;
}

export const ProfileSection = ({ image, eyebrow, title, body, focus = "18%" }: ProfileSectionProps) => {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    // 스크롤에 따라 배경 사진이 위로 흐르는 패럴랙스
    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    return (
        <section
            ref={ref}
            style={{
                position: "relative",
                height: "100vh",
                overflow: "hidden",
                display: "flex",
                alignItems: "flex-end",
            }}
        >
            <motion.img
                src={image}
                alt=""
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "130%",
                    objectFit: "cover",
                    objectPosition: `center ${focus}`,
                    y,
                }}
            />
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.6) 38%, rgba(15,23,42,0.1) 72%, rgba(15,23,42,0.35) 100%)",
                }}
            />
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    position: "relative",
                    maxWidth: 1100,
                    margin: "0 auto",
                    padding: "0 1.5rem 10vh",
                    width: "100%",
                    color: "#fff",
                }}
            >
                <span
                    style={{
                        display: "inline-block",
                        color: "#93c5fd",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        fontSize: "0.9rem",
                        marginBottom: "1rem",
                    }}
                >
                    {eyebrow}
                </span>
                <h2
                    style={{
                        fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                        fontWeight: 800,
                        margin: "0 0 1.2rem",
                        maxWidth: 760,
                        lineHeight: 1.25,
                        letterSpacing: "-0.02em",
                        wordBreak: "keep-all",
                        textShadow: "0 2px 16px rgba(0,0,0,0.55)",
                    }}
                >
                    {title}
                </h2>
                <p
                    style={{
                        fontSize: "1.15rem",
                        maxWidth: 620,
                        lineHeight: 1.8,
                        color: "rgba(255,255,255,0.9)",
                        wordBreak: "keep-all",
                        margin: 0,
                        textShadow: "0 1px 12px rgba(0,0,0,0.6)",
                    }}
                >
                    {body}
                </p>
            </motion.div>
        </section>
    );
};
