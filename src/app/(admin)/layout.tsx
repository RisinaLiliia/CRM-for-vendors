import React from 'react';
import Sidebar from '@/app/components/sidebar';
import MobileNav from '@/app/components/MobileNav';


export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
        <Sidebar />
        <MobileNav />
      <div className="ml-60">{children}</div>
    </>
  );
}
