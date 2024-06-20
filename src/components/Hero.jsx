import { motion } from "framer-motion";

import { styles } from "../style";
import { WavesCanvas } from "./canvas";
import TextDecode from '../utils/reveal.jsx';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="w-full h-full min-h-[800px]">
        <WavesCanvas />
      </div>
      <div
        className={`absolute inset-0 top-[200px] max-w-7xl mx-auto flex justify-center items-start gap-20 ps-12 px-4 sm:px-0`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <TextDecode text='Brendan Payne' />
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <TextDecode text='Software Developer' />
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;