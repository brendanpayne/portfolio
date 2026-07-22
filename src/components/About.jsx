import { useState, Suspense } from 'react';
import Loader from './Loader';
import CanvasErrorBoundary from './CanvasErrorBoundary';
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
          className="flex xl:w-full w-full xl:h-full h-[280px] xl:max-h-[1500px] justify-center items-center xl:max-w-3xl p-4 xl:p-8"
        >
          {/* Static image on mobile/tablet */}
          <img
            src={cards[currentCard].imageUrl}
            alt={cards[currentCard].title}
            className="xl:hidden w-full h-full object-cover rounded-2xl"
          />
          {/* 3D canvas on desktop with image as error fallback */}
          <div className="hidden xl:flex w-full h-full">
            <CanvasErrorBoundary fallback={
              <img
                src={cards[currentCard].imageUrl}
                alt={cards[currentCard].title}
                className="w-full h-full object-cover rounded-2xl"
              />
            }>
              <Suspense fallback={<Loader />}>
                <Card3DCanvas imageUrl={cards[currentCard].imageUrl} className="w-full h-full" />
              </Suspense>
            </CanvasErrorBoundary>
          </div>
        </motion.div>
        <div className="flex flex-row w-full h-full justify-center items-center xl:max-w-3xl xl:ps-0 ps-24">
          {currentCard > 0 && (
            <button
              aria-label="Previous card"
              onClick={handlePreviousClick}
              className="text-white text-[32px] font-medium rounded-full w-16 h-16 flex justify-center items-center"
            >
              <motion.span
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
              </motion.span>
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
            <motion.p
              variants={fadeIn('left', 'spring', 0.1, 1)}
              className='flex flex-col mt-4 text-secondary text-[18px] font-light leading-[30px]'
            >
              <TextDecode key={cards[currentCard].text} text={cards[currentCard].text} />
            </motion.p>
          </motion.div>
          {currentCard < cards.length - 1 && (
            <button
              aria-label="Next card"
              onClick={handleLearnMoreClick}
              className="text-white text-[32px] font-medium rounded-full w-16 h-16 flex justify-center items-center"
            >
              <motion.span
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
              </motion.span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
