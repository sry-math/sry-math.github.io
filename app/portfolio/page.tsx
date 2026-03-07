import styles from "../page.module.css";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { YouTubeVideo } from "@/components/YouTubeVideo";

const TESTIMONIALS = [
    {
        name: "장○원 학생",
        title: "올바른 공부 마인드 탑재, 성적 향상의 지름길",
        content: "성락윤 선생님 수업을 들으면 공부에 대한 기본적인 마인드를 탑재할 수 있어요. <strong>등급대가 낮아도 잘 따라오기만 한다면 성적이 오를거에요.</strong>",
    },
    {
        name: "유○우 학생",
        title: "사소한 습관 교정으로 쌓아올린 탄탄한 1등급 기반",
        content: "문제 풀이에 대한 교정이나 마주했을 때 해야 할 생각 등 사소한 것들이 모여 <strong>수학 실력에 대한 단단한 기반이 형성되었습니다.</strong> 빈출 유형은 물론 확장 가능성까지 염두에 둔 공부로 고득점을 얻었습니다.",
    },
    {
        name: "김○준 학생",
        title: "진심이 담긴 세심한 케어와 몰입감 넘치는 수업",
        content: "<strong>이해가 될 때까지 여러 가지 방법으로 차근차근 설명해 주셔서 수학이 재밌어졌어요.</strong> 대충 넘기지 않는 친절한 질문 답변 덕분에 자신감도 많이 생겼고 스스로 풀어보는 힘도 길러졌습니다.",
    },
    {
        name: "김○원 학생",
        title: "정확한 진단으로 암기를 넘어선 완벽한 원리 이해",
        content: "선생님 수업의 가장 큰 장점은 제 약점과 학습 방식을 정확히 진단해서 알맞은 전략으로 진행된다는 점입니다. <strong>덕분에 고난도 문제를 만났을 때 스스로 수월하게 해결할 수 있는 힘을 길렀습니다.</strong>",
    },
    {
        name: "김○선 학생",
        title: "빈틈없는 밀착 관리가 부른 수학에 대한 폭발적 흥미",
        content: "수업시간과 클리닉 시간에 한명한명 꼼꼼하게 피드백해주시고 <strong>밀착 관리해주셔서 좋았어요.</strong> 복잡한 문제도 쉽게 풀이하는 방법을 체화시켜 혼자 숙제할 때 수월했고 성정도 크게 올랐습니다.",
    },
    {
        name: "선○윤 학생",
        title: "막연한 주입식 No! 질문 중심의 완벽한 이해 확인 시스템",
        content: "단순히 문제만 설명해주시는게 아니라 <strong>질문을 통해 제대로 이해했는지 확실하게 점검해주셔서 좋았어요.</strong> 오답과 시험지 분석 등 학생 관리를 철저히 해주셔서 강력한 믿음이 갑니다.",
    },
    {
        name: "정○현 학생",
        title: "수포자 방지! 거부감 제로의 스텝별 맞춤 학습",
        content: "판서가 매우 깔끔하고 주말/일일 테스트 결과를 바탕으로 즉각적인 피드백을 주십니다. <strong>학생들이 수학에 거부감을 느끼지 않도록 스텝별로 쪼개어 차근차근 알려주시는 점이 훌륭합니다.</strong>",
    },
    {
        name: "김○현 학생",
        title: "한 명 한 명 꿰뚫어보는 완벽 맞춤형 교육",
        content: "선생님은 정말 학생 파악의 달인이십니다. 정확히 파악한 정보로 맞춤형 양질의 교육을 제공해 주시며, <strong>좋은 점과 고칠 점을 가감 없이 명확히 짚어주셔서 감정 소모 없이 오로지 실력만 폭발적으로 발전합니다.</strong>",
    },
    {
        name: "장○재 학생",
        title: "적극적 참여를 이끌어내는 막힘없고 쾌속한 강의",
        content: "수업 진행이 정말 시원시원합니다. <strong>적극적인 수업 참여를 유도하고 여러가지 창의적인 방식으로 문제를 풀어주셔서</strong> 다각도로 생각하는 수학적 통찰력이 크게 넓어집니다.",
    },
    {
        name: "양○영 학생",
        title: "꼼꼼함의 끝판왕! 명확한 방향 제시와 강력한 동기부여",
        content: "개별 맞춤 피드백을 통해 <strong>나아가야 할 방향을 명확히 제시해 주시고, 작은 부분까지 놓치지 않는 디테일함</strong> 덕분에 수학 실력이 향상되고 학습에 대한 엄청난 동기부여를 얻었습니다.",
    },
    {
        name: "조○지 학생",
        title: "유형 암기 탈피! 스스로 생각하고 해결하는 진짜 수학",
        content: "단순한 기계식 문제 풀이가 아니라, <strong>개념을 완벽히 이해한 후 스스로 문제를 해결할 수 있도록 돕는 치밀한 방식</strong>입니다. 학생을 끝까지 책임지는 진심을 느꼈고, 실제 성적으로도 증명되었습니다.",
    },
    {
        name: "이○호 학생",
        title: "진도 빼기 식 수업은 그만! 완벽한 이해 기반의 안성맞춤 수업",
        content: "무엇보다 수업 몰입도가 최고입니다. <strong>한 개념을 완벽히 이해하기 전까진 무의미한 진도를 나가지 않아</strong> 다음 진도도 빈틈없이 챙길 수 있고, 어떤 질문이든 100% 흡수할 때까지 받아주십니다.",
    },
    {
        name: "허○원 학생",
        title: "물고기를 잡아주지 않고, 잡는 법을 가르치는 수업",
        content: "답을 그냥 떠먹여 주시는 것이 아니라 <strong>학생 스스로 머리를 써서 끝까지 문제를 해결할 수 있게 끈질기게 유도해 주십니다.</strong> 정확한 피드백과 모낭염 없는 깔끔한 오답 관리가 예술입니다.",
    },
    {
        name: "유○서 학생",
        title: "숙제부터 개념 설명까지 빈틈을 허락하지 않는 꼼꼼함",
        content: "선생님께서 매번 <strong>철저한 숙제 검사 후 주신 명확한 피드백과 심도 깊은 꼼꼼한 개념 설명</strong>이 놀라운 성적 향상의 핵심 무기가 되었습니다.",
    },
    {
        name: "안○윤 학생",
        title: "안 좋은 풀이 습관을 뿌리채 뽑아주는 기적의 클리닉",
        content: "학생들의 눈높이에서 가장 직관적인 풀이법을 알려주시고 개인별 고칠 점을 매우 예리하게 짚어주십니다. <strong>잘못된 풀이 습관이 모두 교정되어 문제 풀이가 놀랍도록 수월해졌습니다.</strong>",
    },
    {
        name: "최○희 학생",
        title: "다른 학부모님과 친구에게도 강력 추천하고 싶은 명강의",
        content: "선생님이 정말 친절하시고 무엇보다 어떠한 어려운 강의 개념도 단번에 <strong>스펀지처럼 꽉 잡고 이해가 쏙쏙 되게 만들어 주십니다.</strong>",
    },
    {
        name: "장○준 학생",
        title: "수능 수학을 가장 만만하게 만들어주는 특화형 전문가",
        content: "<strong>눈앞이 캄캄하고 복잡했던 고등 수학을 너무나도 친숙하고 쉽게 다가갈 수 있도록 만들어주시는</strong> 실력 특화 선생님입니다. 매 수업이 정말 즐겁습니다.",
    },
    {
        name: "엄○연 학생",
        title: "압도적인 실력 그 자체, 의심할 필요가 없는 프리미엄 강좌",
        content: "선생님 본인이 수학을 압도적으로 통달하셨습니다. <strong>선생님의 확실한 실력 하나만으로도 믿고 따라갈 절대적인 가치가 있는 가장 완벽한 수업입니다.</strong>",
    },
    {
        name: "허○휘 학생",
        title: "끊임없는 '질문'으로 잠든 뇌를 깨우는 사고력 훈련",
        content: "일방적인 강의에 그치지 않고, <strong>수업 중 끊임없이 질문을 던져 스스로 사고를 유도하시기 때문에</strong> 닫혀 있던 수학적 사고의 틀이 폭발적으로 확장되었습니다.",
    }
];

