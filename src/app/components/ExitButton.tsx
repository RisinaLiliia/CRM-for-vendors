import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export interface ExitButtonProps {
    className?: string;
}

const ExitButton: React.FC<ExitButtonProps> = ({ className }) => {
    const router = useRouter();

    const handleExitClick = () => {
        router.push('/');
    };

    return (
        <button
            className={`flex items-center gap-2 p-4 text-white ${className}`}
            onClick={handleExitClick}
        >
            <Image
                width={18}
                height={18}
                src="/icons/arrow-left-on-rectangle.svg"
                alt="exit icon"
            />
            <span className="font-medium">Exit</span>
        </button>
    );
};

export default ExitButton;
