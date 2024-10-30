import React from 'react';
import AboutAvatar from '../assets/About/AboutIMG.png';
import MyCV from '../assets/About/CV.pdf';
import { CardEffectMain } from '../components/Main/CardEffectMain';

const About = () => {
  const handlePreviewCV = () => {
    window.open(MyCV, '_blank');
  };

  return (
    <div className="flex flex-col sm:flex-row w-full gap-8 p-4 sm:p-10 mx-auto bg-[#101010]">
      {/* Section 01 */}
      <div className="flex flex-wrap justify-center flex-1">
        <img
          src={AboutAvatar}
          className="border border-[#2ADCFC] bg-cover rounded-[50px] w-auto h-auto object-cover"
          alt="About"
        />
      </div>
      {/* Section 02 */}
      <div className="relative flex-1 p-4 sm:p-8 rounded-[50px] overflow-hidden border border-[#666666] flex-wrap">
        <CardEffectMain className="absolute inset-0 z-0 w-full h-full" />

        <div className="relative z-10 p-4">
          <h2 className="font-sans text-3xl font-bold text-[#2ADCFC]">ABOUT ME</h2>
          <h1 className="font-sans text-4xl font-bold text-[#ffffff] my-8">
            World leading Creative Front-End Developer
          </h1>
          <p className="font-sans text-xl font-normal text-white">
            Hello there! My name is Ashan Kavindu. I am a web designer &amp; developer, and I'm very passionate
            and dedicated to work. With 04 years experience as a professional graphic designer, I use a
            dictionary of over 200 Latin words, combined.
          </p>
          <p className="mt-4 font-sans text-xl font-normal text-white">
            Hello there! My name is Ashan Kavindu. I am a web designer &amp; developer, and I'm very passionate
            and dedicated to work.
          </p>

          <button 
            onClick={handlePreviewCV} 
            className="py-4 px-8 rounded-[6px] bg-[#26a8be] text-[#ffffff] mt-4 uppercase">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
