import React from 'react';
import SuccessStatisticsChart from '../app/components/SuccessStatisticsChart';
import FAQSection from "../app/components/FAQSection";
import Hero from '../app/components/Hero';
import KeyFeatures from '../app/components/KeyFeatures';
import CallToAction from '../app/components/CallToAction';





const Homepage = () => {
    return (
        <div className="min-h-screen bg-background text-primary font-sans">
            <Hero />
            <KeyFeatures />
            <SuccessStatisticsChart />
            <CallToAction />
            <FAQSection />
        </div>
    );
};

export default Homepage;
