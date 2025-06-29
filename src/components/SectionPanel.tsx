import React from 'react';

interface SectionPanelProps {
  children: React.ReactNode;
  id: string;
}

export const SectionPanel: React.FC<SectionPanelProps> = ({ children, id }) => (
  <section id={id} className="mb-8 scroll-mt-24 rounded-lg p-px bg-gradient-to-br from-nvidia-green/20 to-slate-300/30 dark:from-nvidia-green/30 dark:to-slate-800/30 backdrop-blur-sm">
    <div className="rounded-[7px] bg-white/80 dark:bg-slate-900/70 p-6 w-full">
      {children}
    </div>
  </section>
);