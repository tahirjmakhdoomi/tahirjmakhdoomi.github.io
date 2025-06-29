import React from 'react';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
    <div className="inline-block mb-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">{title}</h2>
        <div className="mt-2 h-px w-full bg-gradient-to-r from-nvidia-green" />
    </div>
);