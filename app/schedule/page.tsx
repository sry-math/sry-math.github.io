'use client';

import { useState, useEffect } from "react";
import styles from "../page.module.css";
import { Section } from "@/components/Section";
import { ScheduleCalendar } from "@/components/ScheduleCalendar";
import { InlineWidget } from "react-calendly";

// Credentials from user
const GOOGLE_API_KEY = "AIzaSyDAR5lq8LcxhOfkqyabldk92vbc_1Oo5oQ";
const CALENDAR_ID = "fkrdbszz@gmail.com";

export default function SchedulePage() {
    const [isOpen, setIsOpen] = useState(false);
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setRootElement(document.getElementById("root"));
    }, []);

    return (
        <div className="container" id="root">
            <section className={styles.hero} style={{ minHeight: '40vh' }}>
                <h1 className={styles.title}>보강 예약 및 수업 일정</h1>
                <p className={styles.subtitle}>
                    현재 수업 일정을 확인하고, 원하시는 시간에 보강을 예약하세요.<br />
                    아래 버튼을 누르면 예약 팝업이 열립니다.
                </p>
                <div style={{ marginTop: '2rem' }}>
                    <button
                        className={styles.ctaButton}
                        onClick={() => setIsOpen(true)}
                    >
                        📅 보강 예약하기
                    </button>

                    {isOpen && (
                        <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
                            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                                <button
                                    className={styles.closeButton}
                                    onClick={() => setIsOpen(false)}
                                    aria-label="닫기"
                                >
                                    ✕
                                </button>
                                <div style={{ width: '100%', height: '100%' }}>
                                    <InlineWidget
                                        url="https://calendly.com/wkfwktka/30min?hide_landing_page_details=1&hide_gdpr_banner=1&locale=ko"
                                        styles={{ height: '100%' }}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Section title="수업 일정표">
                <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    <ScheduleCalendar apiKey={GOOGLE_API_KEY} calendarId={CALENDAR_ID} />
                </div>
            </Section>
        </div>
    );
}
