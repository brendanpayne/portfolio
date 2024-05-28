import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TextDecode from '../utils/reveal.jsx';
import { BallCanvas } from './canvas';
import { styles } from "../style";
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc/index.js';
import { Tilt } from 'react-tilt';
import { technologies } from '../constants';

const Tech = () => {
  const [showList, setShowList] = useState(false);

  const handleTextClick = () => {
    setShowList(true);
  };

  const handleCloseClick = () => {
    setShowList(false);
  };

  return (
    <div className="relative w-full h-screen mx-auto flex flex-col justify-center items-center bg-primary">
      {showList && (
        <div 
          className="absolute inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md z-20" 
          onClick={handleCloseClick}
        ></div>
      )}
      {!showList ? (
        <motion.div
          variants={fadeIn('down', 'spring', 0.5, 2)}
          className="relative z-30 flex flex-col justify-center items-center px-24 md:px-8 w-full md:w-1/2 pt-8 max-h-3xl max-w-3xl pointer-events-none bg-opacity-75 bg-tertiary rounded-xl p-6 backdrop-blur-[10px]"
        >
          <p className={`${styles.sectionSubText} text-secondary pointer-events-none`}>Technologies</p>
          <h2 className={`${styles.sectionHeadText} text-white pointer-events-none`}>
            <TextDecode text='My Tech Stack' />
          </h2>
          <motion.p
            className={`${styles.sectionSubText} text-secondary pointer-events-auto cursor-pointer`}
            onClick={handleTextClick}
          >
            Prefer a list?
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          variants={fadeIn('down', 'spring', 0.5, 2)}
          className="relative z-30 flex flex-col justify-center items-center px-24 md:px-8 w-full md:w-1/2 pt-8 max-h-3xl max-w-3xl pointer-events-auto bg-opacity-75 bg-tertiary rounded-xl p-6 backdrop-blur-[10px]"
        >
          <button
            onClick={handleCloseClick}
            className="absolute top-4 right-4 text-[32px] text-white font-medium rounded-full w-8 h-8 flex justify-center items-center"
          >
            &times;
          </button>
          <p className={`${styles.sectionSubText} text-secondary pointer-events-none`}>Technologies</p>
          <div className="flex flex-wrap justify-center items-center w-full mt-4">
            {technologies.map((tech, index) => (
              <Tilt
                key={index}
                className={`flex justify-center items-center p-2 m-2 bg-secondary bg-opacity-50 rounded-md`}
              >
                <p className="text-white text-sm">{tech.name}</p>
              </Tilt>
            ))}
          </div>
          <p className={`text-secondary pointer-events-none mt-5`}>...and always learning more!</p>
        </motion.div>
      )}
      <div className="absolute inset-0 w-full h-full flex justify-center items-center">
        <motion.div
          variants={fadeIn('down', 'spring', 0.5, 2)}
          className="relative z-10 w-full h-full bg-primary flex justify-center items-center"
        >
          <BallCanvas />
        </motion.div>
      </div>
    </div>
  );
}

export default SectionWrapper(Tech, "tech");
