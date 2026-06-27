import styles from "./page.module.css";
import { Section } from "@/components/Section";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { MainBackground } from "@/components/MainBackground";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ProfileSection } from "@/components/ProfileSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { MethodologySection } from "@/components/MethodologySection";
import { YouTubeVideo } from "@/components/YouTubeVideo";

export default function Home() {
  return (
    <>
      <MainBackground />
      <Hero />

      {/* Profile Parallax Sections */}
      <ProfileSection
        image="/main_image2.jpg"
        eyebrow="책임 교육"
        title="고3 수능까지, 끝까지 함께 책임집니다"
        body="학년이 바뀌거나 입시가 가까워졌다는 이유로 교육의 책임을 다른 곳으로 넘기지 않습니다. 한 학원의 고등부를 전담하며, 고3까지 학생의 성장을 함께 책임집니다."
      />
      <ProfileSection
        image="/main_image3.jpg"
        eyebrow="수업 철학"
        title="보여주기보다, 실제 수업과 결과로"
        body="빠른 성적 향상만을 약속하지 않습니다. 느리더라도 흔들리지 않는 실력, 시험이 바뀌어도 통하는 본질적인 수학 실력을 만드는 수업을 지향합니다."
      />

      <div className="container">

        {/* Video Section */}
        <ScrollReveal>
          <Section title="수업 미리보기">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <YouTubeVideo
                videoId="kz6Tnw5tqCU"
                title="2026 여름학기 2학기 OT"
              />
            </div>
          </Section>
        </ScrollReveal>

      </div>

      {/* Philosophy Section - 좌측 사진 / 우측 슬라이드인 카드 */}
      <DifferenceSection />

      {/* Methodology Section - 코치 소개 스타일 (이미지 우측) */}
      <MethodologySection />

      <div className="container">

        {/* Contact Section */}
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>

      </div >
    </>
  );
}

