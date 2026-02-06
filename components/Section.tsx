import React from 'react';
import styles from '../app/page.module.css';

interface SectionProps {
    id?: string;
    title?: string;
    background?: 'default' | 'alt';
    children: React.ReactNode;
    className?: string;
}

export const Section = ({ id, title, background = 'default', children, className }: SectionProps) => {
    const bgStyle = background === 'alt' ? { background: "var(--card-bg)" } : {};

    return (
        <section id={id} className={`${styles.section} ${className || ''}`} style={bgStyle}>
            {title && <h2 className={styles.sectionTitle}>{title}</h2>}
            {children}
        </section>
    );
};
