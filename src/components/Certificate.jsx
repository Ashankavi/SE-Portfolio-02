import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import CertificateImage from '../assets/Certificate/Certificate.jpg';

const Certificate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const certificates = [
    { id: 1, title: 'Sample Certificate 1', date: '15 July 2024' },
    { id: 2, title: 'Sample Certificate 2', date: '15 July 2024' },
    { id: 3, title: 'Sample Certificate 3', date: '15 July 2024' },
    { id: 4, title: 'Sample Certificate 4', date: '16 August 2024' },
    { id: 5, title: 'Sample Certificate 5', date: '20 September 2024' },
    { id: 6, title: 'Sample Certificate 6', date: '20 September 2024' },
    { id: 7, title: 'Sample Certificate 7', date: '20 September 2024' },
    { id: 8, title: 'Sample Certificate 8', date: '20 September 2024' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      isMobile
        ? (prevIndex - 1 + certificates.length) % certificates.length
        : Math.max(prevIndex - 1, 0)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      isMobile
        ? (prevIndex + 1) % certificates.length
        : Math.min(prevIndex + 4, certificates.length - 4)
    );
  };

  const getVisibleCertificates = () => {
    return isMobile
      ? [certificates[currentIndex]]
      : certificates.slice(currentIndex, currentIndex + 4);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='relative flex flex-col h-auto p-4 mt-8 bg-black rounded-t-[50px]'>

      <div className="flex flex-col items-center justify-center my-8 text-center ">
        <h1 className="font-sans text-3xl md:text-4xl font-bold text-[#2ADCFC] uppercase">Achievements</h1>
        <h1 className="font-sans text-4xl md:text-5xl font-bold text-[#ffffff] uppercase">My Certificates</h1>
      </div>

      <div className='flex flex-row items-center justify-center gap-8 px-4'>
        {getVisibleCertificates().map((cert, index) => (
          <div key={index} className='flex flex-grow flex-col h-auto bg-[#0B0D0E] border rounded-[30px] justify-center border-[#2ADCFC]'>
            <img className='p-4 rounded-[30px]' src={CertificateImage} alt={cert.title} />
            <h1 className='text-1xl text-center md:text-2xl font-bold text-[#2ADCFC] uppercase'>{cert.title}</h1>
            <h1 className='text-xl text-center md:text-l font-bold text-[#ffffff] uppercase mb-4'>{cert.date}</h1>
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

export default Certificate;
