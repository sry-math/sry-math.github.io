import React from 'react';
import { ContactSection } from '@/components/ContactSection';

export default function ContactPage() {
    return (
        <div className="container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <ContactSection />
        </div>
    );
}
