import React from 'react';
import styles from '../app/page.module.css';
import { Section } from '@/components/Section';

export const ContactSection = () => {
    return (
        <Section id="contact" title="상담 / 문의">
            <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
                <p className={styles.subtitle}>
                    학생의 등급이 낮아도 괜찮습니다. <br />
                    학생이 나아가야 할 방향에 대해 상담 드리겠습니다. <br />
                    배울 의지가 있다면, 또는 간단한 고민만 있으시더라도 <br />
                    언제든 편안하게 연락주시고, <br />
                    수업 중일 경우 부재중 문자 남겨주시면, <br />
                    수업 이후에 연락드리도록 하겠습니다.
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
        </Section>
    );
};
