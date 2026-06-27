"use client";

import { motion } from "framer-motion";
import styles from "../app/page.module.css";

const POINTS = [
    "개념을 이해하고, 실전에 적용합니다.",
    "생긴 오답을 체계적으로 검토하며, 교정합니다.",
    "실전에서 생길 수 있는 문제점들까지 보완합니다.",
    "내신과 수능 모두 좋은 성과를 도출합니다.",
];

export const MethodologySection = () => {
    return (
        <section id="methodology" className={styles.section} style={{ background: "#f5f1ea" }}>
            <div className={styles.methodLayout}>
                {/* 우측: 이미지 (위 차별점 섹션은 이미지 좌측 → 여기선 우측으로 대비) */}
                <motion.div
                    className={styles.methodImageWrap}
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <img src="/methodology.jpg" alt="수학 수업 판서" className={styles.methodImage} />
                </motion.div>

                {/* 좌측: 텍스트 */}
                <motion.div
                    className={styles.methodText}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className={styles.methodEyebrow}>수업 철학</span>
                    <h2 className={styles.methodTitle}>수학은 단순한 암기가 아닙니다</h2>
                    <p className={styles.methodLead}>
                        개념을 이해하고 실전에 적용하는, 시험이 바뀌어도 흔들리지 않는 수학.
                    </p>
                    <ul className={styles.methodList}>
                        {POINTS.map((t, i) => (
                            <li key={i} className={styles.methodItem}>
                                <span className={styles.methodNum}>0{i + 1}</span>
                                <span>{t}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};
