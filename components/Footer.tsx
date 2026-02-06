import React from 'react';

export const Footer = () => {
    return (
        <footer style={{
            textAlign: "center",
            padding: "4rem 0",
            color: "var(--secondary)",
            borderTop: "1px solid var(--border)",
            marginTop: "2rem"
        }}>
            <p>&copy; {new Date().getFullYear()} 성락윤T. All rights reserved.</p>
        </footer>
    );
};
