import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <div className="title-underline"></div>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="about-paragraph">
                            I'm a passionate <strong>Full-Stack Web Developer</strong> and recent graduate
                            eager to bring fresh perspectives and modern web development skills to innovative projects.
                            I specialize in creating seamless user experiences with cutting-edge technologies.
                        </p>
                        <p className="about-paragraph">
                            My journey in web development started with a curiosity for how things work on the web,
                            and has evolved through intensive learning, personal projects, and hands-on practice.
                            I'm excited to apply my skills in a professional environment and continue growing as a developer.
                        </p>
                        <p className="about-paragraph">
                            When I'm not coding, you'll find me exploring new technologies, building side projects,
                            contributing to open-source, and staying updated with the latest web development trends.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-stats"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {[
                            { number: 'Fresher', label: 'Ready to Start' },
                            { number: '15+', label: 'Projects Built' },
                            { number: '10+', label: 'Technologies' },
                            { number: '100%', label: 'Dedication' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stat-card"
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
