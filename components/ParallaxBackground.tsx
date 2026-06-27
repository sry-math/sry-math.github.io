"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxBackgroundProps {
    image: string;
    /** 배경 사진의 세로 초점 (예: "18%" → 위쪽) */
    focus?: string;
    /** 배경 위에 깔리는 오버레이 (가독성 확보) */
    overlay?: string;
    children: ReactNode;
}

export const ParallaxBackground = ({
    image,
    focus = "18%",
    overlay = "linear-gradient(rgba(15,23,42,0.82), rgba(15,23,42,0.9))",
    children,
}: ParallaxBackgroundProps) => {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    // 스크롤에 따라 배경 사진이 위로 흐르는 패럴랙스
    const y = useTransform(scrollYProgress, [0, 1], ["14%", "-14%"]);

    return (
        <section ref={ref} style={{ position: "relative", overflow: "hidden" }}>
            <motion.img
                src={image}
                alt=""
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "140%",
                    marginTop: "-20%",
                    objectFit: "cover",
                    objectPosition: `center ${focus}`,
                    y,
                }}
            />
            <div style={{ position: "absolute", inset: 0, background: overlay }} />
            <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
        </section>
    );
};
