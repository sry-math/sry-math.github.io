import styles from "./page.module.css";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              고등 수학 전문 강사<br />
              <span style={{ color: "var(--accent)" }}>성락윤T</span>
            </h1>
            <p className={styles.subtitle}>
              학생의 가능성은 타고나는 것이 아니라 설계됩니다.<br />
              개인별 학습 성향을 분석해 가장 <strong>효율적인 전략</strong>을 제시합니다.<br />
              고등 전 과정을 아우르는 <strong>실전 중심 수업</strong>으로 <br />
              고3 수능까지 완성합니다.
            </p>
            <div>
              <Button href="/students" variant="primary">학생용 안내</Button>
              <Button href="/parents" variant="secondary">학부모용 안내</Button>
            </div>
          </div>
          <img
            src="/main_image.jpg"
            alt="성락윤 선생님 프로필"
            className={styles.profileImage}
          />
        </div>
      </section>

      {/* Philosophy Section */}
      <Section title="성락윤T 수업의 3가지 차별점">
        <div className={styles.grid}>
          <Card
            title="학생별 맞춤 전략 제시"
            description="학생마다 다른 학습 성향과 약점을 정확히 진단합니다.
                        획일적인 방식이 아닌, 각 학생에게 가장 효율적인 방향을 제시합니다."
          />
          <Card
            title="연결되는 유형 훈련"
            description="틀린 문제는 실수가 아니라 데이터입니다.
                        오답의 원인을 구조적으로 분석해 같은 실수가 반복되지 않도록 관리합니다."
          />
          <Card
            title="데이터 기반 피드백"
            description="부분 관리가 아닌 전 과정 관리.
                        고등 전 범위를 직접 지도하며 수능 완성까지 이끕니다."
          />
        </div>
      </Section>

      {/* Methodology Section */}
      <Section id="methodology" title="수학은 단순한 암기가 아닙니다" background="alt">
        <ul className={styles.list}>
          <li className={styles.listItem}>개념을 이해하고, 실전에 적용합니다.</li>
          <li className={styles.listItem}>생긴 오답을 체계적으로 검토하며, 교정합니다.</li>
          <li className={styles.listItem}>실전에서 생길 수 있는 문제점들까지 보완합니다.</li>
          <li className={styles.listItem}>내신과 수능 모두 좋은 성과를 도출합니다.</li>
        </ul>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="상담 / 문의">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
          <p className={styles.subtitle}>
            학생의 등급이 낮아도 괜찮습니다. <br />
            배울 의지가 있다면, 또는 간단한 고민만 있으시더라도 <br />
            연락주시면 감사하겠습니다.
          </p>
          <p className={styles.cardDesc}>
            <strong>학원 연락처</strong> : 02-562-5050<br />
            <strong>강사 연락처:</strong> 010-4801-9581<br />
            <strong>상담 가능 시간</strong><br />
            <strong>(강사)</strong> 평일 17:00 이전, 22:00 이후 / 토요일 13:30 이후 / 일요일 무관<br />
            <strong>(학원)</strong> 평일 13:00 이후 22:30 이전 / 토요일 09:00 이후 18:00 이전 / 일요일 휴무
          </p>
          {/* <a
            href="https://calendly.com/wkfwktka/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            style={{ marginTop: '2rem' }}
          >
            📅 상담/보강 예약하기
          </a> */}
        </div>
      </Section >
    </div >
  );
}
