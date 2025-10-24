import Link from 'next/link';
import React from 'react';

interface CallToActionProps {
    title?: string;
    buttonText?: string;
    href?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
                                                       title = 'Get Started with Our CRM Today!',
                                                       buttonText = 'Try It for Free',
                                                       href = '/dashboard',
                                                   }) => {
    return (
        <section className="section-container bg-secondary text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary mb-6">{title}</h2>
            <Link href={href}>
                <button className="px-8 py-4 bg-primary text-background text-lg font-medium rounded-md shadow-md hover:bg-background hover:text-primary transition-all duration-300">
                    {buttonText}
                </button>
            </Link>
        </section>
    );
};

export default CallToAction;
