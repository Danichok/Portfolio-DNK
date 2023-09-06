import React from 'react'
import './Header.css';
import Typewriter from "typewriter-effect";
import { useState } from 'react';
import { motion } from "framer-motion"

function Header(props) {

    const [toggleMode, setToggleMode] = useState(true);

    const handleThemeToggle = () => {
        setToggleMode(!toggleMode);
        props.toggleTheme();
    }

    const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

    return (
        <div className='Header'>
            <hr className='line_main' />
            <div className='container'>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                >
                    <div className='navbar'>


                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: -40 },
                                visible
                            }}

                        >
                            <div className='navbar_logo'>dnk.</div>
                        </motion.div>
                        <motion.div
                            variants={{

                                hidden: { opacity: 0, y: -20 },
                                visible
                            }}

                        >
                            <div className='self'>
                                <h2>self service</h2>
                                <p>20% OFF</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <p className='header_name'> <Typewriter

                
                options={{
                    loop: true,
                    cursor: "_",
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("front-end.web(developer)")
                        .pauseFor(3000)
                        .deleteAll()
                        .typeString("react,javascript & wordpress")
                        .pauseFor(4000)
                        .deleteAll()
                        .start()
                }}

            /></p>
            <div className='toggle_theme'>
                <p onClick={handleThemeToggle}>
                    {toggleMode ? "dark mode." : "light mode."}
                </p>
            </div>


        </div>
    )
}

export default Header
