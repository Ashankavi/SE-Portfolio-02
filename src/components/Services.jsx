import { ServiceEffect } from "../components/ui/ServiceEffect";
import Web from '../assets/Services/Web.png';
import Graphic from '../assets/Services/Graphic.png';
import UIUX from '../assets/Services/UIUX.png';
import Background from '../assets/Services/Background.png';

export function Services() {
  return (
    <div
      className="justify-center flex-grow w-full h-full p-10 bg-center bg-no-repeat bg-cover rounded-[50px]" style={{ backgroundImage: `url(${Background})` }}>
      <div className="flex flex-col items-center justify-center text-center ">
        <h1 className="font-sans text-3xl md:text-4xl font-bold text-[#2ADCFC] uppercase">
          WHAT WE DO
        </h1>
        <h1 className="font-sans text-4xl md:text-5xl font-bold text-[#ffffff] uppercase">
          Services and Solutions
        </h1>
      </div>

      <div className="flex flex-col items-center gap-4 mt-8 md:flex-row">
        <ServiceEffect className="flex flex-col items-start justify-end flex-grow px-6 py-8 border-[3px] rounded-[50px] border-[#2ADCFC]">
          <img
            src={Graphic}
            className="bg-cover rounded-[50px] w-20 h-auto object-cover my-8"
          />
          <p className="font-sans text-2xl font-bold text-white uppercase">
            Ui ux Designing
          </p>
          <p className="mt-4 text-base font-normal text-neutral-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.that he
            didn&apos;t exist.
          </p>
        </ServiceEffect>
        <ServiceEffect className="flex flex-col items-start justify-end flex-grow px-6 py-8 border-[3px] rounded-[50px] border-[#2ADCFC]">
          <img
            src={Web}
            className="bg-cover rounded-[50px] w-20 h-auto object-cover my-8"
          />
          <p className="font-sans text-2xl font-bold text-white uppercase">
            WEB DEVELOPMENT
          </p>
          <p className="mt-4 text-base font-normal text-neutral-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.that he
            didn&apos;t exist.
          </p>
        </ServiceEffect>
        <ServiceEffect className="flex flex-col items-start justify-end flex-grow px-6 py-8 border-[3px] rounded-[50px] border-[#2ADCFC]">
          <img
            src={UIUX}
            className="bg-cover rounded-[50px] w-20 h-auto object-cover my-8"
          />
          <p className="font-sans text-2xl font-bold text-white uppercase">
            GRAPHIC DESIGN
          </p>
          <p className="mt-4 text-base font-normal text-neutral-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.that he
            didn&apos;t exist.
          </p>
        </ServiceEffect>
      </div>
    </div>
  );
}
