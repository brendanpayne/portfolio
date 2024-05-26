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
    <div className="relative w-full h-screen mx-auto flex flex-col-reverse md:flex-row justify-between items-center bg-primary">
      <div className="flex flex-row w-full h-full">
        <motion.div
          variants={fadeIn('right', 'spring', 0.5, 1)}
          className="w-full md:w-1/2 h-full bg-primary flex justify-center items-center"
        >
          <Card3DCanvas imageUrl={cards[currentCard].imageUrl} />
        </motion.div>
        {currentCard > 0 && (
          <a
            href='#about'
            onClick={(e) => {
              e.preventDefault();
              handlePreviousClick();
            }}
            className='relative h-full flex flex-row justify-start items-center max-w-3xl px-10'
          >
            <motion.div
              animate={{
                x: [0, -12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='chevron-left text-secondary'
            />
          </a>
        )}
        <motion.div
          variants={textVariant()}
          className="flex flex-col justify-center items-start px-24 md:px-8 w-full md:w-1/2 h-full bg-primary pt-24 max-w-3xl"
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
            className='relative h-full flex flex-row justify-start items-center max-w-3xl px-10'
          >
            <motion.div
              animate={{
                x: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='chevron-right text-secondary'
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
