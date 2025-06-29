import React from 'react';
import { SectionPanel } from './SectionPanel';
import { SectionHeader } from './SectionHeader';
import type { PortfolioData } from '../types';

interface AboutSectionProps {
    data: PortfolioData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data }) => (
    <SectionPanel id="about">
        <SectionHeader title="About" />
        <p className="leading-relaxed mb-6 text-slate-600 dark:text-slate-400">{data.about}</p>
        <div className="flex flex-wrap justify-start gap-3">
            {data.researchInterests.map((interest, index) => (
                <div key={index} className="flex items-center rounded-full bg-nvidia-green/10 px-3 py-1 text-xs font-medium leading-5 text-nvidia-green">
                    {interest}
                </div>
            ))}
        </div>
    </SectionPanel>
);