"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";
import { StrategyCard } from "./StrategyCard";
import { ModalCard } from "./ModalCard";
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
                            <ModalCard
                                title="연결되는 유형 훈련"
                                description="최신 출제 경향을 분석해 학군지 학생에게 필요한 수준의 문항을 직접 선별·제작합니다."
                                modalTitle="연결되는 유형 훈련"
                                modalBody={[
                                    "평가원·교육청 기출문항은 <strong style='color:var(--accent)'>매년 변화</strong>합니다. 과거의 적중 경험에 머무르지 않고 <strong style='color:var(--accent)'>최신 출제 경향을 분석</strong>하여 학군지 학생들에게 필요한 수준의 문항을 선별·제작합니다. 변화하는 시험에 맞춰 사고력을 점검하고 실전 감각을 끌어올릴 수 있는 <strong style='color:var(--accent)'>시대 반영형 문항</strong>을 제공합니다.",
                                    "출제 경향 분석과 적중 문항을 말로만 내세우지 않습니다. 실제 수업 자료와 제공 문항을 공개하여 <strong style='color:var(--accent)'>직접 검증</strong>받겠습니다. 수업의 가치는 화려한 설명이 아니라 학생들이 마주하는 문제의 수준과 학습의 깊이로 증명된다고 생각합니다.",
                                ]}
                                image="/sample-typetraining.png"
                                imageCaption="실제 기출 문항과 예상 적중 문항 제작 사례"
                            />
                        </ScrollCard>
                        <ScrollCard>
                            <ModalCard
                                title="데이터 기반 피드백"
                                description="과제 수행 현황, 오답 패턴, 취약 단원, 문항별 성취도를 데이터로 분석해 학생마다 다른 학습 전략과 피드백을 제공합니다."
                                modalTitle="데이터 기반 피드백"
                                modalBody={[
                                    "학생의 현재 위치를 정확히 파악하는 것에서 성장은 시작됩니다. 과제 수행 현황, 오답 패턴, 취약 단원, 문항별 성취도를 데이터로 분석하여 학생마다 다른 학습 전략과 피드백을 제공합니다. 막연한 조언이 아닌 객관적인 근거를 바탕으로 학습 방향을 설계합니다.",
                                    "성적은 학생마다 다른 원인으로 정체되고, 다른 방식으로 성장합니다. 획일적인 교육 방식보다 학생 개개인의 학습 특성과 사고 과정을 이해하는 것이 중요하다고 생각합니다. 한 명 한 명을 세심하게 관찰하며, 각자의 강점을 살리고 약점을 보완할 수 있는 맞춤형 학습 지도를 제공합니다.",
                                ]}
                                footnote="아래 자료는 실제 학생들에게 제공된 학습 데이터 및 피드백 사례입니다. 학생별 학습 현황, 취약 유형, 과제 수행도, 성취도 분석 등을 체계적으로 기록·관리하여 객관적인 근거를 바탕으로 학습 방향을 제시합니다."
                                image="/sample-feedback.png"
                                imageCaption="학생별 모의고사 오답·학습 데이터 관리 사례"
                            />
                        </ScrollCard>
                    </div>
                </div>
        </section>
    );
};
