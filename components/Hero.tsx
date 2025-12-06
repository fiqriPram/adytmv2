// components/Hero.tsx
import Image from 'next/image';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-white text-black px-6 pt-24 pb-20">
            {/* Profile Photo - Centered & Larger */}
            <div className="mb-10 relative group">
                <div className="w-56 h-72 md:w-72 md:h-96 relative overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                        src="/stewie.jpg"
                        alt="Stewie Griffin"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        priority
                    />
                </div>
            </div>

            {/* Main Heading - Bold & Striking */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none max-w-5xl">
                CREATIVE<br />
                WEBSITE DEVELOPER
            </h1>

            {/* Subtitle - Minimal & Clean */}
            <p className="text-sm md:text-base text-gray-600 max-w-md font-normal tracking-wide leading-relaxed">
                who brings aesthetics and functionality<br />
                together
            </p>

            {/* Scroll Indicator - Optional */}
            <a href="#about" className="mt-20 animate-bounce opacity-50 hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </a>
        </section>
    );
};

export default Hero;