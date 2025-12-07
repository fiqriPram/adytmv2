// components/Hero.tsx
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center bg-white text-black px-6 -mt-8">
            {/* Profile Photo - Smaller & More Portrait */}
            <div className="mb-5 relative group">
                <div className="w-48 h-64 md:w-56 md:h-80 relative overflow-hidden rounded-lg shadow-2xl">
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-tighter leading-none max-w-3xl uppercase">
                Creative<br />
                Website Developer
            </h1>

            {/* Subtitle - Light & Small */}
            {/* <p className="text-[10px] md:text-[11px] text-gray-600 max-w-sm font-normal tracking-wide mt-1"> */}
            <p className="text-[10px] md:text-[11px] text-gray-900 max-w-sm font-normal tracking-wide mt-1">
                who brings aesthetics and functionality<br />
                together
            </p>
        </section>
    );
};

export default Hero;