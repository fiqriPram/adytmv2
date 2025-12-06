// components/About.tsx
import Image from 'next/image';

const About = () => {
    return (
        <section id="about" className="py-24 bg-gray-50 text-black">
            <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight">About Me</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                    {/* Profile Image */}
                    <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-2xl flex-shrink-0">
                        <Image
                            src="/stewie.jpg"
                            alt="Profile"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* About Text */}
                    <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-lg mb-4">
                            Hi, I'm <span className="font-bold">Andrew Tanjaya</span>, a passionate creative website developer who specializes in bringing aesthetics and functionality together.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg mb-4">
                            With a keen eye for design and a strong foundation in modern web technologies, I create digital experiences that are not only visually stunning but also highly functional and user-friendly.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            I believe that great websites should tell a story, engage users, and deliver measurable results. Let's build something amazing together.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;