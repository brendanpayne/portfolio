import { motion } from 'framer-motion';
import TextDecode from '../utils/reveal.jsx';
import { styles } from "../style";
import { textVariant, fadeIn } from '../utils/motion';
import { experiences } from '../constants'
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc/index.js';

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div variants={fadeIn('up', 'easeInOut', index * 0.3, 0.75)} className="flex flex-col">
      <div className="hidden xl:flex justify-center mb-5">
        <div className="w-4 h-4 rounded-full bg-secondary relative z-10" />
      </div>
      <Tilt
        options={{ scale: 1.03, max: 12, speed: 500 }}
        className="flex flex-col items-start bg-tertiary p-5 rounded-2xl shadow-card flex-1"
      >
        <div className="flex flex-row items-center gap-3 mb-3 w-full">
          <div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center p-2" style={{ backgroundColor: experience.iconBg }}>
            {experience.icon && (
              <img src={experience.icon} alt={`${experience.company_name} logo`} className="w-full h-full object-contain" />
            )}
          </div>
          <div className="flex flex-col min-w-0">
            <p className={`${styles.sectionSubText} text-white`}>{experience.company_name}</p>
            <p className="text-gray-400 text-[13px] mt-0.5 leading-tight">{experience.title}</p>
            <p className="text-gray-500 text-[12px] mt-0.5">{experience.date}</p>
          </div>
        </div>
        <ul className='list-disc space-y-2 px-4'>
          {experience.points.map((point, idx) => (
            <li
              key={`experience-point-${idx}`}
              className='text-white-100 text-[13px] pl-1 tracking-wider leading-relaxed'
            >
              {point}
            </li>
          ))}
        </ul>
      </Tilt>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center bg-primary xl:py-16 py-32 px-8">
      <motion.div
        variants={textVariant()}
        className="w-full max-w-6xl flex flex-col items-center"
      >
        <p className={`${styles.sectionSubText} text-gray-400`}>Work Experience</p>
        <h2 className={`${styles.sectionHeadText} text-white`}>
          <TextDecode text={`Where I've Worked`} />
        </h2>
        <div className="relative w-full mt-10 pb-64">
          <div className="hidden xl:block absolute top-2 left-[16.67%] right-[16.67%] h-px bg-gray-600" />
          <div className="grid xl:grid-cols-3 grid-cols-1 gap-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
