import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
    'Seamless Integration with Your Systems',
    'Automate Routine Processes',
    'Instant Real-Time Data Access',
    'Scalable and Flexible',
    'Top-Notch Data Security'
];

const faqs = [
    {
        question: 'How do I start using the CRM?',
        answer: "Simply sign up, create your first account, and start adding suppliers and orders. We'll guide you through the rest."
    },
    {
        question: 'Can I integrate with my existing tools?',
        answer: 'Yes, our CRM integrates seamlessly with popular ERP systems, Google Sheets, and other business tools.'
    },
    {
        question: 'How does customer support work?',
        answer: 'We offer 24/7 support through chat and email. We also provide a section with tutorials and video guides to help you get the most out of our app.'
    }
];

const Homepage = () => {
    return (
        <div className="min-h-screen bg-[#F7F7F7] text-[#111827] font-sans">

            <header className="flex flex-col md:flex-row justify-between items-center py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-[#111827] text-center md:text-left space-y-8 md:space-y-0">
                <div className="container flex flex-col items-center md:items-start space-y-8 max-w-xl px-4 md:px-12">
                    <Image
                        className="py-8 mb-8 sm:mb-10 lg:mb-11"
                        width={122}
                        height={25}
                        src="/icons/logo.svg"
                        alt="logo"
                    />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d9f99d] leading-tight">
                        Revolutionize Supplier Management with Our CRM
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-[#fafafa] max-w-2xl mx-auto">
                        Simplify and optimize your supplier management processes with our intuitive and powerful CRM tool designed for businesses of all sizes.
                    </p>
                    <Link href="/dashboard">
                        <button className="px-6 py-3 sm:px-8 sm:py-4 bg-[#e9d5ff] text-[#111827] text-lg font-medium rounded-md shadow-md hover:bg-[#d9f99d] transition-all duration-300">
                            Try It for Free
                        </button>
                    </Link>
                </div>

                <div className="mt-12 md:mt-0 w-full md:w-auto px-4">
                    <Image
                        className="py-8 mb-8 sm:mb-10 lg:mb-11 mx-auto"
                        width={500}
                        height={440}
                        src="/images/website.png"
                        alt="foto_website"
                        layout="responsive"
                    />
                </div>
            </header>

            <section className="py-16 sm:py-20 lg:py-24 bg-[#F7F7F7] text-center">
                <div className="container mx-auto space-y-10">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-[#111827]">
                        Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex items-center justify-center space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#e9d5ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 8v4l3 3"></path>
                                    <path d="M16 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"></path>
                                    <path d="M8 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4"></path>
                                </svg>
                                <span className="text-lg text-[#333333]">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-20 lg:py-24 bg-[#fafafa] text-center px-6 sm:px-8 lg:px-12 xl:px-16">
                <div className="container mx-auto space-y-8">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-[#111827]">Success Stories</h2>
                    <p className="text-lg sm:text-xl text-[#111827] max-w-2xl mx-auto">
                        "Company XYZ reduced their order processing time by 40% using our CRM. Now they can respond to client requests faster and increase customer satisfaction and repeat orders."
                    </p>
                    <p className="text-lg sm:text-xl text-[#111827] max-w-2xl mx-auto">
                        "The interface is simple and intuitive, perfect for small and medium-sized businesses."
                    </p>
                </div>
            </section>

            <section className="py-16 sm:py-20 lg:py-24 bg-[#e9d5ff] text-center px-6 sm:px-8 lg:px-12 xl:px-16">
                <h2 className="text-3xl sm:text-4xl font-semibold text-[#111827] mb-6">
                    Get Started with Our CRM Today!
                </h2>
                <Link href="/dashboard">
                    <button className="px-8 py-4 bg-[#111827] text-[#fafafa] text-lg font-medium rounded-md shadow-md hover:bg-[#fafafa] hover:text-[#111827] transition-all duration-300">
                        Try It for Free
                    </button>
                </Link>
            </section>

            <section className="py-16 sm:py-20 lg:py-24 bg-[#F7F7F7] text-center px-6 sm:px-8 lg:px-12 xl:px-16">
                <div className="container mx-auto space-y-8">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-[#111827]">Frequently Asked Questions</h2>
                    <div className="space-y-6 max-w-3xl mx-auto">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="text-left">
                                <h3 className="text-xl sm:text-2xl font-medium text-[#111827]">{faq.question}</h3>
                                <p className="text-lg sm:text-xl text-[#111827] opacity-80">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Homepage;
