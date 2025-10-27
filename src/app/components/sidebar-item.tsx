import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export interface SidebarItemProps {
    current?: boolean;
    pathname: string;
    src: string;
    alt: string;
    children: React.ReactNode;
}

export default function SidebarItem({
                                        current,
                                        pathname,
                                        src,
                                        alt,
                                        children,
                                    }: SidebarItemProps) {
    return (
        <li>
            <Link
                href={pathname}
                className={clsx(
                    'flex items-center sm:h-9 sm:mx-1',
                    'sm:flex-row flex-col  sm:ml-2',
                    current && 'after:block sm:after:w-1 sm:after:h-full sm:after:ml-auto sm:after:bg-purple-200 sm:after:rounded-sm',
                    current && 'after:w-full after:h-1 after:bg-purple-200 sm:after:w-1'
                )}
            >
                <Image className="m-4 sm:ml-0" width={18} height={18} src={src} alt={alt} />
                <span className="font-medium text-zinc-50 sm:block hidden">{children}</span>
            </Link>
        </li>
    );
}
