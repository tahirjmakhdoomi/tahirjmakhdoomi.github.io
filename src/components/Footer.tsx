import React from 'react';

interface FooterProps {
    name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => (
    <footer className="mt-12 text-sm text-slate-500 dark:text-slate-600 text-center">
        <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
    </footer>
);