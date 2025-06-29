import React, { useState } from 'react';
import { SectionPanel } from './SectionPanel';
import { SectionHeader } from './SectionHeader';
import { ShowMoreButton } from './ShowMoreButton';
import type { NewsItem } from '../types';

interface NewsSectionProps {
    news: NewsItem[];
}

const NEWS_THRESHOLD = 2;

export const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const newsToShow = isExpanded ? news : news.slice(0, NEWS_THRESHOLD);

    return (
        <SectionPanel id="news">
            <SectionHeader title="News" />
            <div className="space-y-4">
                {newsToShow.map((item, index) => (
                    <div key={index} className="flex gap-4">
                        <p className="text-slate-500 text-sm whitespace-nowrap">{item.date}</p>
                        {item.link ? (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-nvidia-green dark:hover:text-nvidia-green hover:underline transition-colors">
                                {item.title}
                            </a>
                        ) : (
                            <p className="text-slate-700 dark:text-slate-300 text-sm">{item.title}</p>
                        )}
                    </div>
                ))}
            </div>
            {news.length > NEWS_THRESHOLD && (
                <ShowMoreButton isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)} />
            )}
        </SectionPanel>
    );
};