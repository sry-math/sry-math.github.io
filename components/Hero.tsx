"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import styles from "@/app/page.module.css";

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.textContent}>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        고등 수학 전문 강사<br />
                        <span style={{ color: "var(--accent)" }}>성락윤T</span>
                    </motion.h1>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        학생의 가능성은 타고나는 것이 아니라 설계됩니다.<br />
                        개인별 학습 성향을 분석해 가장 <strong>효율적인 전략</strong>을 제시합니다.<br />
                        고등 전 과정을 아우르는 <strong>실전 중심 수업</strong>으로 <br />
                        고3 수능까지 완성합니다.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Button href="/students" variant="primary">학생용 안내</Button>
                        <Button href="/parents" variant="secondary">학부모용 안내</Button>
                    </motion.div>
                </div>
                <motion.img
                    src="/main_image.jpg"
                    alt="성락윤 선생님 프로필"
                    className={styles.profileImage}
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                />
            </div>
        </section>
    );
}
