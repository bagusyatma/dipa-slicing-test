'use client';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Banner from '@/components/ui/banner';
import Button from '@/components/ui/button';
import AOS from 'aos';
import React from 'react';
import { menus } from '../constant/menus';
import { cn } from '../utils';

const LayoutContext = React.createContext();

export default function LayoutProvider({ children }) {
  const [isClosedBanner, setIsClosedBanner] = React.useState(false);
  const [isExpandedHeader, setIsExpandedHeader] = React.useState(false);

  React.useEffect(() => {
    AOS.init({ once: true });
  }, []);

  React.useEffect(() => {
    isExpandedHeader ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset');
    return () => (document.body.style.overflow = 'unset');
  }, [isExpandedHeader]);

  return (
    <LayoutContext.Provider value={{ isClosedBanner, setIsClosedBanner, isExpandedHeader, setIsExpandedHeader }}>
      <main className={cn(['flex flex-col'])}>
        <Banner isClosed={isClosedBanner} onClosed={() => setIsClosedBanner(true)} />
        <Header isExpanded={isExpandedHeader} onExpanded={() => setIsExpandedHeader(!isExpandedHeader)} />
        <div className={cn(['relative'])}>
          <ResponsiveHeader isExpandedHeader={isExpandedHeader} setIsExpandedHeader={setIsExpandedHeader} />
          {children}
        </div>
        <Footer />
      </main>
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = React.useContext(LayoutContext);
  if (!context) throw new Error('useLayout must be used within a LayoutProvider');

  return context;
}

export const ResponsiveHeader = ({ isExpandedHeader, setIsExpandedHeader }) => {
  return (
    isExpandedHeader && (
      <div className={cn(['fixed inset-0 z-10 overflow-hidden bg-black/35', 'lg:hidden'])} onClick={() => setIsExpandedHeader(false)}>
        <div
          className={cn([
            'fixed top-[calc(64px+32px)] right-0 h-fit w-full bg-white p-4 shadow-xs',
            'animate-in slide-in-from-top duration-500 ease-in-out',
          ])}
          onClick={e => e.stopPropagation()}
        >
          <div className={cn(['flex flex-col gap-4'])}>
            {menus.map((menu, index) => (
              <button key={index} className={cn(['cursor-pointer text-left focus:outline-none'])}>
                {menu.label}
              </button>
            ))}

            <div className={cn(['mt-2 flex flex-col gap-2'])}>
              <Button variant="ghost" className={cn(['w-full justify-start'])}>
                Login
              </Button>
              <Button variant="outline-secondary" className={cn(['w-full justify-start'])}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
