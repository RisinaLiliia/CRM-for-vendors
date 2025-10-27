'use client';
import React from 'react';
import SidebarItem from '@/app/components/sidebar-item';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 w-full bg-gray-900 z-50 sm:hidden">
            <div className="flex justify-around py-2 px-2">
                <SidebarItem
                    current={pathname === '/dashboard'}
                    pathname="/dashboard"
                    src="/icons/squares.svg"
                    alt="dashboard icon"
                >
                    Dashboard
                </SidebarItem>
                <SidebarItem
                    current={pathname === '/companies'}
                    pathname="/companies"
                    src="/icons/briefcase.svg"
                    alt="companies icon"
                >
                    Companies==
                </SidebarItem>
                <SidebarItem
                    current={pathname === '/profile'}
                    pathname="/profile"
                    src="/icons/user.svg"
                    alt="profile icon"
                >
                    Profile
                </SidebarItem>
            </div>
        </nav>
    );
}





