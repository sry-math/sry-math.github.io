import styles from "../page.module.css";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

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
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                            <iframe
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                src="https://www.youtube.com/embed/flyhNzVpsSQ"
                                title="김현정수학학원 2026 겨울학기 OT 및 맛보기 영상 (대수 & 미적분1)"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
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
                    <Button href="/#contact" variant="primary">
                        상담 / 문의하기
                    </Button>
                </div>
            </Section>
        </div>
    );
}
