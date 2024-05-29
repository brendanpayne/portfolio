import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import TextDecode from '../utils/reveal.jsx';
import { Card3DCanvas } from "./canvas";
import { styles } from "../style";
import { textVariant, fadeIn } from '../utils/motion';
import { cards } from '../constants'
import { SectionWrapper } from '../hoc/index.js';

const About = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleLearnMoreClick = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
  };

  const handlePreviousClick = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + cards.length) % cards.length);
  };

  return (
    <div className="w-full h-full bg-primary justify-center items-center">
      <div className="absolute flex flex-row w-full h-screen justify-center items-center">
        <motion.div
          variants={fadeIn('right', 'spring', 0.5, 1)}
          className="w-full md:w-1/2 h-full bg-primary flex justify-center items-center ps-24"
        >
          <Card3DCanvas imageUrl={cards[currentCard].imageUrl} />
        </motion.div>
        <div className="flex flex-row w-full h-full justify-start items-center min-w-3xl">
          {currentCard > 0 && (
            <a
              href='#about'
              onClick={(e) => {
                e.preventDefault();
                handlePreviousClick();
              }}
              className="text-white text-[32px] font-medium rounded-full w-16 h-16 flex justify-center items-center"
            >
              <motion.p
                animate={{
                  x: [0, -12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                &lt;
              </motion.p>
            </a>
          )}
          <motion.div
            variants={textVariant()}
            className="flex flex-col justify-center items-center w-full h-full p-8 max-w-3xl"
          >
            <p className={`${styles.sectionSubText} text-secondary`}>{cards[currentCard].subtitle}</p>
            <h2 className={`${styles.sectionHeadText} text-white`}>
              <TextDecode key={cards[currentCard].text} text={cards[currentCard].title} />
            </h2>
            <p
              variants={fadeIn('left', 'spring', 0.1, 1)}
              className='flex flex-col mt-4 text-secondary text-[18px] font-light max-w-3xl leading-[30px]'
            >
              <TextDecode key={cards[currentCard].text} text={cards[currentCard].text} />
            </p>
          </motion.div>
          {currentCard < cards.length - 1 && (
            <a
              href='#about'
              onClick={(e) => {
                e.preventDefault();
                handleLearnMoreClick();
              }}
              className="text-white text-[32px] font-medium rounded-full w-16 h-16 flex justify-center items-center"
            >
              <motion.p
                animate={{
                  x: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}  
              >
                &gt;
              </motion.p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
