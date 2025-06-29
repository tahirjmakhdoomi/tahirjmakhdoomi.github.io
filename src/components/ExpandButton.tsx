import React from 'react';

interface ExpandButtonProps {
    onClick: () => void;
}

export const ExpandButton: React.FC<ExpandButtonProps> = ({ onClick }) => (
    <div className="mt-8">
        <button 
            onClick={onClick}
            aria-label="Discover More"
            className="group flex flex-col items-center justify-center w-full p-4 rounded-lg cursor-pointer bg-slate-200/50 hover:bg-white/70 dark:bg-slate-900/50 dark:hover:bg-slate-800/70 transition-all border border-slate-300/50 hover:border-nvidia-green/50 dark:border-slate-700/50 dark:hover:border-nvidia-green/50"
        >
            <span className="text-sm font-bold tracking-widest text-slate-500 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-slate-200 uppercase transition-colors">Discover More</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-400 group-hover:text-nvidia-green dark:text-slate-500 dark:group-hover:text-nvidia-green mt-1 transition-all group-hover:translate-y-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </button>
    </div>
);