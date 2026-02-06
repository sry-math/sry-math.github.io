import React from 'react';
import styles from '../app/page.module.css';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: 'primary' | 'secondary';
    href: string;
    children: React.ReactNode;
}

export const Button = ({ variant = 'primary', href, children, className, ...props }: ButtonProps) => {
    const baseClass = variant === 'primary' ? styles.ctaButton : styles.secondaryButton;
    return (
        <a href={href} className={`${baseClass} ${className || ''}`} {...props}>
            {children}
        </a>
    );
};
