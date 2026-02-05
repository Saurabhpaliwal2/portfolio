import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="navbar-container">
                <motion.div
                    className="logo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="logo-text">Portfolio</span>
                </motion.div>

                <div className="nav-links">
                    {[
                        { id: 'hero', label: 'Home' },
                        { id: 'about', label: 'About' },
                        { id: 'skills', label: 'Skills' },
                        { id: 'projects', label: 'Projects' },
                        { id: 'contact', label: 'Contact' }
                    ].map((section, index) => (
                        <motion.button
                            key={section.id}
                            className="nav-link"
                            onClick={() => scrollToSection(section.id)}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {section.label}
                        </motion.button>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
