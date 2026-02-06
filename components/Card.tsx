import React from 'react';
import styles from '../app/page.module.css';

interface CardProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
    className?: string; // Allow overriding styles if needed
}

export const Card = ({ title, description, children, className }: CardProps) => {
    return (
        <div className={`${styles.card} ${className || ''}`}>
            {children ? children : (
                <>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardDesc}>{description}</p>
                </>
            )}
        </div>
    );
};
