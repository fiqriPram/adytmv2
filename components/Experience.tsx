// components/Experience.tsx
import { Experience as ExperienceType } from '@/types';

const experiences: ExperienceType[] = [
    {
        title: 'Software Engineer Intern',
        company: 'Tech Company A',
        date: 'June 2023 - August 2023',
        description: 'Developed and maintained features for a web application using React and Node.js.'
    },
    {
        title: 'Junior Web Developer',
        company: 'Startup B',
        date: 'Jan 2022 - May 2023',
        description: 'Built responsive websites for clients using HTML, CSS, and JavaScript.'
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-white text-black">
            <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight">Experience</h2>
                <div className="relative border-l-2 border-gray-300 ml-4">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-12 ml-10">
                            <span className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-4 ring-gray-100">
                                <span className="h-3 w-3 rounded-full bg-black"></span>
                            </span>
                            <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                            <p className="text-gray-600 mb-2">{exp.company} | {exp.date}</p>
                            <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;