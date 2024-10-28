import React from 'react';
import CSharp from '../assets/Skills/C_ 1.png';
import CSS from '../assets/Skills/CSS 1.png';
import HTML1 from '../assets/Skills/HTML 1.png';
import Java from '../assets/Skills/Java 1.png';
import JS from '../assets/Skills/JS 1.png';
import PS from '../assets/Skills/PS 1.png';
import ReactIcon from '../assets/Skills/React 1.png';
import Tailwind from '../assets/Skills/Tailwind 1.png';

const Skills = () => {
  const marqueeAnimation = {
    animation: 'marquee 10s linear infinite',
  };

  const containerStyle = {
    overflow: 'hidden',
    width: '100%',
    position: 'relative',
  };

  const marqueeStyle = {
    display: 'flex',
    whiteSpace: 'nowrap',
    ...marqueeAnimation,
  };

  const imageStyle = {
    width: 'auto',
    height: '80px',
    marginRight: '20px', 
  };

  return (
    <div className='flex flex-col md:flex-row  py-10 bg-[#2ADCFC]'>
      

      <div className='flex flex-wrap justify-end flex-grow gap-4 '>
        <div style={containerStyle}>
          <div style={marqueeStyle}>
            {[CSharp, CSS, HTML1, Java, JS, PS, ReactIcon, Tailwind].map((img, index) => (
              <img key={index} src={img} style={imageStyle} alt={`Skill ${index}`} />
            ))}
            {[CSharp, CSS, HTML1, Java, JS, PS, ReactIcon, Tailwind].map((img, index) => (
              <img key={`repeat-${index}`} src={img} style={imageStyle} alt={`Skill ${index}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const keyframes = `
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);

export default Skills;
