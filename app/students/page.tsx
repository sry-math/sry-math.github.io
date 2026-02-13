import styles from "../page.module.css";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export default function StudentsPage() {
    return (
        <div className="container">
            <section className={styles.hero} style={{ minHeight: '50vh' }}>
                <h1 className={styles.title}>학생용 안내</h1>
                <p className={styles.subtitle}>
                    성락윤 선생님은 여러분들을 위해 다음과 같은 과정을 적용합니다. <br />
                    한 페이지에 담길 수 없는 많은 이야기가 있지만, <br />
                    모쪼록 학생 여러분이 읽어보시고 이해 될 수 있도록 작성하였습니다.
                </p>
            </section>

            <Section title="수업 방식">
                <div className={styles.grid}>
                    <Card
                        title="1. 개념 정리"
                        description="증명을 통한 수업을 진행합니다. 증명 없는 암기는 하지 않습니다."
                    />
                    <Card
                        title="2. 문제 풀이"
                        description="꼭 문제를 풀어보고, 실전에 적용합니다."
                    />
                    <Card
                        title="3. 오답 검토"
                        description="풀이법의 문제 또는 수학적 사고력에 더딤이 있는 부분을 확인합니다."
                    />
                    <Card
                        title="4. 밀착 관리"
                        description="개인별 관리를 통하여, 더 나아가는 방향을 추구합니다."
                    />
                </div>
                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>해당 내용들은 절대 어기지 않으며, 누적으로 관리됩니다.</li>
                    </ul>
                </div>
            </Section>

        </div>
    );
}
