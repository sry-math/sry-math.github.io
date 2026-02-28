import styles from "./page.module.css";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { StrategyCard } from "@/components/StrategyCard";
import { Button } from "@/components/Button";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { MainBackground } from "@/components/MainBackground";
import { ScrollReveal } from "@/components/ScrollReveal";
import { YouTubeVideo } from "@/components/YouTubeVideo";

export default function Home() {
  return (
    <>
      <MainBackground />
      <Hero />

      <div className="container">

        {/* Video Section */}
        <ScrollReveal>
          <Section title="수업 미리보기">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <YouTubeVideo
                videoId="flyhNzVpsSQ"
                title="김현정수학학원 2026 겨울학기 OT 및 맛보기 영상 (대수 & 미적분1)"
              />
            </div>
          </Section>
        </ScrollReveal>

        {/* Philosophy Section */}
        <ScrollReveal>
          <Section title="성락윤T 수업의 3가지 차별점">
            <div className={styles.grid}>
              <StrategyCard />
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
        </ScrollReveal>

        {/* Methodology Section */}
        <ScrollReveal>
          <Section id="methodology" title="수학은 단순한 암기가 아닙니다">
            <div className={styles.glassContainer}>
              <ul className={styles.list}>
                <li className={styles.listItem}>개념을 이해하고, 실전에 적용합니다.</li>
                <li className={styles.listItem}>생긴 오답을 체계적으로 검토하며, 교정합니다.</li>
                <li className={styles.listItem}>실전에서 생길 수 있는 문제점들까지 보완합니다.</li>
                <li className={styles.listItem}>내신과 수능 모두 좋은 성과를 도출합니다.</li>
              </ul>
            </div>
          </Section>

        </ScrollReveal>

        {/* Contact Section */}
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>

      </div >
    </>
  );
}

