import Image from 'next/image';
import Link from 'next/link';

const Hero = () => (
    <header className="hero bg-[#111827] py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 xl:px-48 text-center md:text-left">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
            <div className="flex-1">
                <Image
                    className="logo mb-16"
                    src="/icons/logo.svg"
                    alt="logo"
                    width={122}
                    height={25}
                />
                <h1 className="text-3xl sm:text-4xl md:text-5xl mb-8   font-bold text-[#d9f99d] leading-tight">
                    Revolutionize Supplier Management with Our CRM
                </h1>
                <p className="text-base sm:text-lg mb-8 md:text-xl text-[#fafafa] max-w-2xl mx-auto">
                    Simplify and optimize your supplier management processes with our intuitive and powerful CRM tool designed for businesses of all sizes.
                </p>
                <Link href="/dashboard">
                    <button className="hero-button">Try It for Free</button>
                </Link>
            </div>
            <div className="flex-1 ml-auto content-end flex items-center justify-end">
                <Image
                    src="/images/website.png"
                    alt="website"
                    width={500}
                    height={440}
                    layout="intrinsic"
                    objectFit="contain"
                    priority
                />
            </div>
        </div>
    </header>
);

export default Hero;
