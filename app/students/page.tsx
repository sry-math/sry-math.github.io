import styles from "../page.module.css";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export default function StudentsPage() {
    return (
        <div className="container">
            <section className={styles.hero} style={{ minHeight: '50vh' }}>
                <h1 className={styles.title}>학생용 안내</h1>
                <p className={styles.subtitle}>
                    이 페이지는 학생을 위한 전용 안내 페이지입니다.<br />
                    수업 방식, 과제, 평가 방식을 학생 입장에서 설명합니다.
                </p>
            </section>

            <Section title="수업 방식">
                <div className={styles.grid}>
                    <Card
                        title="1. 개념 정리"
                        description="단순 암기가 아닌 구조를 이해하는 개념 정리로 시작합니다."
                    />
                    <Card
                        title="2. 예제 풀이"
                        description="개념을 바로 적용해볼 수 있는 예제를 함께 풀이합니다."
                    />
                    <Card
                        title="3. 유형 연습"
                        description="학교 시험 및 기출 문제 유형별 집중 훈련을 진행합니다."
                    />
                    <Card
                        title="4. 테스트"
                        description="매 수업 내용을 확인하는 테스트로 실력을 점검합니다."
                    />
                </div>
                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>수업 시간에 이해한 내용은 과제로 한 번 더 복습하게 됩니다.</li>
                    </ul>
                </div>
            </Section>

            <Section title="과제 / 피드백" background="alt">
                <ul className={styles.list}>
                    <li className={styles.listItem}>과제는 “양”보다 “질” 위주로 내며, 오답은 다음 수업에 반영됩니다.</li>
                    <li className={styles.listItem}>본인이 어디서 막히는지 스스로 체크할 수 있도록 도와줍니다.</li>
                </ul>
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a href="/#contact" className={styles.ctaButton}>상담 / 문의로 가기</a>
                </div>
            </Section>
        </div>
    );
}
