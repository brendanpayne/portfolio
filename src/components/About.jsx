import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TextDecode from '../utils/reveal.jsx';
import { Card3DCanvas } from "./canvas";
import { styles } from "../style";
import { textVariant, fadeIn } from '../utils/motion';
import { cards } from '../constants';
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
    <div className="w-full h-screen bg-primary flex justify-center items-center">
      <div className="flex xl:flex-row flex-col-reverse w-full h-full justify-center items-center">
        <motion.div
          variants={fadeIn('right', 'spring', 0.5, 1)}
          className="flex xl:w-full w-0 xl:h-full xl:max-h-[1500px] h-0 justify-center items-center xl:max-w-3xl p-8"
        >
          <Card3DCanvas imageUrl={cards[currentCard].imageUrl} className="w-full h-full" />
        </motion.div>
        <div className="flex flex-row w-full h-full justify-center items-center xl:max-w-3xl xl:ps-0 ps-24">
          {currentCard > 0 && (
            <button
              onClick={handlePreviousClick}
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
            </button>
          )}
          <motion.div
            variants={textVariant()}
            className="flex flex-col w-full h-full justify-center items-center xl:items-start"
          >
            <p className={`${styles.sectionSubText} text-secondary`}>{cards[currentCard].subtitle}</p>
            <h2 className={`${styles.sectionHeadText} text-white`}>
              <TextDecode key={cards[currentCard].text} text={cards[currentCard].title} />
            </h2>
            <p
              variants={fadeIn('left', 'spring', 0.1, 1)}
              className='flex flex-col mt-4 text-secondary text-[18px] font-light leading-[30px]'
            >
              <TextDecode key={cards[currentCard].text} text={cards[currentCard].text} />
            </p>
          </motion.div>
          {currentCard < cards.length - 1 && (
            <button
              onClick={handleLearnMoreClick}
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
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
