import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Desktop from '../assets/Project/Desktop.jpg';
import Mobile from '../assets/Project/Mobile.jpg';

const Project = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
    const certificates = [
      { id: 1, title: 'Sample Project 1', date: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut', image: Desktop },
      { id: 2, title: 'Sample Project 2', date: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut', image: Mobile },
      { id: 3, title: 'Sample Project 3', date: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut', image: Desktop },
      { id: 4, title: 'Sample Project 4', date: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut', image: Mobile },
      { id: 5, title: 'Sample Project 5', date: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut', image: Desktop },
      { id: 6, title: 'Sample Project 6', date: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut', image: Mobile },


      // Add more objects with unique images as needed
    ];
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    };
  
    const getVisibleCertificates = () => {
      return isMobile
        ? [certificates[currentIndex]]
        : certificates.slice(currentIndex, currentIndex + 4).concat(
            certificates.slice(0, Math.max(0, 4 - (certificates.length - currentIndex)))
          );
    };
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <div className='relative flex flex-col h-auto p-4 bg-black rounded-b-[50px]'>
  
        <div className="flex flex-col items-center justify-center my-8 ">
          <h1 className="font-sans text-4xl font-bold text-[#2ADCFC] uppercase">WORKING PROCESS</h1>
          <h1 className="font-sans text-5xl font-bold text-[#ffffff] uppercase">Latest Working Project</h1>
        </div>
  
        <div className='flex flex-row items-center justify-center gap-8 px-4'>
          {getVisibleCertificates().map((cert) => (
            <div key={cert.id} className='flex flex-grow flex-col h-auto bg-[#0B0D0E] border rounded-[30px] justify-center border-[#2ADCFC]'>
              <img className='p-4 rounded-2xl' src={cert.image} alt={cert.title} />
              <h1 className='text-1xl text-center md:text-2xl font-bold text-[#2ADCFC] uppercase'>{cert.title}</h1>
              <h1 className='text-l text-center md:text-m font-sans font-normal text-[#ffffff] px-4 mb-4'>{cert.date}</h1>
            </div>
          ))}
        </div>
        <div className='flex flex-row items-end justify-end gap-4 my-8'>
          <button onClick={handlePrev} className='w-10 h-10 rounded-full border border-[#2ADCFC] text-[#2ADCFC] flex justify-center items-center'>
            <FaChevronLeft />
          </button>
          <button onClick={handleNext} className='w-10 h-10 rounded-full border border-[#2ADCFC] text-[#2ADCFC] flex justify-center items-center'>
            <FaChevronRight />
          </button>
        </div>
      </div>
    );
  };
  
  export default Project;