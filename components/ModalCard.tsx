"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from '../app/page.module.css';
import { X } from 'lucide-react';

interface ModalCardProps {
    title: string;
    description: string;
    modalTitle: string;
    modalBody: string[];
    footnote?: string;
    image?: string;
    imageCaption?: string;
}

export const ModalCard = ({ title, description, modalTitle, modalBody, footnote, image, imageCaption }: ModalCardProps) => {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (open) {
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
    }, [open]);

    return (
        <>
            <div className={styles.card} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc} style={{ flexGrow: 1 }}>{description}</p>
                <button
                    onClick={() => setOpen(true)}
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
                        fontWeight: 600,
                        transition: 'all 0.2s ease',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                    자세히 보기
                </button>
            </div>

            {mounted && open && createPortal(
                <div className={styles.modalOverlay} onClick={() => setOpen(false)}>
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                        style={{ display: 'flex', flexDirection: 'column', padding: 0, background: '#f8fafc' }}
                    >
                        <button className={styles.closeButton} onClick={() => setOpen(false)}>
                            <X size={24} />
                        </button>

                        <div
                            style={{
                                padding: '2rem 4rem 1.5rem 2rem',
                                background: 'white',
                                borderBottom: '1px solid var(--border)',
                                position: 'sticky',
                                top: 0,
                                zIndex: 1,
                            }}
                        >
                            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 'bold' }}>{modalTitle}</h2>
                        </div>

                        <div style={{ padding: '2rem', overflowY: 'auto', flexGrow: 1, minHeight: 0, display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
                            {modalBody.map((p, i) => (
                                <p
                                    key={i}
                                    style={{ lineHeight: 1.8, color: 'var(--secondary)', fontSize: '1.02rem' }}
                                    dangerouslySetInnerHTML={{ __html: p }}
                                />
                            ))}
                            {footnote && (
                                <p
                                    style={{
                                        marginTop: '0.5rem',
                                        padding: '1.2rem 1.4rem',
                                        background: '#f0f6ff',
                                        borderLeft: '3px solid var(--accent)',
                                        borderRadius: '8px',
                                        lineHeight: 1.7,
                                        color: 'var(--primary)',
                                        fontSize: '0.98rem',
                                    }}
                                >
                                    {footnote}
                                </p>
                            )}
                            {image && (
                                <figure style={{ margin: '0.5rem 0 0' }}>
                                    <img
                                        src={image}
                                        alt={imageCaption || '자료 사례'}
                                        style={{
                                            width: '100%',
                                            maxWidth: '460px',
                                            margin: '0 auto',
                                            borderRadius: '10px',
                                            border: '1px solid var(--border)',
                                            display: 'block',
                                        }}
                                    />
                                    {imageCaption && (
                                        <figcaption style={{ marginTop: '0.6rem', fontSize: '0.85rem', color: 'var(--secondary)', textAlign: 'center' }}>
                                            {imageCaption}
                                        </figcaption>
                                    )}
                                </figure>
                            )}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};
