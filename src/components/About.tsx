import React from "react";
import Image from "next/image";
import gradPic from "public/gradPic.jpeg";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";

const About = () => {
  return (
    <div className="text-white">
      <h1 className="flex justify-center bg-gradient-to-r from-[#71fead] to-[#437e60] bg-clip-text pt-20 font-bold text-transparent md:-mb-10">
        About
      </h1>
      <section className="flex text-sm md:pt-10 h-full w-full flex-col items-center md:mx-auto md:h-1/2 md:w-2/3 md:flex-row md:px-10 lg:flex-row">
        <Image
          src={gradPic}
          alt="about me pic"
          className="-mb-2 h-3/4 w-1/2 rounded-full border-2 border-double border-[#71fead] drop-shadow-sm md:mb-0 md:mr-2 md:h-auto md:w-60 md:p-[2px]"
        />
        <div className="flex h-auto w-full flex-col justify-start px-4 pt-4 align-middle dark:text-white  md:h-auto md:w-full">
          <div className="flex w-full items-center justify-start pb-4">
            <div className="mt-2 flex flex-col md:mt-0">
              <h3 className="items-start justify-center sm:flex-row">
                Hello, my name is&nbsp;
                <span className="bg-gradient-to-r from-[#71fead] to-[#437e60] bg-clip-text font-bold text-transparent">
                  John Andrew Kornegay
                </span>
              </h3>
              <h2 className="font-sans text-base font-normal tracking-wide">
                Frontend Developer
              </h2>
            </div>
          </div>
          <p className="text-md font-normal tracking-wide">
            A self-taught and highly motivated individual seeking an internship
            opportunity to gain experience as a front-end developer.
          </p>
          <div className="bg-gradient-to-r from-[#71fead] to-[#437e60] p-0.5 dark:border-slate-200"></div>
          <div className="flex items-center pl-1 pt-4 font-thin">
            <CiLocationOn className="text-2xl text-[#71fead]" />
            <h3 className="my-auto pl-1 text-sm md:text-base font-light tracking-wide">
              McAllen, TX
            </h3>
          </div>
          <div className="flex items-center pl-2 text-lg">
            <HiOutlineMail className="text-[#71fead]" />
            <h3 className="pl-1 md:text-base pt-1 text-sm font-light tracking-wide">
              Jakornegay01@gmail.com
            </h3>
          </div>
        </div>
      </section>
      <div className="flex w-full flex-col pb-4 mt-2 md:mx-auto md:w-2/3 md:items-center">
        <div className="flex text-sm w-full flex-col justify-center px-2 md:items-start">
          <p className="border-y-4 border-y-[#437e60] p-3 text-base font-light leading-relaxed dark:border-y-amber-500 md:text-lg">
            <span className="font-serif font-bold">
              A 2016 graduate from Texas A&M University
            </span>{" "}
            who finally figured out how to make his resume website have a
            responsive design and suddenly thinks he deserves a job. Graduated
            with a science degree in Molecular and Cell Biology and naturally
            decided to become a programmer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
