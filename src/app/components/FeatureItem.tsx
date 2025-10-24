
import { FC } from 'react';

interface FeatureItemProps {
    icon: JSX.Element;
    text: string;
}

const FeatureItem: FC<FeatureItemProps> = ({ icon, text }) => (
    <div className="flex items-center justify-center space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
        {icon}
        <span className="text-lg text-primary">{text}</span>
    </div>
);

export default FeatureItem;
