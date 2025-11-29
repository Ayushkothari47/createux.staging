import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import heroBanner_img from '../assets/bg.jpg';
import { Typewriter } from 'react-simple-typewriter';

function HeroSection() {
  const words = ['Design', 'Develop', 'Test'];

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-black bg-center bg-cover overflow-x-hidden"
      style={{
        backgroundImage: `url(${heroBanner_img})`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="text-center p-6 md:p-12 bg-black/50 rounded-lg max-w-4xl mx-4">
        <h1 className="text-4xl md:text-4xl font-semibold text-white mb-4 ">
          Hi, I'm Ayush Kothari
        </h1>

        <h2 className="text-md md:text-2xl text-white mb-6">
          <span>I can </span>
          <span className="text-[#ff4c4f] underline">
            <Typewriter
              words={words}
              loop={0}               // 0 = infinite loop
              cursor                // show blinking cursor
              cursorStyle="|"       // cursor character
              typeSpeed={150}       // typing speed
              deleteSpeed={80}      // deleting speed
              delaySpeed={1500}     // delay before deleting
            />
          </span>
        </h2>

        <div className="flex justify-center space-x-2 text-white text-1xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:scale-110 transition-transform duration-200 bg-gray-500/30 rounded-full p-4 hover:bg-[#ff4c4f]"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:scale-110 transition-transform duration-200 bg-gray-500/30 rounded-full p-4 hover:bg-[#ff4c4f]"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:scale-110 transition-transform duration-200 bg-gray-500/30 rounded-full p-4 hover:bg-[#ff4c4f]"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:scale-110 transition-transform duration-200 bg-gray-500/30 rounded-full p-4 hover:bg-[#ff4c4f]"
          >
            <FaGithub />
          </a>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;
