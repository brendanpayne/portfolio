import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import TextDecode from '../utils/reveal.jsx';
import { styles } from "../style";
import { textVariant, fadeIn } from '../utils/motion';
import { experiences } from '../constants'
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc/index.js';

const ExperienceCard = ({ experience, index, total }) => {
  return (
    <motion.div variants={fadeIn('up', 'easeInOut', index * 0.5, 0.75)} className="flex flex-row justify-between items-center">
      <Tilt
        options={{
          scale: 1.05,
          max: 15,
          speed: 500,
        }}
        className="flex flex-col items-center bg-tertiary p-4 rounded-2xl shadow-card"
      >
        <div className="flex flex-row justify-between items-center w-[80%]">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center p-3`} style={{ backgroundColor: experience.iconBg }}>
            <img src={experience.icon} alt={`${experience.company_name} logo`} className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col items-center mx-5">
            <p className={`${styles.sectionSubText} text-white mt-2`}>{experience.company_name}</p>
            <h3 className={`mt-3 text-gray-400 text-[17px] max-w-3xl leading-[12px]`}>{experience.title}</h3>
            <p className={`mt-3 text-gray-400 text-[15px] max-w-3xl leading-[12px]`}>{experience.date}</p>
          </div>
        </div>
        <ul className='mt-5 list-disc space-y-2 px-8'>
          {experience.points.map((point, index) => (
            <li 
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </Tilt>
      {index < total - 1 && (
        <div className="w-[200px] h-0.5 bg-gray-400" />
      )}
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-primary">
      <div className="flex flex-col items-center">
        <motion.div
          variants={textVariant()}
          className="w-full flex flex-col justify-center items-center"
        >
          <p className={`${styles.sectionSubText} text-gray-400`}>Work Experience</p>
          <h2 className={`${styles.sectionHeadText} text-white`}>
            <TextDecode text={`Where I've Worked`} />
          </h2>
          <div className="relative flex flex-row justify-center items-center mt-10 max-w-7xl">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
                total={experiences.length}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");