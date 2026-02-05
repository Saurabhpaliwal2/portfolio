import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <motion.div
                    className="footer-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="footer-brand">
                        <h3 className="footer-logo">Portfolio</h3>
                        <p className="footer-tagline">Building the future, one line of code at a time.</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Quick Links</h4>
                            <a href="#hero">Home</a>
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                        </div>
                        <div className="footer-column">
                            <h4>Projects</h4>
                            <a href="#projects">All Projects</a>
                            <a href="#contact">Contact</a>
                        </div>
                        <div className="footer-column">
                            <h4>Social</h4>
                            <a href="https://www.linkedin.com/in/saurabh-paliwal-77368121b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="#">GitHub</a>
                            <a href="#">Twitter</a>
                        </div>
                    </div>
                </motion.div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Saurabh. All rights reserved.</p>
                    <div className="footer-social">
                        <motion.a href="https://www.linkedin.com/in/saurabh-paliwal-77368121b" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>💼</motion.a>
                        <motion.a href="#" whileHover={{ scale: 1.2 }}>🐙</motion.a>
                        <motion.a href="#" whileHover={{ scale: 1.2 }}>🐦</motion.a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
