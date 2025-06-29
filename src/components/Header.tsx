import React from 'react';
import { NavMenu } from './NavMenu';
import { SocialIcons } from './SocialIcons';
import { ThemeToggleButton } from './ThemeToggleButton';
import type { PortfolioData } from '../types';

interface HeaderProps {
    data: PortfolioData;
    activeSection: string;
    isExpanded: boolean;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ data, activeSection, isExpanded, theme, toggleTheme }) => {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/5 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <div className="flex flex-row-reverse items-start justify-between lg:block">
                    <div className="h-28 w-28 rounded-full bg-gradient-to-br from-nvidia-green/50 to-slate-400 dark:to-slate-700 p-px flex-shrink-0 lg:mb-4">
                        <img src={data.profileImage} alt={data.name} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-200 sm:text-5xl">{data.name}</h1>
                        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-800 dark:text-slate-200 sm:text-xl">{data.title}</h2>
                        <h3 className="mt-1 text-md font-medium tracking-tight text-slate-500 dark:text-slate-400 sm:text-lg">{data.university}</h3>
                    </div>
                </div>
                <NavMenu activeSection={activeSection} isExpanded={isExpanded} />
            </div>
            <div className="flex items-center justify-between mt-8">
              <SocialIcons contact={data.contact} />
              <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
            </div>
        </header>
    );
};