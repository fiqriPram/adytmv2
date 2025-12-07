// components/About.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaDribbble, FaBehance, FaMedium, FaYoutube, FaDev } from 'react-icons/fa';

const About = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-white text-black pt-24 pb-6 overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl flex-grow flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center flex-grow">

                    {/* Left: Text Content */}
                    <div className="space-y-6 order-2 md:order-1 max-w-md mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none text-black">
                            Nice to <br />
                            meet you!
                        </h1>

                        <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                            <p>
                                My name is <Link href="https://www.linkedin.com/in/fiqripramudya/" target="_blank" className="bg-gray-100 px-2 py-1 rounded-md font-bold text-black border border-gray-200 hover:bg-gray-200 transition-colors cursor-pointer">Fiqri Pramudya Adiyatma</Link> , I am a web developer, interested in both frontend and backend web development.
                            </p>

                            <p>
                                I do not only strive to build a functional website but give all my time to build a functional yet aesthetic website.
                            </p>

                            <p>
                                I love to make things, love to discover, love to learn new things, love to share my knowledge too. I work with tons of frameworks and programming languages to achieve my goals.
                            </p>
                        </div>
                    </div>

                    {/* Right: 3D Illustration */}
                    <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center order-1 md:order-2">
                        <div className="relative w-full h-full max-w-sm animate-float">
                            <Image
                                src="/stewie.jpg"
                                alt="Creative Mind Explosion"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Icons - Bottom Center */}
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex items-center justify-center gap-6 pt-12 md:pt-0 w-full">
                    <SocialLink href="https://linkedin.com/in/fiqripramudya/" icon={<FaLinkedin />} label="LinkedIn" color="text-[#0077b5]" />
                    <SocialLink href="https://github.com/fiqripram" icon={<FaGithub />} label="GitHub" color="text-[#333]" />
                    <SocialLink href="https://medium.com/@towhour" icon={<FaMedium />} label="Medium" color="text-black" />
                    <SocialLink href="https://dev.to/adytm__" icon={<FaDev />} label="Dev.to" color="text-black" />
                    <SocialLink href="https://youtube.com" icon={<FaYoutube />} label="YouTube" color="text-[#ff0000]" />
                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon, label, color }: { href: string, icon: React.ReactNode, label: string, color: string }) => (
    <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${color} hover:scale-125 transition-transform duration-300`}
        aria-label={label}
    >
        <span className="w-6 h-6 md:w-7 md:h-7 block flex items-center justify-center text-3xl">
            {icon}
        </span>
    </Link>
);

export default About;