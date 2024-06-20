import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { SectionWrapper } from '../hoc';
import { fadeIn, slideIn } from '../utils/motion';
import TextDecoder from '../utils/reveal';
import { WaveBallCanvas } from './canvas';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: import.meta.env.VITE_APP_EMAILJS_RECEIVER_NAME,
          from_email: form.email,
          to_email: import.meta.env.VITE_APP_EMAILJS_RECEIVER_EMAIL,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div
      className={`bg-primary overflow-hidden h-full xl:py-32 py-0`}
    >
      <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse xl:ps-[10%] ps-[60px] gap-10 md:max-h-3/4 max-h-[800px]`}>
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl shadow-card xl:h-auto flex flex-col gap-8 justify-center'
      >
        <p className={styles.sectionSubText}>Contact</p>
        <h3 className={styles.sectionHeadText}>
          <TextDecoder text={`Let's Connect!`} />
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <TextDecoder text='Your name' />
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <TextDecoder text='Your email' />
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <TextDecoder text='Your message' />
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Type your message here...'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] md:w-[550px] w-[350px]'
      >
        <WaveBallCanvas />
      </motion.div>
      </div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact");