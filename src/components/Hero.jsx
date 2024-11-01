import React, { useState, useEffect } from 'react';
import BackgroundAvatar from '../assets/Hero/Avatar1.png';
import { BackgroundEffect } from './ui/BackgroundEffect';

const Hero = () => {

  const [happyClients, setHappyClients] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [yearsExperience, setYearsExperience] = useState(0);

  useEffect(() => {
    const targetHappyClients = 255;
    const targetProjectsCompleted = 255;
    const targetYearsExperience = 4;

    const incrementClients = setInterval(() => {
      setHappyClients((prev) => {
        if (prev >= targetHappyClients) {
          clearInterval(incrementClients);
          return targetHappyClients;
        }
        return prev + 5;
      });
    }, 30);

    const incrementProjects = setInterval(() => {
      setProjectsCompleted((prev) => {
        if (prev >= targetProjectsCompleted) {
          clearInterval(incrementProjects);
          return targetProjectsCompleted;
        }
        return prev + 5;
      });
    }, 30);

    const incrementExperience = setInterval(() => {
      setYearsExperience((prev) => {
        if (prev >= targetYearsExperience) {
          clearInterval(incrementExperience);
          return targetYearsExperience;
        }
        return prev + 1;
      });
    }, 150);

    return () => {
      clearInterval(incrementClients);
      clearInterval(incrementProjects);
      clearInterval(incrementExperience);
    };
  }, []);

  return (
    <div className="relative flex flex-col w-full h-screen gap-4 bg-black md:flex-row md:gap-8">
      <div className="absolute inset-0 z-0 w-full h-full">
        <BackgroundEffect />
      </div>

      <div
        className="absolute inset-0 z-10 flex items-center justify-center w-full h-full bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${BackgroundAvatar})` }}
      >
      </div>

      <div className="relative z-20 flex flex-col items-center w-full h-full md:flex-row">
        <div className="relative flex-grow h-auto p-4 my-5 md:p-10 md:my-10 card rounded-box bg-opacity-80">
          <h1 className="text-7xl sm:text-5xl md:text-8xl lg:text-9xl text-[#2ADCFC] font-black font-sans uppercase text-center md:text-left">Ashan <br /> Kavindu</h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#ffffff] font-black font-sans my-4 md:my-8 text-center md:text-left">Front-End Developer</h2>
          <div className="flex justify-center gap-2 md:gap-4 md:justify-start">
            <button className="py-2 px-4 md:py-4 md:px-8 rounded-[6px] bg-[#26a8be] text-[#ffffff]" aria-label="Say Hello">SAY HELLO</button>
            <button className="py-2 px-4 md:py-4 md:px-8 rounded-[6px] border border-[#2ADCFC] text-[#ffffff]" aria-label="My Works">MY WORKS</button>
          </div>
        </div>

        {/* Stats section positioned absolutely on mobile, relative on larger screens */}
        <div className="absolute bottom-0 right-0 flex flex-col items-end p-4 sm:relative md:my-10 md:p-10 card rounded-box bg-opacity-80">

          <div className="flex flex-row bg-black rounded-[6px] border border-[#2ADCFC] p-2 md:p-4">
            <h1 className="text-4xl md:text-6xl lg:text-8xl text-[#2ADCFC] font-bold">+{happyClients}</h1>
            <div className="flex flex-col justify-center ml-2 md:ml-4">
              <p className="text-sm md:text-base lg:text-xl font-bold text-[#868686]">Satisfied</p>
              <p className="text-lg md:text-2xl lg:text-3xl text-[#ffffff]">Happy Clients</p>
            </div>
          </div>

          <div className="flex flex-row bg-black my-4 rounded-[6px] border border-[#2ADCFC] p-2 md:p-4">
            <h1 className="text-4xl md:text-6xl lg:text-8xl text-[#2ADCFC] font-bold">+{projectsCompleted}</h1>
            <div className="flex flex-col justify-center ml-2 md:ml-4">
              <p className="text-sm md:text-base lg:text-xl font-bold text-[#868686]">Projects</p>
              <p className="text-lg md:text-2xl lg:text-3xl text-[#ffffff]">Completed</p>
            </div>
          </div>

          <div className="flex flex-row bg-black rounded-[6px] border border-[#2ADCFC] p-2 md:p-4">
            <h1 className="text-4xl md:text-6xl lg:text-8xl text-[#2ADCFC] font-bold">+{yearsExperience}</h1>
            <div className="flex flex-col justify-center ml-2 md:ml-4">
              <p className="text-sm md:text-base lg:text-xl font-bold text-[#868686]">Years of</p>
              <p className="text-lg md:text-2xl lg:text-3xl text-[#ffffff]">Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
