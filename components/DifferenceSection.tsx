"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";
import { StrategyCard } from "./StrategyCard";
import { Card } from "./Card";
import styles from "../app/page.module.css";

/**
 * 스크롤 위치에 직접 연동되는 카드.
 * 스크롤을 내리면 세로로 긴 직사각형(좁은 너비) → 가로로 넓은 직사각형(꽉 찬 너비)으로
 * 실시간 변형되고, 올리면 그대로 되돌아간다. (애니메이션이 아니라 scroll-linked)
 */
function ScrollCard({ children }: { children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });
    const width = useTransform(scrollYProgress, [0, 0.38], ["42%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0.4, 1]);

    return (
        <motion.div ref={ref} style={{ width, opacity, marginLeft: "auto" }}>
            {children}
        </motion.div>
    );
}

export const DifferenceSection = () => {
    return (
        <section className={styles.section} style={{ background: "#f5f1ea" }}>
            <h2 className={styles.sectionTitle}>성락윤T 수업의 3가지 차별점</h2>
            <div className={styles.diffLayout}>
                    {/* 좌측: 사진 (스크롤 동안 고정) */}
                    <div className={styles.diffImageWrap}>
                        <img src="/main_image.jpg" alt="성락윤 선생님" className={styles.diffImage} />
                    </div>

                    {/* 우측: 스크롤에 연동되어 세로 → 가로로 변형되는 카드들 */}
                    <div className={styles.diffCards}>
                        <ScrollCard>
                            <StrategyCard />
                        </ScrollCard>
                        <ScrollCard>
                            <Card
                                title="연결되는 유형 훈련"
                                description="틀린 문제는 실수가 아니라 데이터입니다.
                          오답의 원인을 구조적으로 분석해 같은 실수가 반복되지 않도록 관리합니다."
                            />
                        </ScrollCard>
                        <ScrollCard>
                            <Card
                                title="데이터 기반 피드백"
                                description="부분 관리가 아닌 전 과정 관리.
                          고등 전 범위를 직접 지도하며 수능 완성까지 이끕니다."
                            />
                        </ScrollCard>
                    </div>
                </div>
        </section>
    );
};
