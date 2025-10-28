import React from 'react';
import Image from 'next/image';

export interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="flex items-center gap-5 py-6 px-10 border-b border-gray-300 flex-wrap sm:flex-nowrap">
      <h1 className="flex-1 text-3xl font-semibold text-gray-900 sm:text-4xl">
        {children}
      </h1>
      <div className="w-px self-stretch bg-gray-300 hidden sm:block" />
      <div className="flex gap-3 items-center sm:gap-5">
        <Image width={44} height={44} src="/images/avatar.png" alt="avatar" />
        <div className="text-sm sm:text-base">
          <p className="font-semibold text-gray-900">Adam Smith</p>
          <p className="font-light text-gray-900">adamsmith@gmail.com</p>
        </div>
      </div>
    </header>
  );
}
