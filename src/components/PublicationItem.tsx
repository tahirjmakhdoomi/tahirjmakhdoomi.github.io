import React from 'react';
import type { Publication } from '../types';

interface PublicationItemProps {
    pub: Publication;
}

export const PublicationItem: React.FC<PublicationItemProps> = ({ pub }) => (
  <a
    href={pub.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group block transition-all"
  >
    <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 group-hover:text-nvidia-green dark:group-hover:text-nvidia-green hover:underline transition-colors">{pub.title}</h3>
    <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">{pub.authors}</p>
    <p className="text-slate-500 text-sm mt-2 italic">{pub.journal}</p>
  </a>
);