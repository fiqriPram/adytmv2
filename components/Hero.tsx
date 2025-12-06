// components/Hero.tsx
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center bg-white text-black px-6 -mt-8">
            {/* Profile Photo - Smaller & More Portrait */}
            <div className="mb-5 relative group">
                <div className="w-36 h-48 md:w-40 md:h-56 relative overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                        src="/stewie.jpg"
                        alt="Stewie Griffin"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        priority
                    />
                </div>
            </div>

            {/* Main Heading - Bold Black Font */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 tracking-tight leading-tight max-w-3xl uppercase">
                Creative<br />
                Website Developer
            </h1>

            {/* Subtitle - Light & Small */}
            <p className="text-[11px] md:text-xs text-gray-600 max-w-sm font-normal tracking-wide mt-1">
                who brings aesthetics and functionality<br />
                together
            </p>
        </section>
    );
};

export default Hero;