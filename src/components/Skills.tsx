import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

interface Skill {
    name: string;
    icon: string;
    level: number;
}

const Skills: React.FC = () => {
    const skills: Skill[] = [
        { name: 'React', icon: '⚛️', level: 95 },
        { name: 'TypeScript', icon: '📘', level: 90 },
        { name: 'CSS/SCSS', icon: '🎨', level: 92 },
        { name: 'JavaScript', icon: '💛', level: 95 },
        { name: 'HTML', icon: '🌐', level: 90 },
        { name: 'Java', icon: '☕', level: 80 },
        { name: 'Git', icon: '📦', level: 90 }
    ];

    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">Skills & Technologies</h2>
                    <div className="title-underline"></div>
                </motion.div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="skill-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.05 }}
                        >
                            <div className="skill-icon">{skill.icon}</div>
                            <h3 className="skill-name">{skill.name}</h3>
                            <div className="skill-bar-container">
                                <motion.div
                                    className="skill-bar"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                >
                                    <span className="skill-level">{skill.level}%</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
