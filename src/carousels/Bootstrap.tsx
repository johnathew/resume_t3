import { useState } from "react";
import Image from "next/image";
// import { items } from "public/Items.json";
import { Carousel, Fade } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Bootstrap.module.css";
import gradPic from "public/gradPic.jpeg";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
export default function BootstrapCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      <Carousel.Item className="flex flex-col items-center justify-center overflow-y-scroll text-white md:h-screen md:flex-col md:items-start lg:mx-auto">
        <div className="flex flex-col items-center md:mx-auto md:h-1/2 md:w-3/4 md:flex-row md:items-center md:pt-16 pt-20">
          <Image
            src={gradPic}
            alt="about me pic"
            className="h-3/4 w-1/2 rounded-full pt-1 drop-shadow-sm md:h-auto md:w-72"
          />
          <div className="flex w-full flex-col justify-start px-5 pt-4 align-middle dark:text-white md:w-3/4">
            <div className="flex w-full items-center justify-start pb-4">
              <div className="flex flex-col break-keep">
                <h3 className="flex flex-col items-start justify-start sm:flex-row md:flex">
                  Hello, my name is
                  <span className="bg-gradient-to-r from-[#71fead] to-[#437e60] bg-clip-text font-bold text-transparent md:pl-1">
                    John Andrew Kornegay
                  </span>
                </h3>
                <h2 className="font-sans text-base font-normal tracking-wide">
                  Frontend Developer
                </h2>
              </div>
            </div>
            <div className="border-b-4 border-[#71fead] pb-4 dark:border-slate-200">
              <p className="text-md font-normal tracking-wide">
                A self-taught and highly motivated individual seeking an
                internship opportunity to gain experience as as a front-end
                developer.
              </p>
            </div>
            <div className="flex items-center pl-1 pt-4 font-thin">
              <CiLocationOn className="text-2xl text-[#71fead]" />
              <h3 className="my-auto pl-1 text-base font-light tracking-wide">
                McAllen, TX
              </h3>
            </div>
            <div className="flex items-center pl-2 text-lg">
              <HiOutlineMail className="text-[#71fead]" />
              <h3 className="pl-1 pt-1 text-base font-light tracking-wide">
                Jakornegay01@gmail.com
              </h3>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col pb-4 md:mx-auto md:w-2/3 md:items-center">
          <div className="flex w-full flex-col justify-center md:items-center">
            <h1 className="-mb-4 p-4 text-2xl">About Me</h1>
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
      </Carousel.Item>
      <Carousel.Item className="h-full w-full">
        <section className="-m-1 flex h-full w-full flex-col overflow-scroll relative pt-12 md:pt-14 text-white md:flex md:h-screen md:p-10">
          <h1 className="mr-2 bg-gradient-to-r from-[#71fead] to-[#437e60] bg-clip-text py-4 pl-4  font-bold text-transparent md:pl-1">
            Job History
          </h1>
          <div className="top-0 ml-2 h-full border-l-2 pl-[8.5px]">
            <ul className="-mt-5 list-item list-disc text-sm text-[#71fead]">
              <li className="-mx-8 w-screen list-none">
                <div className="flex h-1/2 w-full items-center md:mx-11">
                  <h3 className="text-base font-bold">Helpdesk Specialist</h3>
                  <span className="pt-2">
                    <p className="text-slate-300">&nbsp; July 2021 - Present</p>
                  </span>
                </div>
                <p className="-mt-3 flex justify-between font-light italic md:mx-11">
                  Maximus Federal - Remote; McAllen, TX
                </p>
                <ul className="-mx-4 w-full list-outside list-disc pb-2 text-slate-300 md:mx-7 md:w-3/4 md:text-base">
                  <li>
                    Troubleshoot official CDC software related issues for
                    healthcare professionals and the public.
                  </li>
                  <li>
                    Process escalation service request tickets as needed to
                    ensure service levels are maintained.
                  </li>
                  <li>
                    Coordinate with official CDC representatives to receive
                    reports on system updates.
                  </li>
                  <li>
                    Collaborate with other Helpdesk Specialists to share new
                    procedures and/or critical information received from upper
                    management.
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="list-item list-disc text-sm text-[#71fead]">
              <li className="-mx-8 w-screen list-none ">
                <div className="flex h-1/2 w-full items-center md:mx-11 ">
                  <h3 className="text-base font-bold">
                    Teaching Assistant
                  </h3>
                  &nbsp;
                  <span className="pt-0.5 align-middle">
                    <p className="pt-1.5 text-slate-300">&nbsp;Spring 2021</p>
                  </span>
                </div>
                <p className="-mt-4 flex justify-between font-light italic md:mx-11">
                  University of Texas Rio Grande Valley - Remote; Edinburg, TX
                </p>
              </li>
            </ul>
            <ul className="-mx-4 w-full list-outside list-disc pb-2 text-sm text-slate-300 md:mx-7 md:w-3/4 md:text-base">
              <li>
                Assisted undergraduate Chemistry students with course material,
                holding weekly Q&A sessions
              </li>
              <li>
                Conducted online test reviews and held office hours for personal
                tutoring
              </li>
            </ul>
            <ul className="list-item list-disc text-sm text-[#71fead]">
              <li className="-mx-8 w-screen list-none">
                <div className="flex h-1/2 w-full items-center md:mx-11">
                  <h3 className="text-base font-bold">Survey Assistant</h3>
                  &nbsp;
                  <span className="pt-0.5 align-middle">
                    <p className="pt-1.5 text-slate-300">
                      &nbsp;October 2021 - December 2021
                    </p>
                  </span>
                </div>
                <p className="-mt-4 flex justify-between font-light italic md:mx-11">
                  SAMES, Inc. - McAllen, TX
                </p>
              </li>
            </ul>
            <ul className="-mx-4 w-full list-outside list-disc pb-2 text-sm text-slate-300 md:mx-7 md:w-3/4 md:text-base">
              <li>
                Mapped out boundaries for businesses and residential homes using
                GPS technology
              </li>
              <li>
                Provided measurements and layouts for construction projects in
                varying locations
              </li>
            </ul>
            <ul className="list-item list-disc text-sm text-[#71fead]">
              <li className="-mx-8 w-screen list-none">
                <div className="flex h-1/2 w-full items-center md:mx-11">
                  <h3 className="text-base font-bold">Pharmacy Technician</h3>
                  &nbsp;
                  <span className="pt-0.5 align-middle">
                    <p className="pt-1.5 text-slate-300">
                      &nbsp;October 2016 - May 2020
                    </p>
                  </span>
                </div>
                <p className="-mt-4 flex justify-between font-light italic md:mx-11">
                  Walgreens Pharmacy- Palmview, TX
                </p>
              </li>
            </ul>
            <ul className="-mx-4 w-full list-outside list-disc pb-2  text-sm text-slate-300 md:mx-7 md:w-3/4 md:text-base">
              <li>
                Utilized propriety software to manage patient’s prescriptions,
                resolve rejected insurance claims, and scheduled refills for
                medication
              </li>
              <li>
                Maintained strong attention to detail, making sure all patients
                received the correct prescription(s); professionally handled
                confidential patient information.
              </li>
              <li>
                Resolved any hardware related issues that inhibited normal
                pharmacy operations.
              </li>
            </ul>
          </div>
        </section>
      </Carousel.Item>
      <Carousel.Item className="h-screen w-full">
      <section className="-m-1 flex h-full w-full flex-col overflow-scroll relative pt-12 md:pt-14 text-white md:flex md:h-screen md:p-10">
      <h1 className="mr-2 bg-gradient-to-r from-[#71fead] to-[#437e60] bg-clip-text py-4 pl-4  font-bold text-transparent md:pl-1">
          Projects
          </h1>
      </section>
      </Carousel.Item>
    </Carousel>
  );
}

{
  /* <h1 className="text-lg font-bold underline">SAMES, Inc.</h1>
<h2 className="flex justify-between italic">
  Survey Assistant - McAllen, TX
  <span>
    <p>October 2021 - December 2021</p>
  </span>
</h2>
<ul className="w-full list-inside list-disc pb-2 md:w-3/4">
  <li>
    Mapped out boundaries for businesses and residential homes using
    GPS technology
  </li>
  <li>
    Provided measurements and layouts for construction projects in
    varying locations
  </li>
</ul>
<h1 className="text-lg font-bold underline">Pharmacy Technician</h1>
<h2 className="flex justify-between italic">
  Walgreens Pharmacy- Palmview, TX
  <span>
    <p>October 2016 - May 2020</p>
  </span>
</h2>
<ul className="w-full list-inside list-disc pb-2 md:w-3/4">
  <li>
    Utilized propriety software to manage patient’s prescriptions,
    resolve rejected insurance claims, and scheduled refills for
    medication
  </li>
  <li>
    Maintained strong attention to detail, making sure all patients
    received the correct prescription(s); professionally handled
    confidential patient information.
  </li>
  <li>
    Resolved any hardware related issues that inhibited normal
    pharmacy operations.
  </li>
</ul> */
}
