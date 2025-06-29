import React from 'react';
import { SectionPanel } from './SectionPanel';
import { SectionHeader } from './SectionHeader';
import type { Experience } from '../types';

interface ExperienceSectionProps {
    experience: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => (
    <SectionPanel id="experience">
        <SectionHeader title="Experience" />
        <div className="space-y-8">
            {experience.map((exp, index) => (
                <div key={index}>
                    <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">{exp.role}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm">{exp.organization} · {exp.duration}</p>
                    <p className="text-slate-500 text-sm mt-2">{exp.description}</p>
                </div>
            ))}
        </div>
    </SectionPanel>
);