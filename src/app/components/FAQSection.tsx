'use client';

import { useState } from 'react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);  // Для отслеживания открытого вопроса

    const faqs = [
        { question: 'How do I start using the CRM?', answer: 'Simply sign up, create your first account, and start adding suppliers and orders. We\'ll guide you through the rest.' },
        { question: 'Can I integrate with my existing tools?', answer: 'Yes, our CRM integrates seamlessly with popular ERP systems, Google Sheets, and other business tools.' },
        { question: 'How does customer support work?', answer: 'We offer 24/7 support through chat and email. We also provide a section with tutorials and video guides to help you get the most out of our app.' }
    ];

    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#F7F7F7] text-center px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="container mx-auto space-y-8">
                <h2 className="text-3xl sm:text-4xl font-semibold text-[#111827]">Frequently Asked Questions</h2>
                <div className="space-y-6 max-w-3xl mx-auto">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="text-left transition-all duration-300 ease-in-out">
                            <div
                                className="flex justify-between items-center cursor-pointer p-4 bg-[#e9d5ff] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                onClick={() => toggleAnswer(idx)} // теперь idx имеет тип number
                            >
                                <h3 className="text-xl sm:text-2xl font-medium text-[#111827]">{faq.question}</h3>
                                <span className="text-xl text-[#111827]">{openIndex === idx ? '-' : '+'}</span>
                            </div>

                            {/* Отображение ответа при раскрытии */}
                            <p
                                className={`transition-all duration-300 ease-in-out text-lg sm:text-xl text-[#111827] opacity-80 ${openIndex === idx ? 'max-h-[200px] mb-4' : 'max-h-0 overflow-hidden'}`}
                                style={{
                                    transition: 'max-height 0.3s ease',
                                    marginTop: '1rem',
                                    marginBottom: openIndex === idx ? '1rem' : '0',
                                    borderRadius: '8px',
                                    backgroundColor: '#f7f7f7',
                                }}
                            >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
