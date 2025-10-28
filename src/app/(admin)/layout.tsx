import React from 'react';
import Sidebar from '@/app/components/sidebar';
import MobileNav from '@/app/components/MobileNav';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="hidden sm:block">
        <Sidebar />
      </div>

      <div className="sm:hidden">
        <MobileNav />
      </div>

      <div className="sm:ml-60">
        {children}
      </div>
    </>
  );
}
