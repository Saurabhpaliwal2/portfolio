import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

interface Project {
    title: string;
    description: string;
    tags: string[];
    gradient: string;
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">My Projects</h2>
                    <div className="title-underline"></div>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="project-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-gradient" style={{ background: project.gradient }}></div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                                <motion.button
                                    className="project-button"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    View Project →
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
