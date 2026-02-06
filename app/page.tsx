import styles from "./page.module.css";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          중·고등 수학 전문 강사<br />
          <span style={{ color: "var(--accent)" }}>성락윤T</span>
        </h1>
        <p className={styles.subtitle}>
          단순히 문제를 많이 풀게 하는 수업이 아니라,<br />
          <strong>“왜 이렇게 푸는지”</strong>가 남는 수업을 지향합니다.<br />
          중등 내신부터 고등 모의고사·수능까지, 하나의 흐름으로 연결해 지도합니다.
        </p>
        <div>
          <Button href="/students" variant="primary">학생용 안내</Button>
          <Button href="/parents" variant="secondary">학부모용 안내</Button>
        </div>
      </section>

      {/* Philosophy Section */}
      <Section title="성락윤T 수업의 3가지 철학">
        <div className={styles.grid}>
          <Card
            title="구조가 보이는 개념"
            description="공식 암기가 아니라, “왜 이런 식이 나오는지”를 그림·상황과 함께 설명합니다."
          />
          <Card
            title="연결되는 유형 훈련"
            description="비슷한 구조의 문제를 묶어서 “이 문제와 저 문제가 어떻게 같은지”를 보게 합니다."
          />
          <Card
            title="데이터 기반 피드백"
            description="학생별 오답·실수 유형을 기록하고, 다음 수업과 과제에 그대로 반영합니다."
          />
        </div>
      </Section>

      {/* Methodology Section */}
      <Section id="methodology" title="이런 흐름으로 수업합니다" background="alt">
        <ul className={styles.list}>
          <li className={styles.listItem}>개념을 구조로 정리하고, 예제를 통해 바로 적용합니다.</li>
          <li className={styles.listItem}>학교·기출 문제를 유형별로 묶어 사고 과정을 훈련합니다.</li>
          <li className={styles.listItem}>시험 전에는 실제 난이도에 맞춘 실전 모의·내신 대비를 합니다.</li>
          <li className={styles.listItem}>오답 데이터와 실수를 기록해 다음 수업에 반영합니다.</li>
        </ul>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="상담 / 문의">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
          <p className={styles.subtitle}>
            학생의 현재 상황과 목표, 학교 내신 난이도 등을 기준으로<br />
            수업 방향이 맞을지, 어떤 계획이 현실적인지 함께 이야기합니다.
          </p>
          <div className={styles.card} style={{ textAlign: "left", display: "inline-block", minWidth: "300px", maxWidth: "100%" }}>
            <p className={styles.cardDesc}>
              <strong>연락처:</strong> 010-4801-9581<br />
              <strong>이메일:</strong> contact@example.com<br />
              <strong>상담 가능 시간:</strong> 평일 14:00 - 22:00
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
