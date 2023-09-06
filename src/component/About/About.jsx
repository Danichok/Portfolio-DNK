import React from 'react'
import './About.css';
import avatar from '../../img/avatar.jpg';
import skils1 from '../../img/skils1.svg';
import skils2 from '../../img/skils2.svg';
import skils3 from '../../img/skils3.svg';
import skils4 from '../../img/skils4.svg';
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

function About() {

    /* motion effect */

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    /* motion effect */

    return (
        <div className='About'>
            <div className='container'>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                >
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: -40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
                        }}

                    >
                        <h2 className='about_plot'>about me</h2>
                    </motion.h2>
                </motion.div>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                >
                    <div className='about_block'>
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, x: -60 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
                            }}

                        >
                            <img src={avatar} alt="avatar" />
                        </motion.h2>
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, x: 60 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
                            }}

                        >
                            <div className='about_info'>
                                <h2>Daniil Riabyi</h2>
                                <p>Hello! I am an experienced Front-End developer with knowledge of React, JavaScript + JQuery, WordPress & WooCommerce, HTML and CSS. I specialize in building high-quality web applications, API integrations, and custom solutions that are scalable, maintainable, and user-friendly.</p>
                                <p>My user interface development skills include creating responsive and user-friendly interfaces using HTML, CSS, JavaScript. I am good at translating complex design concepts into clean, efficient code.</p>
                                <p>If you are looking for a talented and reliable Front-End developer, do not hesitate to contact me. I will be happy to discuss your project with you and provide an individual proposal according to your specific needs.</p>
                                <div>
                                    <a target='_blank' rel="noreferrer" href="https://github.com/Danichok">GITHUB</a>
                                    <a target='_blank' rel="noreferrer" href="https://t.me/danielready">TELEGRAM</a>
                                    <a target='_blank' rel="noreferrer" href="mailto:danichokdevelop@gmail.com">EMAIL</a>
                                </div>
                            </div>
                        </motion.h2>

                    </div>
                </motion.div>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                >
                    <div className='skils_list'>
                        <motion.div className='skils_block'
                            variants={{
                                hidden: { opacity: 0, y: -60 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.1 } },
                            }}

                        >
                            
                                <img src={skils1} alt="skils1" />
                                <hr />
                                <div>
                                    <h2>Interface & Design</h2>
                                    <p>Briefing, wireframe, UX, UI and branding.</p>
                                </div>
                           
                        </motion.div>
                        <motion.div className='skils_block'
                            variants={{
                                hidden: { opacity: 0, y: -60 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } },
                            }}

                        >
                            
                                <img src={skils2} alt="skils1" />
                                <hr />
                                <div>
                                    <h2>html & css</h2>
                                    <p>Responsive websites with fast loading.</p>
                                </div>
                           
                        </motion.div>
                        <motion.div className='skils_block'
                            variants={{
                                hidden: { opacity: 0, y: -60 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
                            }}

                        >
                            
                                <img src={skils3} alt="skils1" />
                                <hr />
                                <div>
                                    <h2>React.js</h2>
                                    <p>Build your system with node.js.</p>
                                </div>
                           
                        </motion.div>
                        <motion.div className='skils_block'
                            variants={{
                                hidden: { opacity: 0, y: -60 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
                            }}

                        >
                            
                                <img src={skils4} alt="skils1" />
                                <hr />
                                <div>
                                    <h2>WordPress</h2>
                                    <p>Create your e-commerce or blog with PHP.</p>
                                </div>
                            
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                >
                    <div className='about_exp_list'>
                        <motion.div className='about_exp_block'
                            variants={{
                                hidden: { opacity: 0, y: -60 },
                                visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.9 } },
                            }}

                        >

                            <hr />
                            <div>
                                <h2>I've had experiences with</h2>
                                <p>Firebase Database</p>
                                <p>MySQL Database</p>
                                <p>GIT, GitHub, Bitbucket</p>
                                <p>Coding PHP</p>
                                <p>Figma, Adobe XD, Sketch</p>
                                <p>CSS Preprocessors</p>
                                <p>Seo Optimization</p>
                            </div>

                        </motion.div>
                        <motion.div className='about_exp_block'
                            variants={{
                                hidden: { opacity: 0, y: -60 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } },
                            }}

                        >
                            <hr />
                            <div>
                                <h2>I have years of experience with</h2>
                                <p>Coding React.js</p>
                                <p>Coding HTML5</p>
                                <p>Coding CSS3</p>
                                <p>Coding WordPress</p>
                                <p>Coding JavaScript</p>
                                <p>Using Elementor</p>
                                <p>Creating User Interface</p>
                                <p>Using Adobe Package</p>
                                <p>API integration</p>
                            </div>
                        </motion.div>
                        <motion.div className='about_exp_block'
                            variants={{
                                hidden: { opacity: 0, y: -60 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } },
                            }}

                        >
                            <hr />
                            <div>
                                <h2>I work and study about</h2>
                                <p>Coding TypeScript</p>
                                <p>Studying Node.js basics</p>
                                <p>Studying User Experience</p>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>

            </div>
        </div >
    )
}

export default About
