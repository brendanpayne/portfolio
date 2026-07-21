import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const randomChar = () => {
  const chars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ'; // 半角カナの方が見やすい
  return chars[Math.floor(Math.random() * chars.length)];
};

const scrambleText = (text) => {
  return text.split('').map(() => randomChar()).join('');
};

const TextDecode = ({ text, color, speed = 2 }) => {
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [displayedText, setDisplayedText] = useState(shouldReduceMotion ? text : scrambleText(text));
  const [revealed, setRevealed] = useState(!!shouldReduceMotion);
  const [iterations, setIterations] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (inView && !revealed) {
      let currentText = scrambleText(text);
      const interval = setInterval(() => {
        currentText = currentText
          .split('')
          .map((char, i) => (iterations >= i ? text[i] : randomChar()))
          .join('');
        setDisplayedText(currentText);
        setIterations(iterations + speed * (text.length / 20));
        if (iterations > text.length) {
          clearInterval(interval);
          setRevealed(true);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [inView, revealed, text, iterations, shouldReduceMotion]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView || shouldReduceMotion ? 1 : 0 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
    >
      {shouldReduceMotion
        ? text
        : displayedText.split('').map((char, i) => (
            <span key={i} style={{ color: i < iterations ? color : '#915EFF' }}>{char}</span>
          ))
      }
    </motion.div>
  );
};

export default TextDecode;