export default function PortfolioPage() {
    return (
        <div className="container">
            <section className={styles.hero} style={{ minHeight: '50vh' }}>
                <h1 className={styles.title}>성락윤T 수업 포트폴리오</h1>
                <p className={styles.subtitle}>
                    제 수업 소개 영상입니다. 해당 페이지 및 유튜브에서 직접 보실 수 있습니다.
                </p>
            </section>

            <Section title="고등부 수업 영상">
                <div className={styles.grid} style={{ maxWidth: '1200px' }}>

                    {/* Video 1 */}
                    <Card title="Video1" className="!p-0 overflow-hidden">
                        <YouTubeVideo
                            videoId="flyhNzVpsSQ"
                            title="김현정수학학원 2026 겨울학기 OT 및 맛보기 영상 (대수 & 미적분1)"
                        />
                        <div style={{ padding: '1.5rem' }}>
                            <h3 className={styles.cardTitle}>2026 1학기 소개영상 성락윤</h3>
                            {/* <p className={styles.cardDesc}>
                                대수 및 미적분1에 대한 전반적인 설명과 수업 방식에 대한 안내 영상입니다.
                            </p> */}
                        </div>
                    </Card>

                    {/* Video 2 */}
                    {/* <Card title="Video2" className="!p-0 overflow-hidden">
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                            <iframe
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                src="https://www.youtube.com/embed/9C-NCcWhbK8"
                                title="고1 B3반 수업 영상"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div style={{ padding: '1.5rem' }}>
                            <h3 className={styles.cardTitle}>고1 B3반 수업 영상</h3>
                            <p className={styles.cardDesc}>
                                "기초부터 심화까지 너도 할 수 있어"
                            </p>
                        </div>
                    </Card> */}

                </div>
            </Section>



            <Section title="생생한 수강 후기" background="alt">
                <p style={{ textAlign: "center", marginBottom: "3rem", color: "var(--secondary)", fontSize: "1.1rem" }}>
                    수학의 본질을 깨닫고 성적 향상을 이뤄낸 학생들의 생생한 후기입니다.
                </p>
                <div className={styles.grid} style={{ maxWidth: '1200px' }}>
                    {TESTIMONIALS.map((testi, idx) => (
                        <Card key={idx} title={`testimonial-${idx}`}>
                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <h3 className={styles.cardTitle} style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '1.5rem', lineHeight: '1.4' }}>
                                    "{testi.title}"
                                </h3>
                                <p
                                    className={styles.cardDesc}
                                    style={{ fontSize: '0.95rem', flexGrow: 1, marginBottom: '1.5rem' }}
                                    dangerouslySetInnerHTML={{ __html: `"${testi.content}"` }}
                                />
                                <div style={{ textAlign: "right", fontWeight: "bold", color: "var(--primary)", fontSize: "0.95rem", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                                    {testi.name}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* <Section title="고등부 특강 수업 영상" background="alt">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Card title="Special Lecture" className="!p-0 overflow-hidden">
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                            <iframe
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                src="https://www.youtube.com/embed/r0sUTFws8No"
                                title="미적분 1 기본 + 심화 특강"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div style={{ padding: '1.5rem' }}>
                            <h3 className={styles.cardTitle}>미적분 1 기본 + 심화 특강</h3>
                            <p className={styles.cardDesc}>
                                정의 → 그래프 → 문제 적용을 한 흐름으로 설명합니다.
                            </p>
                        </div>
                    </Card>
                </div>
            </Section> */}

            <Section>
                <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
                    {/* <h2 className={styles.sectionTitle}>이 수업이 우리 아이에게 맞을지 궁금하시다면</h2> */}
                    <p className={styles.subtitle}>
                        수업을 보고 문의 사항이 있으시다면<br />
                        언제든 편하게 연락주시면 감사하겠습니다.
                    </p>
                    <Button href="/contact" variant="primary">
                        상담 / 문의하기
                    </Button>
                </div>
            </Section>
        </div>
    );
}
