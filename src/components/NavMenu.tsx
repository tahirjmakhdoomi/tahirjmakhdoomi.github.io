import React from 'react';

interface NavMenuProps {
    activeSection: string;
    isExpanded: boolean;
}

export const NavMenu: React.FC<NavMenuProps> = ({ activeSection, isExpanded }) => {
  const navItems = ['about', 'news', 'experience', 'publications', 'awards'];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="hidden lg:block mt-12">
      <ul className="space-y-4">
        {navItems.map(item => (
          <li key={item}>
            <a
              href={`#${item}`}
              onClick={(e) => handleNavClick(e, item)}
              className={`group flex items-center py-2 transition-all cursor-pointer ${(item !== 'about' && item !== 'news') && !isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-500`}
            >
              <span className={`nav-indicator mr-4 h-0.5 w-8 bg-slate-400 dark:bg-slate-600 transition-all group-hover:w-16 group-hover:bg-nvidia-green dark:group-hover:bg-nvidia-green }`}></span>
              <span className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-nvidia-green dark:group-hover:text-nvidia-green }`}>
                {item}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};