// components/Navbar.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        { id: 'home', label: 'Home', href: '/' },
        { id: 'projects', label: 'Project', href: '/projects' },
        { id: 'about', label: 'About', href: '/about' },
    ];

    const handleMenuClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-transparent z-50">
                <div className="max-w-6xl mx-auto px-8 py-6 flex justify-end items-center relative">
                    {/* Hamburger Menu - Kanan */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-all ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                            }`}
                        aria-label="Toggle menu"
                    >
                        <div className="flex flex-col gap-1.5">
                            <span className="w-5 h-0.5 bg-black rounded-full"></span>
                            <span className="w-5 h-0.5 bg-black rounded-full"></span>
                            <span className="w-5 h-0.5 bg-black rounded-full"></span>
                        </div>
                    </button>

                    {/* Dropdown Menu - Absolute positioning dalam container */}
                    <div
                        className={`absolute top-16 right-0 transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
                            }`}
                    >
                        <div className="bg-white rounded-3xl shadow-2xl p-5 w-44 relative">
                            {/* Close Button X */}
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute -top-7 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all"
                                aria-label="Close menu"
                            >
                                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Menu Items */}
                            <div className="flex flex-col gap-2 mt-3">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={item.href}
                                        onClick={handleMenuClick}
                                        className={`px-5 py-2.5 rounded-full text-center text-sm font-medium transition-all duration-300 ${pathname === item.href
                                            ? 'bg-gray-800 text-white shadow-lg'
                                            : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;