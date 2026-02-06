import styles from "../page.module.css";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export default function ParentsPage() {
    return (
        <div className="container">
            <section className={styles.hero} style={{ minHeight: '50vh' }}>
                <h1 className={styles.title}>학부모용 안내</h1>
                <p className={styles.subtitle}>
                    이 페이지는 학부모님을 위한 전용 안내 페이지입니다.<br />
                    수업 철학, 상담 방향, 성적 관리 방식을 설명합니다.
                </p>
            </section>

            <Section title="수업 철학">
                <div className={styles.grid}>
                    <Card title="장기적인 수학 체력">
                        <h3 className={styles.cardTitle}>장기적인 수학 체력</h3>
                        <p className={styles.cardDesc}>
                            단기 성적도 중요하지만, 장기적인 수학 체력을 만드는 것을 목표로 합니다.
                            고등 수학 전체를 관통하는 흔들리지 않는 실력을 만듭니다.
                        </p>
                    </Card>
                    <Card title="스스로 사고하는 힘">
                        <h3 className={styles.cardTitle}>스스로 사고하는 힘</h3>
                        <p className={styles.cardDesc}>
                            “문제 푸는 기계”가 아니라, 스스로 사고하는 학생을 지향합니다.
                            처음 보는 문제도 배운 개념을 통해 접근할 수 있는 힘을 기릅니다.
                        </p>
                    </Card>
                </div>
            </Section>

            <Section title="상담 방향" background="alt">
                <ul className={styles.list}>
                    <li className={styles.listItem}>현재 상황(학교, 성적, 목표)과 학생 성향을 함께 고려합니다.</li>
                    <li className={styles.listItem}>무리한 목표보다, 현실적으로 도달 가능한 계획을 제안합니다.</li>
                    <li className={styles.listItem}>학생과의 라포(Rapport) 형성을 통해 동기부여를 이끌어냅니다.</li>
                </ul>
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a href="/#contact" className={styles.ctaButton}>상담 / 문의로 가기</a>
                </div>
            </Section>
        </div>
    );
}
