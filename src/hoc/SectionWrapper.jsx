import { motion, useReducedMotion } from "framer-motion";

import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    const shouldReduceMotion = useReducedMotion();
    return (
      <motion.section
        variants={shouldReduceMotion ? undefined : staggerContainer()}
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView={shouldReduceMotion ? undefined : 'show'}
        viewport={{ once: true, amount: 0.25 }}
        className={`mx-auto overflow-x-hidden relative z-0 bg-primary`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;