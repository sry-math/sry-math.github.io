"use client";

import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import styles from '../app/page.module.css';
import { X } from 'lucide-react';

export const StrategyCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }

        // 컴포넌트 언마운트 시 스크롤 원래대로 복구
        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Card title="학생별 맞춤 전략 제시" className="relative flex flex-col h-full">
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <h3 className={styles.cardTitle}>학생별 맞춤 전략 제시</h3>
                    <p className={styles.cardDesc} style={{ flexGrow: 1 }}>
                        학생마다 다른 학습 성향과 약점을 정확히 진단합니다.
                        획일적인 방식이 아닌, 각 학생에게 가장 효율적인 방향을 제시합니다.
                    </p>
                    <button
                        onClick={openModal}
                        style={{
                            marginTop: '1.5rem',
                            alignSelf: 'flex-start',
                            background: 'var(--primary)',
                            color: '#fff',
                            padding: '0.6rem 1.2rem',
                            borderRadius: '6px',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            transition: 'all 0.2s ease',
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                        onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                    >
                        실제 사례 상세보기
                    </button>
                </div>
            </Card>

            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                        style={{ display: 'flex', flexDirection: 'column', padding: 0, background: '#f8fafc' }}
                    >
                        <button className={styles.closeButton} onClick={closeModal}>
                            <X size={24} />
                        </button>

                        <div style={{
                            padding: '2rem 2rem 1rem 4rem',
                            background: 'white',
                            borderBottom: '1px solid var(--border)',
                            position: 'sticky',
                            top: 0,
                            zIndex: 1
                        }}>
                            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 'bold' }}>학생별 맞춤 지도 실제 사례</h2>
                            <p style={{ color: 'var(--secondary)', marginTop: '0.5rem', lineHeight: '1.5' }}>
                                목적지를 하나의 길로만 도달할 수 없습니다. 누군가에게는 편한 길이 누군가에게는 힘든 길일 수 있습니다.<br />
                                아이에 맞게 지도 편달하는 것이 가장 중요하다고 생각합니다.
                            </p>
                        </div>

                        <div style={{ padding: '2rem', overflowY: 'auto', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {/* Case 1 */}
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ color: 'var(--accent)', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Case 1: 기본기를 놓친 고득점자형</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><strong style={{ minWidth: '45px', color: '#64748b' }}>상황:</strong> <span style={{ lineHeight: '1.5' }}>타 과목 1등급이나 수학만 3등급(고2 11월). 고난이도 문항만 푸는 방치하기 어려운 상태.</span></li>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><strong style={{ minWidth: '45px', color: '#64748b' }}>분석:</strong> <span style={{ lineHeight: '1.5' }}>개념에 대한 이해 없이 높은 문항만 따라가고 있다는 점을 인식.</span></li>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><strong style={{ minWidth: '45px', color: '#64748b' }}>해결:</strong> <span style={{ lineHeight: '1.5' }}>기존 방향이 틀렸음을 인지시킴. 고난이도 제외 후 간단한 문항부터 개념 정리 및 유형 학습 진행.</span></li>
                                    <li style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', padding: '0.5rem 0.8rem', background: '#f0fdf4', borderRadius: '6px', color: '#166534', fontWeight: 'bold' }}>
                                        <span>결과: 3등급 ➔ 1등급 (마무리)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Case 2 */}
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ color: 'var(--accent)', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Case 2: 질문 의존형 (스스로 생각 안하는 유형)</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><strong style={{ minWidth: '45px', color: '#64748b' }}>상황:</strong> <span style={{ lineHeight: '1.5' }}>질문 없이 해석 불가능. 고난이도 접근 어려움 (고1 4~5등급).</span></li>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><strong style={{ minWidth: '45px', color: '#64748b' }}>분석:</strong> <span style={{ lineHeight: '1.5' }}>선생님이 모두 해결해줄 거라 생각. 스스로 푸는 힘이 약함.</span></li>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><strong style={{ minWidth: '45px', color: '#64748b' }}>해결:</strong> <span style={{ lineHeight: '1.5' }}>식 쓰는 습관 형성 주력. 식을 바로 세워주지 않고, 1시간에 1문제라도 왜 그 식을 썼는지 집중 분석.</span></li>
                                    <li style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', padding: '0.5rem 0.8rem', background: '#f0fdf4', borderRadius: '6px', color: '#166534', fontWeight: 'bold' }}>
                                        <span>결과: 고2 1학기 1등급 (마무리)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Case 3 */}
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ color: 'var(--accent)', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Case 3: 기초 부진 및 흥미 이탈형</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><strong style={{ minWidth: '45px', color: '#64748b' }}>상황:</strong> <span style={{ lineHeight: '1.5' }}>개념 부진, 중학 과정 안 되어 있음. 자신감이 낮고 수학을 싫어함.</span></li>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><strong style={{ minWidth: '45px', color: '#64748b' }}>분석:</strong> <span style={{ lineHeight: '1.5' }}>수학을 해야 할 동기와 관계 형성이 최우선.</span></li>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><strong style={{ minWidth: '45px', color: '#64748b' }}>해결:</strong> <span style={{ lineHeight: '1.5' }}>원리 중심. 해당 내용을 말로 구두 설명할 수 있도록 밀착 지도.</span></li>
                                    <li style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', padding: '0.5rem 0.8rem', background: '#f0fdf4', borderRadius: '6px', color: '#166534', fontWeight: 'bold' }}>
                                        <span>결과: 고등 킬러 문항도 푸는 실력으로 2등급 마무리</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Case 4 */}
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ color: 'var(--accent)', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Case 4: 학습 동기 부족형</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><strong style={{ minWidth: '45px', color: '#64748b' }}>상황:</strong> <span style={{ lineHeight: '1.5' }}>숙제 안 함. 목적 없이 등하원. 기초가 안 외워진 6등급.</span></li>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><strong style={{ minWidth: '45px', color: '#64748b' }}>분석:</strong> <span style={{ lineHeight: '1.5' }}>아이 스스로 할 수 있다고 믿어주면 오히려 회피하거나 혼나는 일 연속.</span></li>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><strong style={{ minWidth: '45px', color: '#64748b' }}>해결:</strong> <span style={{ lineHeight: '1.5' }}>대다수 문항 끝낼 때까지 하원 보류 (강한 관리).</span></li>
                                    <li style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', padding: '0.5rem 0.8rem', background: '#f0fdf4', borderRadius: '6px', color: '#166534', fontWeight: 'bold' }}>
                                        <span>결과: 6등급 ➔ 2달 만에 수1 2등급 / 확통 2등급 상승</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Case 5 */}
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ color: 'var(--accent)', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Case 5: 최상위권 안주형 (귀차니즘)</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><strong style={{ minWidth: '45px', color: '#64748b' }}>상황:</strong> <span style={{ lineHeight: '1.5' }}>전과목 1등급에 가까움. 풀어지려 하고 쉬운 방향만 고수하려 함.</span></li>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><strong style={{ minWidth: '45px', color: '#64748b' }}>분석:</strong> <span style={{ lineHeight: '1.5' }}>지속적인 긴장감 필요. 귀찮은 과정의 중요성 인식시켜야 함.</span></li>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><strong style={{ minWidth: '45px', color: '#64748b' }}>해결:</strong> <span style={{ lineHeight: '1.5' }}>수능까지 예외 없는 엄격한 '규칙' 적용. 서술형(식 쓰기) 중요성을 직접식으로 입증함.</span></li>
                                    <li style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', padding: '0.5rem 0.8rem', background: '#f0fdf4', borderRadius: '6px', color: '#166534', fontWeight: 'bold' }}>
                                        <span>결과: 안정적으로 1등급 마무리</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
