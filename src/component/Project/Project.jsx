import React from 'react'
import './Project.css';
import project1 from '../../img/project_1.png';
import project2 from '../../img/project_2.png';
import project3 from '../../img/project_3.png';
import project4 from '../../img/project_4.png';
import project5 from '../../img/project_5.png';
import project6 from '../../img/project_6.png';
import project7 from '../../img/project_7.png';
import project8 from '../../img/project_8.png';
import { useState } from 'react';
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

function Project() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  /* motion effect */

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  /* motion effect */

  return (
    <div className='Project'>
      <div className='container'>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
            }}

          >
            <h2 className='project_plot'>personal projects</h2>
          </motion.h2>
        </motion.div>
        <div className={`wrapper_project ${isContentVisible ? 'open' : ''}`}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          >
            <div className='project_list'>
              <motion.div className='project_block'
                variants={{
                  hidden: { opacity: 0, x: -60 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
                }}

              >

                <div className='project_appearance'>
                  <a rel="noreferrer" target='_blank' href="https://danichok.github.io/villenoir/">
                    <img src={project1} alt="project-img" />
                  </a>
                  <div className='project_skils'>
                    <div>react</div>
                    <div>html</div>
                    <div>css</div>
                    <div>API</div>
                  </div>
                </div>
                <div className='project_info'>
                  <h2 className='project_name'>Villenoir</h2>
                  <p className='project_desc'>A site for selling wines with a basket</p>
                  <a rel="noreferrer" target='_blank' className='project_link' href="https://danichok.github.io/villenoir/">see project</a>
                </div>

              </motion.div>
              <motion.div className='project_block'
                variants={{
                  hidden: { opacity: 0, x: 60 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
                }}

              >

                <div className='project_appearance'>
                  <a rel="noreferrer" target='_blank' href="https://expertprobot.com/">
                    <img src={project2} alt="project-img" />
                  </a>
                  <div className='project_skils'>
                    <div>react</div>
                    <div>html</div>
                    <div>css</div>
                  </div>
                </div>
                <div className='project_info'>
                  <h2 className='project_name'>Expert Bot</h2>
                  <p className='project_desc'>Telegram bot project with light and dark theme. Changeable language and fully responsive on all devices
                    ien, facilisis blandit purus id, facilisis tinci.</p>
                  <a rel="noreferrer" target='_blank' className='project_link' href="https://expertprobot.com/">see project</a>
                </div>

              </motion.div>
            </div>


            <div className='project_list'>
              <motion.div className='project_block'
                variants={{
                  hidden: { opacity: 0, x: -60 },
                  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
                }}

              >

                <div className='project_appearance'>
                  <a rel="noreferrer" target='_blank' href="https://danichok.github.io/ENDNFT/">
                    <img src={project3} alt="project-img" />
                  </a>
                  <div className='project_skils'>

                    <div>html</div>
                    <div>css</div>
                    <div>javascript</div>
                  </div>
                </div>
                <div className='project_info'>
                  <h2 className='project_name'>ENDNFT</h2>
                  <p className='project_desc'>Website selling NFT</p>
                  <a rel="noreferrer" target='_blank' className='project_link' href="https://danichok.github.io/ENDNFT/">see project</a>
                </div>

              </motion.div>
              <motion.div className='project_block'
                variants={{
                  hidden: { opacity: 0, x: 60 },
                  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
                }}

              >

                <div className='project_appearance'>
                  <a rel="noreferrer" target='_blank' href="https://nataliainspiri.com/">
                    <img src={project4} alt="project-img" />
                  </a>
                  <div className='project_skils'>
                    <div>wordpress</div>
                    <div>html</div>
                    <div>css</div>
                  </div>
                </div>
                <div className='project_info'>
                  <h2 className='project_name'>Natalia</h2>
                  <p className='project_desc'>Site hosted on Wordpress</p>
                  <a rel="noreferrer" target='_blank' className='project_link' href="https://nataliainspiri.com/">see project</a>
                </div>

              </motion.div>
            </div>
          </motion.div>
          <div className='project_list'>
            <div className='project_block'>
              <div className='project_appearance'>
                <a rel="noreferrer" target='_blank' href="https://chefgezocht.nl/">
                  <img src={project5} alt="project-img" />
                </a>
                <div className='project_skils'>
                  <div>html</div>
                  <div>css</div>
                  <div>SEO</div>
                </div>
              </div>
              <div className='project_info'>
                <h2 className='project_name'>Chefs Qlinair</h2>
                <p className='project_desc'>Chefs Qlinair specializes in the secondment and mediation of independent cooks, sous chefs and chefs.</p>
                <a rel="noreferrer" target='_blank' className='project_link' href="https://chefgezocht.nl/">see project</a>
              </div>
            </div>
            <div className='project_block'>
              <div className='project_appearance'>
                <a rel="noreferrer" target='_blank' href="https://danichok.github.io/">
                  <img src={project6} alt="project-img" />
                </a>
                <div className='project_skils'>
                  <div>jQuery</div>
                  <div>html</div>
                  <div>css</div>
                </div>
              </div>
              <div className='project_info'>
                <h2 className='project_name'>First Portfolio</h2>
                <p className='project_desc'>The design I made was created using HTML, CSS and the library JQUERY</p>
                <a rel="noreferrer" target='_blank' className='project_link' href="https://danichok.github.io/">see project</a>
              </div>
            </div>
          </div>
          <div className='project_list'>
            <div className='project_block'>
              <div className='project_appearance'>
                <a rel="noreferrer" target='_blank' href="https://danichok.github.io/Digital-Flow/">
                  <img src={project7} alt="project-img" />
                </a>
                <div className='project_skils'>
                  <div>html</div>
                  <div>css</div>
                  <div>javascript</div>
                </div>
              </div>
              <div className='project_info'>
                <h2 className='project_name'>Digital Flow</h2>
                <p className='project_desc'>Website made for portfolio</p>
                <a rel="noreferrer" target='_blank' className='project_link' href="https://danichok.github.io/Digital-Flow/">see project</a>
              </div>
            </div>
            <div className='project_block'>
              <div className='project_appearance'>
                <a rel="noreferrer" target='_blank' href="https://danichok.github.io/CreateX/">
                  <img src={project8} alt="project-img" />
                </a>
                <div className='project_skils'>
                  <div>jQuery</div>
                  <div>html</div>
                  <div>css</div>
                </div>
              </div>
              <div className='project_info'>
                <h2 className='project_name'>CreateX</h2>
                <p className='project_desc'>The page is made fully responsive for mobile devices using HTML5 / CSS3 / JS / jQuery</p>
                <a rel="noreferrer" target='_blank' className='project_link' href="https://danichok.github.io/CreateX/">see project</a>
              </div>
            </div>
          </div>
        </div>

        <h2 className='show_project_toggle' onClick={toggleContent}>{isContentVisible ? 'show more project' : 'show more project'}</h2>
        {isContentVisible && <div className="wrapper_project"></div>}
      </div>
    </div >
  )
}

export default Project
