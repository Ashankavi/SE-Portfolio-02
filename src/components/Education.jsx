import React from "react";
import { EducationEffect } from "../components/ui/EducationEffect";
import School from '../assets/Education/School.jpg';
import Univercity from '../assets/Education/Campus.png';
import Company1 from '../assets/Education/Company1.jpeg';
import Office from '../assets/Education/Office.jpg';


const content = [
  {
    title: "2018 Present",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="flex items-center justify-center w-full h-full text-white">
          <img
            src={School}
            width={300}
            height={300}
            className="object-cover w-full h-full"
            alt="linear board demo" />
        </div>
    ),
  },
  {
    title: "2020 Present",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex items-center justify-center w-full h-full text-white">
        <img
          src={Univercity}
          width={300}
          height={300}
          className="object-cover w-full h-full"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "2022 Present",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex items-center justify-center w-full h-full text-white">
          <img
            src={Company1}
            width={300}
            height={300}
            className="object-cover w-full h-full"
            alt="linear board demo" />
        </div>
    ),
  },
  {
    title: "2024 Present",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex items-center justify-center w-full h-full text-white">
          <img
            src={Office}
            width={300}
            height={300}
            className="object-cover w-full h-full"
            alt="linear board demo" />
        </div>
    ),
  },
];
export function Education() {
  return (
    (<div className="p-10 ">
        
        <div className="flex flex-col mb-8 ">
            <h1 className="font-sans text-4xl font-bold text-[#2ADCFC] uppercase">MY Career</h1>
            <h1 className="font-sans text-5xl font-bold text-[#ffffff] uppercase">Experience and Education</h1>
        </div>

      <EducationEffect content={content} />
    </div>)
  );
}
