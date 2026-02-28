import styles from "../page.module.css";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { YouTubeVideo } from "@/components/YouTubeVideo";

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
                    실제 수업을 들은 학생들이 정성스럽게 남겨준 후기입니다.
                </p>
                <div className={styles.grid} style={{ maxWidth: '1200px' }}>

                    <Card title="testimonial-1">
                        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <h3 className={styles.cardTitle} style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '1.5rem', lineHeight: '1.4' }}>
                                "암기를 넘어 완벽하게 이해할 수 있도록 체계적으로 학습"
                            </h3>
                            <p className={styles.cardDesc} style={{ fontSize: '0.95rem', flexGrow: 1, marginBottom: '1.5rem' }}>
                                "성락윤 선생님 수업의 큰 장점은 제 약점과 학습 방식을 정확히 진단해서 그에 알맞은 전략으로 진행된다는 점입니다. 수2 극한 개념에서 막혔을 때 원리부터 차근차근 짚어 주시며 도와주셨는데, 덕분에 고난도 문제를 만났을 때 스스로 해결할 수 있는 힘을 기를 수 있었습니다. <strong>성적 향상은 물론 수학에 대한 자신감까지 얻게 되었습니다.</strong>"
                            </p>
                            <div style={{ textAlign: "right", fontWeight: "bold", color: "var(--primary)", fontSize: "0.95rem", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                                김ㅇ원 학생
                            </div>
                        </div>
                    </Card>

                    <Card title="testimonial-2">
                        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <h3 className={styles.cardTitle} style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '1.5rem', lineHeight: '1.4' }}>
                                "문제 유형 암기가 아닌 스스로 문제를 해결하는 능력"
                            </h3>
                            <p className={styles.cardDesc} style={{ fontSize: '0.95rem', flexGrow: 1, marginBottom: '1.5rem' }}>
                                "단순한 문제 풀이 위주가 아니라, 개념을 정확히 이해한 후 스스로 문제를 해결할 수 있도록 도와주는 방식이었습니다. 부족한 부분이 있다면 수업이 끝난 뒤에도 끝까지 설명해 주시는 모습에서 <strong>진심이 느껴졌습니다.</strong> 수학의 기초를 탄탄하게 다질 수 있었고, 실제 성적도 많이 올라 매우 만족스러웠습니다."
                            </p>
                            <div style={{ textAlign: "right", fontWeight: "bold", color: "var(--primary)", fontSize: "0.95rem", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                                조ㅇ지 학생
                            </div>
                        </div>
                    </Card>

                    <Card title="testimonial-3">
                        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <h3 className={styles.cardTitle} style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '1.5rem', lineHeight: '1.4' }}>
                                "학생 한 명 한 명을 진심으로 챙겨주시는 수업"
                            </h3>
                            <p className={styles.cardDesc} style={{ fontSize: '0.95rem', flexGrow: 1, marginBottom: '1.5rem' }}>
                                "항상 예시를 섞어 차근차근 설명해 주셔서 수학이 점점 재미있어졌어요. 질문을 하면 대충 넘기지 않으시고, <strong>이해할 때까지 친절하게 알려 주셔서 자신감도 생겼어요.</strong> 학생들을 진심으로 생각해주시는 마음이 고스란히 느껴지는 수업이었습니다."
                            </p>
                            <div style={{ textAlign: "right", fontWeight: "bold", color: "var(--primary)", fontSize: "0.95rem", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                                김ㅇ준 학생
                            </div>
                        </div>
                    </Card>

                    <Card title="testimonial-4">
                        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <h3 className={styles.cardTitle} style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '1.5rem', lineHeight: '1.4' }}>
                                "사소한 습관부터 바로잡아 단단한 수학적 기반 형성"
                            </h3>
                            <p className={styles.cardDesc} style={{ fontSize: '0.95rem', flexGrow: 1, marginBottom: '1.5rem' }}>
                                "성락윤 선생님과 3년이라는 시간을 함께 보내며 중등 수학부터 고등 수학까지 공부했습니다. 풀이 진행에 대한 교정이나, 문제를 마주했을 때 해야 할 생각들과 같은 사소한 것들이 모여 <strong>수학 실력에 대한 단단한 기반이 형성되었습니다.</strong>"
                            </p>
                            <div style={{ textAlign: "right", fontWeight: "bold", color: "var(--primary)", fontSize: "0.95rem", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                                유ㅇ우 학생
                            </div>
                        </div>
                    </Card>

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
