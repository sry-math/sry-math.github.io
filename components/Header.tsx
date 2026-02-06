'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from '../app/page.module.css';

interface NavLink {
    href: string;
    label: string;
}

const navLinks: NavLink[] = [
    { href: '/', label: '홈' },
    { href: '/students', label: '학생용 안내' },
    { href: '/parents', label: '학부모용 안내' },
    { href: '/portfolio', label: '포트폴리오' },
    { href: '/#contact', label: '상담 문의' },
];

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when route changes or screen resizes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="header">
            <div className="container header-inner">
                <div className="logo">
                    <Link href="/">Smook Math</Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="nav-links desktop-nav">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation Overlay */}
                <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
                    <nav className="mobile-nav-links">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};
