import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const randomChar = () => {
  const chars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ';
  return chars[Math.floor(Math.random() * chars.length)];
};

const scrambleText = (text) => {
  return text.split('').map(() => randomChar()).join('');
};

const TextDecode = ({ text }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust the threshold as needed
  });
  const [displayedText, setDisplayedText] = useState(scrambleText(text));
  const [revealed, setRevealed] = useState(false);
  const [iterations, setIterations] = useState(0); 

  useEffect(() => {
    if (inView && !revealed) {
      let currentText = scrambleText(text);
      const interval = setInterval(() => {
        currentText = currentText
          .split('')
          .map((char, i) => (iterations >= i ? text[i] : randomChar()))
          .join('');
        setDisplayedText(currentText);
        setIterations(iterations + 1 * (text.length / 20)); 
        if (iterations > text.length) {
          clearInterval(interval);
          setRevealed(true);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [inView, revealed, text, iterations]); 
  
  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }} transition={{ duration: 0.5 }}>
      {displayedText.split('').map((char, i) => (
        <span key={i} style={{ color: i < iterations ? 'white' : '#915EFF' }}>{char}</span>
      ))}
    </motion.div>
  );
};

export default TextDecode;