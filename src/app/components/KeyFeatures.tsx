
import { FC } from 'react';
import FeatureItem from './FeatureItem';


const features = [
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8v4l3 3"></path>
            <path d="M16 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"></path>
            <path d="M8 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4"></path>
        </svg>, text: 'Seamless Integration with Your Systems' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8v4l3 3"></path>
            <path d="M16 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"></path>
            <path d="M8 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4"></path>
        </svg>, text: 'Automate Routine Processes' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8v4l3 3"></path>
            <path d="M16 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"></path>
            <path d="M8 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4"></path>
        </svg>, text:  'Instant Real-Time Data Access' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8v4l3 3"></path>
            <path d="M16 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"></path>
            <path d="M8 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4"></path>
        </svg>, text:  'Scalable and Flexible' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8v4l3 3"></path>
            <path d="M16 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"></path>
            <path d="M8 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4"></path>
        </svg>, text:   'Top-Notch Data Security' },
];



const KeyFeatures: FC = () => (
    <section className="section-container bg-background text-center">
        <div className="container mx-auto space-y-10">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                {features.map((feature, idx) => (
                    <FeatureItem key={idx} icon={feature.icon} text={feature.text} />
                ))}
            </div>
        </div>
    </section>
);

export default KeyFeatures;
