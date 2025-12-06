// components/Navbar.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 px-6 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* Logo/Avatar - Kiri */}
                    <Link href="/" className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <Image
                            src="/stewie.jpg"
                            alt="Logo"
                            fill
                            className="object-cover"
                        />
                    </Link>

                    {/* Hamburger Menu - Kanan */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <div className="flex flex-col gap-1.5">
                            <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    <Link
                        href="#home"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-3xl font-bold hover:text-gray-600 transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="#about"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-3xl font-bold hover:text-gray-600 transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="#experience"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-3xl font-bold hover:text-gray-600 transition-colors"
                    >
                        Experience
                    </Link>
                    <Link
                        href="#projects"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-3xl font-bold hover:text-gray-600 transition-colors"
                    >
                        Projects
                    </Link>
                    <Link
                        href="#contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-3xl font-bold hover:text-gray-600 transition-colors"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;