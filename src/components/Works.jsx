import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import TextDecode from '../utils/reveal.jsx';
import { styles } from "../style";
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc/index.js';
import { Tilt } from 'react-tilt';
import { projects } from '../constants';

const ProjectCard = ({ project, index, total }) => {
  return (
    <motion.div 
    variants={fadeIn('up', 'easeInOut', index * 0.5, 0.75)} 
    className="flex flex-row justify-between items-center max-w-sm w-full cursor-pointer select-none p-4"
    onClick={() => window.open(project.source_code_link, '_blank')}
    >
      <Tilt
        options={{
          scale: 1.05,
          max: 15,
          speed: 500,
        }}
        className="flex flex-col items-center bg-tertiary p-4 rounded-2xl shadow-card"
      >
        <div className="flex flex-col justify-between items-center w-[full] pointer-events-none">
          <div className={`w-full h-full flex items-center justify-center p-2 pointer-events-none`}>
            <img src={project.image} alt={`${project.name} screenshot`} className="w-full h-full object-contain rounded-2xl pointer-events-none" />
          </div>
          <div className="flex flex-col items-center pointer-events-none">
            <p className={`${styles.sectionSubText} text-white mt-2 pointer-events-none`}>{project.name}</p>
            <h3 className={`text-gray-400 text-[17px] max-w-3xl leading-[12px] pointer-events-none`}>{project.title}</h3>
            <p className={`text-gray-400 text-[15px] max-w-3xl leading-[12px] pointer-events-none`}>{project.date}</p>
          </div>
        </div>
        <p className={`mt-5 text-gray-400 text-[15px] max-w-3xl leading-[18px] text-center pointer-events-none`}>{project.description}</p>
        {project.tags && (
          <div className="flex flex-wrap justify-center items-center w-full mt-4 pointer-events-none">
            {project.tags.map((tag, index) => (
              <div key={index} className={`${tag.color} text-white text-[12px] px-2 py-1 rounded-full mx-1 pointer-events-none`}>#{tag.name}</div>
            ))}
          </div>
        )}
      </Tilt>
    </motion.div>
  );
}

const Works = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-primary pt-32">
      <div className="flex flex-col items-center">
        <motion.div
          variants={textVariant()}
          className="w-full flex flex-col justify-center items-center"
        >
          <p className={`${styles.sectionSubText} text-gray-400`}>Projects</p>
          <h2 className={`${styles.sectionHeadText} text-white`}>
            <TextDecode text={`Some of My Projects`} />
          </h2>
        </motion.div>
        <div className="flex flex-row items-center w-full mt-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} total={projects.length} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default SectionWrapper(Works, "works")