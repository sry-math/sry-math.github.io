"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from '../app/page.module.css';
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react';

interface Video {
    videoId: string;
    title: string;
}

export const VideoGallery = ({ videos }: { videos: Video[] }) => {
    const [activeId, setActiveId] = useState<string | null>(null); // 모바일 모달
    const [playingIndex, setPlayingIndex] = useState<number | null>(null); // 데스크탑 인라인 재생 (loop 인덱스)
    const [isMobile, setIsMobile] = useState(false);
    const [activeDot, setActiveDot] = useState(0);
    const activeVideo = videos.find((v) => v.videoId === activeId);
    const scrollRef = useRef<HTMLDivElement>(null);

    const N = videos.length;
    // 무한 순환을 위해 3세트로 복제하고 가운데 세트를 기본 위치로 사용
    const canLoop = N > 1;
    const loop = canLoop ? [...videos, ...videos, ...videos] : videos;
    const offset = canLoop ? N : 0; // 가운데 세트 시작 인덱스

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 768px)');
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    useEffect(() => {
        if (activeId) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        };
    }, [activeId]);

    const getStep = (el: HTMLDivElement) => {
        const card = el.querySelector(`.${styles.carouselItem}`) as HTMLElement | null;
        return card ? card.clientWidth + 24 : el.clientWidth;
    };

    // 초기 위치: 가운데 세트의 첫 카드를 화면 중앙에
    useEffect(() => {
        const el = scrollRef.current;
        if (!el || !canLoop) return;
        const cards = el.querySelectorAll(`.${styles.carouselItem}`);
        const target = cards[offset] as HTMLElement | undefined;
        if (target) {
            el.scrollLeft = target.offsetLeft - (el.clientWidth - target.clientWidth) / 2;
        }
    }, [canLoop, offset]);

    // 무한 순환: 스크롤이 끝 세트에 닿으면 동일 위치의 가운데 세트로 순간 이동
    useEffect(() => {
        const el = scrollRef.current;
        if (!el || !canLoop) return;
        let timer: ReturnType<typeof setTimeout>;
        const recenter = () => {
            const setW = getStep(el) * N;
            if (el.scrollLeft < setW * 0.75) {
                el.scrollLeft += setW;
            } else if (el.scrollLeft > setW * 2.25) {
                el.scrollLeft -= setW;
            }
        };
        const onScroll = () => {
            // 현재 화면 중앙에 가장 가까운 카드 → 활성 dot 계산
            const items = el.querySelectorAll(`.${styles.carouselItem}`);
            const center = el.scrollLeft + el.clientWidth / 2;
            let nearest = 0;
            let min = Infinity;
            items.forEach((it, i) => {
                const node = it as HTMLElement;
                const c = node.offsetLeft + node.clientWidth / 2;
                const d = Math.abs(c - center);
                if (d < min) {
                    min = d;
                    nearest = i;
                }
            });
            setActiveDot(((nearest % N) + N) % N);
            clearTimeout(timer);
            timer = setTimeout(recenter, 120);
        };
        el.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            el.removeEventListener('scroll', onScroll);
            clearTimeout(timer);
        };
    }, [canLoop, N]);

    const scrollByCard = (dir: number) => {
        const el = scrollRef.current;
        if (!el) return;
        // scroll-snap: mandatory 상태에서는 프로그래밍 smooth 스크롤이 막히므로 일시 해제
        el.style.scrollSnapType = 'none';
        el.scrollTo({ left: el.scrollLeft + dir * getStep(el), behavior: 'smooth' });
        window.setTimeout(() => {
            el.style.scrollSnapType = '';
        }, 450);
    };

    const goToDot = (dotIndex: number) => {
        const el = scrollRef.current;
        if (!el) return;
        const items = el.querySelectorAll(`.${styles.carouselItem}`);
        let best: number | null = null;
        let min = Infinity;
        // 같은 원본 영상의 3개 복제본 중 현재 위치에서 가장 가까운 것으로 이동
        [dotIndex, dotIndex + N, dotIndex + 2 * N].forEach((li) => {
            const it = items[li] as HTMLElement | undefined;
            if (!it) return;
            const target = it.offsetLeft - (el.clientWidth - it.clientWidth) / 2;
            const d = Math.abs(target - el.scrollLeft);
            if (d < min) {
                min = d;
                best = target;
            }
        });
        if (best !== null) {
            el.style.scrollSnapType = 'none';
            el.scrollTo({ left: best, behavior: 'smooth' });
            window.setTimeout(() => {
                el.style.scrollSnapType = '';
            }, 450);
        }
    };

    const handleSelect = (index: number, videoId: string) => {
        if (isMobile) {
            setActiveId(videoId);
        } else {
            setPlayingIndex(index);
        }
    };

    return (
        <>
            <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto' }}>
                {canLoop && (
                    <button
                        className={styles.carouselArrow}
                        style={{ left: 0 }}
                        onClick={() => scrollByCard(-1)}
                        aria-label="이전 영상"
                    >
                        <ChevronLeft size={36} strokeWidth={2.5} />
                    </button>
                )}

                <div
                    ref={scrollRef}
                    className={styles.carousel}
                    style={!canLoop ? { justifyContent: 'center', paddingLeft: '1.5rem', paddingRight: '1.5rem', margin: 0 } : undefined}
                >
                    {loop.map((video, i) => (
                        <div
                            key={i}
                            className={styles.carouselItem}
                            onClick={() => playingIndex !== i && handleSelect(i, video.videoId)}
                        >
                            <div
                                style={{
                                    position: 'relative',
                                    paddingBottom: '56.25%',
                                    height: 0,
                                    background: '#000',
                                    overflow: 'hidden',
                                    boxShadow: '0 12px 30px rgba(0,0,0,0.18)',
                                }}
                            >
                                {playingIndex === i ? (
                                    <iframe
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    <>
                                        <img
                                            src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                                            alt={video.title}
                                            onError={(e) => {
                                                (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                                            }}
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        {/* 하단 그라데이션 */}
                                        <div
                                            style={{
                                                position: 'absolute',
                                                inset: 0,
                                                background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.05) 100%)',
                                            }}
                                        />
                                        {/* 중앙 재생 버튼 */}
                                        <div
                                            style={{
                                                position: 'absolute',
                                                inset: 0,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: 72,
                                                    height: 72,
                                                    borderRadius: '50%',
                                                    background: 'rgba(220,38,38,0.92)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
                                                }}
                                            >
                                                <Play size={32} color="#fff" fill="#fff" style={{ marginLeft: 4 }} />
                                            </div>
                                        </div>
                                        {/* 좌하단 제목 */}
                                        <div style={{ position: 'absolute', left: '1.75rem', bottom: '1.5rem', right: '1.75rem' }}>
                                            <span
                                                style={{
                                                    display: 'inline-block',
                                                    fontSize: '0.8rem',
                                                    fontWeight: 600,
                                                    color: 'rgba(255,255,255,0.85)',
                                                    letterSpacing: '0.02em',
                                                    marginBottom: '0.4rem',
                                                }}
                                            >
                                                수업 영상
                                            </span>
                                            <h3
                                                style={{
                                                    fontSize: 'clamp(1.25rem, 2.5vw, 1.9rem)',
                                                    fontWeight: 700,
                                                    color: '#fff',
                                                    lineHeight: 1.2,
                                                    margin: 0,
                                                    textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                                                }}
                                            >
                                                {video.title}
                                            </h3>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {canLoop && (
                    <button
                        className={styles.carouselArrow}
                        style={{ right: 0 }}
                        onClick={() => scrollByCard(1)}
                        aria-label="다음 영상"
                    >
                        <ChevronRight size={36} strokeWidth={2.5} />
                    </button>
                )}

                {canLoop && (
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '1.75rem' }}>
                        {videos.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToDot(i)}
                                aria-label={`${i + 1}번째 영상으로 이동`}
                                style={{
                                    width: activeDot === i ? '26px' : '8px',
                                    height: '8px',
                                    borderRadius: '999px',
                                    border: 'none',
                                    padding: 0,
                                    cursor: 'pointer',
                                    background: activeDot === i ? 'var(--primary)' : '#cbd5e1',
                                    transition: 'all 0.3s ease',
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>

            {activeVideo && (
                <div className={styles.modalOverlay} onClick={() => setActiveId(null)}>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: 'relative',
                            width: '90%',
                            maxWidth: '960px',
                            background: '#000',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                            animation: 'fadeIn 0.2s ease-out',
                        }}
                    >
                        <button
                            className={styles.closeButton}
                            onClick={() => setActiveId(null)}
                            style={{ left: 'auto', right: '1rem' }}
                        >
                            <X size={24} />
                        </button>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                            <iframe
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1`}
                                title={activeVideo.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <div style={{ padding: '1rem 1.5rem', background: '#fff' }}>
                            <h3 className={styles.cardTitle}>{activeVideo.title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
