import styles from "../page.module.css";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export default function ParentsPage() {
    return (
        <div className="container">
            <section className={styles.hero} style={{ minHeight: '50vh' }}>
                <h1 className={styles.title}>학부모용 안내</h1>
                <p className={styles.subtitle}>
                    자녀의 공부가 걱정되시는 부모님들께서 이해하실 수 있도록 친절히 작성하였습니다. <br />
                    궁금하신 부분은 언제든 편하게 문의주시면 감사하겠습니다.
                </p>
            </section>

            <Section title="수업 철학">
                <div className={styles.grid}>
                    <Card title="고교 수학은 체계화된 시스템">
                        <h3 className={styles.cardTitle}>고교 수학은 체계화된 시스템</h3>
                        <p className={styles.cardDesc}>
                            수학을 잘하는 것은 재능이지만, 점수가 잘 나오는 것은 재능이 아닌 노력입니다.
                            그 노력을 정도(올바른 길)로 갈 수 있도록, 지도합니다.
                            고3까지 아이들이 흔들리지 않을 수 있는 수업을 제공하겠습니다.
                        </p>
                    </Card>
                    <Card title="학부모에게 진실된 상담">
                        <h3 className={styles.cardTitle}>학부모에게 진실된 상담</h3>
                        <p className={styles.cardDesc}>
                            아이가 조금 부족해서 그렇다. 공부를 열심히 해야한다. 등 뻔한 상담은 진행하지 않습니다.
                            아이 하나하나 세심히 관찰하여 필요한 부분을 진단하고,
                            숨김없이 해당 부분 상담드리도록 약속하겠습니다.
                        </p>
                    </Card>
                </div>
            </Section>

            <Section title="상담 방향" background="alt">
                <ul className={styles.list}>
                    <li className={styles.listItem}>아이와 선생님 부모님까지 같은 방향을 추구합니다.</li>
                    <li className={styles.listItem}>한 계단씩 성장해 나갈 수 있도록 계획을 제공합니다.</li>
                    <li className={styles.listItem}>부모님에게 숨기는 거짓된 모습을 보여드리지 않습니다.</li>
                </ul>
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a href="/contact" className={styles.ctaButton}>상담 / 문의로 가기</a>
                </div>
            </Section>
        </div>
    );
}
