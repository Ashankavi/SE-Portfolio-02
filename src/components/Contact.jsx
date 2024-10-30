import React from 'react';
import SocialMedia from './SocialMedia';
import Telephone from '../assets/Contact/Telephone.png';
import Email from '../assets/Contact/Email.png';
import Location from '../assets/Contact/Location.png';

const Contact = () => {
  return (
    <div className='flex flex-col'>
      {/* section 01 */}
      <div className='flex flex-col p-10 md:flex-row justify-evenly'>
        <h1 className='font-sans text-4xl md:text-4xl font-bold text-[#ffffff] uppercase mr-8 mb-4'>
          Let’s Get Connect With Us
        </h1>
        <p className='font-sans text-xl md:text-l text-[#ffffff]'>
          Hello there! My name is Ashan Kavindu. I am a web designer & developer, and I'm very passionate and and I'm very passionate and and I'm very passionate and and I'm very passionate and and I'm very passionate and 
        </p>
      </div>

      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col flex-grow w-full md:max-w-[500px] gap-8 px-10'>
          <div className='flex items-center w-full h-auto p-8 bg-black rounded-3xl'>
            <img src={Telephone} alt="Phone Icon" className="w-[60px] h-[60px] mr-6" />
            <h1 className='font-sans md:text-[28px] text-xl font-bold text-[#ffffff] uppercase'>(704) 555-0127</h1>
          </div>

          <div className='flex items-center w-full h-auto p-8 bg-black rounded-3xl'>
            <img src={Email} alt="Email Icon" className="w-[60px] h-[60px] mr-6" />
            <h1 className='font-sans md:text-[28px] text-xl font-bold text-[#ffffff] uppercase'>hello@gmail.com</h1>
          </div>

          <div className='flex items-center w-full h-auto p-8 bg-black rounded-3xl'>
            <img src={Location} alt="Location Icon" className="w-[60px] h-[60px] mr-6" />
            <h1 className='font-sans md:text-[28px] text-xl font-bold text-[#ffffff] uppercase'>No 500 Colombo Road, Dehiwala</h1>
          </div>
          <h1 className='font-sans text-3xl font-bold text-[#2ADCFC] uppercase'>Connect Me</h1>
          <SocialMedia />
        </div>

        <div className='flex flex-col md:flex-grow h-auto justify-center items-start w-full max-w-[1900px] px-10 mt-10 md:mt-0 mb-10'>
          <form className="w-full space-y-4">
            <div>
              <label className="block text-xl font-medium text-white">Name<span className='text-red-500'>*</span></label>
              <input
                type="text"
                name="name"
                className="mt-2 w-full p-4 border-2 rounded-2xl border-[#2ADCFC] text-white text-l bg-[#000000] outline-none hover:ring-1 hover:ring-[#79e4a9]"
                placeholder="Enter name"
              />
            </div>
            <div className='flex flex-col gap-4 md:flex-row'>
              <div className="flex-grow">
                <label className="block text-xl font-medium text-white">Email Address<span className='text-red-500'>*</span></label>
                <input
                  type="email"
                  name="email"
                  className="mt-2 w-full p-4 border-2 border-[#2ADCFC] rounded-2xl text-white text-l bg-[#000000] outline-none hover:ring-1 hover:ring-[#79e4a9]"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="flex-grow">
                <label className="block text-xl font-medium text-white">Phone Number<span className='text-red-500'>*</span></label>
                <input
                  type="text"
                  name="phone"
                  className="mt-2 w-full p-4 border-2 border-[#2ADCFC] rounded-2xl text-white text-l bg-[#000000] outline-none hover:ring-1 hover:ring-[#79e4a9]"
                  placeholder="Ex. 077 1234 031"
                />
              </div>
            </div>

            <div>
              <label className="block text-xl font-medium text-white">Subject<span className='text-red-500'>*</span></label>
              <input
                type="text"
                name="subject"
                className="mt-2 w-full p-4 border-2 border-[#2ADCFC] rounded-2xl text-white text-l bg-[#000000] outline-none hover:ring-1 hover:ring-[#79e4a9]"
                placeholder="Ex. Support"
              />
            </div>
            <div>
              <label className="block text-xl font-medium text-white">Message<span className='text-red-500'>*</span></label>
              <textarea
                name="message"
                className="mt-2 w-full h-[200px] p-4 border-2 border-[#2ADCFC] rounded-2xl text-white text-l bg-[#000000] outline-none hover:ring-1 hover:ring-[#79e4a9]"
                placeholder="Your message here"
              />
            </div>
            <button className="py-4 px-8 rounded-[6px] bg-[#2ADCFC] hover:bg-[#54d2e9] text-[#ffffff] mt-4 uppercase">Download CV</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
