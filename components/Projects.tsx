// components/Projects.tsx
import { Project as ProjectType } from '@/types';

const projects: ProjectType[] = [
    {
        title: 'Project Alpha',
        description: 'A full-stack web application for task management.',
        tech: ['Next.js', 'Tailwind CSS', 'Prisma'],
        link: '#',
        repo: '#',
    },
    {
        title: 'E-Commerce Site',
        description: 'A responsive e-commerce platform with a payment gateway.',
        tech: ['React', 'Node.js', 'MongoDB'],
        link: '#',
        repo: '#',
    },
    {
        title: 'Portfolio Website',
        description: 'A minimalist portfolio showcasing creative work.',
        tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        link: '#',
        repo: '#',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-gray-50 text-black">
            <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                <p className="text-gray-600 mb-5 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full font-medium">{t}</span>
                                    ))}
                                </div>
                                <div className="flex space-x-4">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:underline">Live Demo →</a>
                                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:underline">GitHub →</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;