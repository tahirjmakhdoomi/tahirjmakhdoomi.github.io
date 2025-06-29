import React from 'react';
import { SectionPanel } from './SectionPanel';
import { SectionHeader } from './SectionHeader';
import type { Award } from '../types';

interface AwardsSectionProps {
    awards: Award[];
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ awards }) => (
    <SectionPanel id="awards">
        <SectionHeader title="Awards" />
        <div className="space-y-4">
            {awards.map((award, index) => (
                <div key={index} className="flex justify-between items-baseline">
                    {award.link ? (
                        <a href={award.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-nvidia-green dark:hover:text-nvidia-green hover:underline transition-colors">
                            {award.name}
                        </a>
                    ) : (
                        <p className="text-slate-700 dark:text-slate-300 text-sm">{award.name}</p>
                    )}
                    <p className="text-slate-500 text-sm">{award.year}</p>
                </div>
            ))}
        </div>
    </SectionPanel>
);