import React, { useState } from 'react';
import { SectionPanel } from './SectionPanel';
import { SectionHeader } from './SectionHeader';
import { PublicationItem } from './PublicationItem';
import { ShowMoreButton } from './ShowMoreButton';
import type { Publication } from '../types';

interface PublicationsSectionProps {
    publications: Publication[];
}

const PUBLICATIONS_THRESHOLD = 4;

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({ publications }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const publicationsToShow = isExpanded ? publications : publications.slice(0, PUBLICATIONS_THRESHOLD);

    return (
        <SectionPanel id="publications">
            <SectionHeader title="Publications" />
            <div className="space-y-8">
                {publicationsToShow.map((pub) => (
                    <PublicationItem key={pub.title} pub={pub} />
                ))}
            </div>
            {publications.length > PUBLICATIONS_THRESHOLD && (
                <ShowMoreButton isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)} />
            )}
        </SectionPanel>
    );
};
