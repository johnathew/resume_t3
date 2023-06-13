import { ReactHTMLElement, useState } from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import gradPic from "public/gradPic.jpeg";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import Header from "~/components/Header";
import ProjectCard from "~/components/ProjectCard";

export default function BootstrapCarousel() {
  const [index, setIndex] = useState(0);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [pageView, setPageView] = useState<boolean>(true);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const navLinks = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    switch (target.id) {
      case "About":
        setIndex(0);
        break;
      case "Job History":
        setIndex(1);
        break;
      case "Projects":
        setIndex(2);
        break;
      default:
        setIndex(1);
    }
  };

  return (
    <>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setPageView={setPageView}
        pageView={pageView}
        handleClick={navLinks}
      />
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        className="h-full w-full bg-[#00213d]"
      >
        <Carousel.Item
          className="flex flex-col items-center justify-center text-[#ffffff] md:h-screen md:flex-row md:items-start lg:mx-auto"
          id="About"
        >
          <h1 className="flex justify-center bg-gradient-to-r from-[#71fead] to-[#437e60] bg-clip-text pt-20 font-bold text-transparent md:-mb-10">
            About
          </h1>
          <section className="flex h-full w-full flex-col items-center md:mx-auto md:h-1/2 md:w-2/3 md:flex-row md:px-10 lg:flex-row">
            <Image
              src={gradPic}
              alt="about me pic"
              className="-mb-2 h-3/4 w-1/2 rounded-full border-2 border-double border-[#71fead] drop-shadow-sm md:mb-0 md:mr-2 md:h-auto md:w-60 md:p-[2px]"
            />
            <div className="flex h-auto w-full flex-col justify-start px-4 pt-4 align-middle dark:text-white  md:h-auto md:w-full">
              <div className="flex w-full items-center justify-start pb-4">
                <div className="flex flex-col md:mt-0 mt-2">
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
                A self-taught and highly motivated individual seeking an
                internship opportunity to gain experience as a front-end
                developer.
              </p>
              <div className="bg-gradient-to-r from-[#71fead] to-[#437e60] p-0.5 dark:border-slate-200"></div>
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
          </section>
          <div className="flex w-full flex-col pb-4 md:mx-auto md:w-2/3 md:items-center">
            <div className="flex w-full flex-col justify-center px-2 md:items-start">
              <p className="border-y-4 border-y-[#437e60] p-3 text-base font-light leading-relaxed dark:border-y-amber-500 md:text-lg">
                <span className="font-serif font-bold">
                  A 2016 graduate from Texas A&M University
                </span>{" "}
                who finally figured out how to make his resume website have a
                responsive design and suddenly thinks he deserves a job.
                Graduated with a science degree in Molecular and Cell Biology
                and naturally decided to become a programmer.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item
          className="h-screen overflow-scroll md:h-screen"
          id="Job History"
        >
          <section className="relative flex flex-col items-center text-gray-600">
            <h1 className="-mb-8 bg-gradient-to-r from-[#71fead] to-[#437e60] bg-clip-text pt-20 font-bold text-transparent">
              Job History
            </h1>
            <div className="container flex flex-wrap">
              <div className="relative flex pb-2 pt-10 sm:items-center md:w-2/3">
                <div className="absolute -inset-2 mt-14 flex h-full w-6 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div className="relative z-10 mt-10 inline-flex h-2 w-2 flex-shrink-0 items-center justify-center rounded-full border-2 bg-[#71fead] text-sm font-medium text-white sm:mt-0"></div>
                <ul className="list-none text-sm text-[#71fead]">
                  <li className="-mx-8 w-screen">
                    <div className="flex h-1/2 w-full items-center md:mx-11">
                      <h3 className="mx-2 text-base font-bold">
                        Helpdesk Specialist
                      </h3>
                      <span className="pt-2">
                        <p className="text-slate-300">
                          &nbsp; July 2021 - Present
                        </p>
                      </span>
                    </div>
                    <p className="mx-2 -mt-3 flex justify-between font-light italic md:pl-11">
                      Maximus Federal - Remote; McAllen, TX
                    </p>
                    <ul className="-mx-4 w-full list-outside list-disc space-y-2 pb-2 text-slate-200 md:mx-7 md:w-3/4 md:space-y-0.5 md:text-base">
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
                        procedures and/or critical information received from
                        upper management.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="relative flex pb-2 sm:items-center md:w-2/3">
                <div className="absolute -inset-2 flex h-full w-6 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div className="title-font relative z-10 mt-10 inline-flex h-2 w-2 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-medium text-white sm:mt-0"></div>
                <ul className="list-none text-sm text-[#71fead]">
                  <li className="-mx-8 w-screen">
                    <div className="flex h-1/2 w-full items-center md:mx-11">
                      <h3 className="mx-2 text-base font-bold">
                        Teaching Assistant
                      </h3>
                      <span className="pt-2">
                        <p className="text-slate-300">
                          &nbsp; &nbsp;Spring 2021
                        </p>
                      </span>
                    </div>
                    <p className="mx-2 -mt-3 flex justify-between font-light italic md:pl-11">
                      University of Texas Rio Grande Valley - Remote; Edinburg,
                      TX
                    </p>
                    <ul className="-mx-4 w-full list-outside list-disc space-y-2 pb-2 text-slate-200 md:mx-7 md:w-3/4 md:space-y-0.5 md:text-base">
                      <li>
                        Assisted undergraduate Chemistry students with course
                        material, holding weekly Q&A sessions
                      </li>
                      <li>
                        Conducted online test reviews and held office hours for
                        personal tutoring
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="relative flex pb-2 sm:items-center md:w-2/3">
                <div className="absolute -inset-2 flex h-full w-6 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div className="title-font relative z-10 mt-10 inline-flex h-2 w-2 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-medium text-white sm:mt-0"></div>
                <ul className="list-none text-sm text-[#71fead]">
                  <li className="-mx-8 w-screen">
                    <div className="flex h-1/2 w-full items-center md:mx-11">
                      <h3 className="mx-2 text-base font-bold">
                        Survey Assistant
                      </h3>
                      &nbsp;
                      <span className="pt-2">
                        <p className="text-slate-300">
                          &nbsp;October 2021 - December 2021
                        </p>
                      </span>
                    </div>
                    <p className="mx-2 -mt-3 flex justify-between font-light italic md:pl-11">
                      SAMES, Inc. - McAllen, TX
                    </p>
                    <ul className="-mx-4 w-full list-outside list-disc space-y-2 pb-2 text-slate-200 md:mx-7 md:w-3/4 md:space-y-0.5 md:text-base">
                      <li>
                        Mapped out boundaries for businesses and residential
                        homes using satellite GPS technology
                      </li>
                      <li>
                        Provided measurements and layouts for construction
                        projects in both metropolitan and rural areas
                      </li>
                      <li>
                        Fullfilled boundary surveys requested by homeowners and
                        businesses for refinancing or design planning{" "}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="relative flex  sm:items-center md:w-2/3">
                <div className="absolute -inset-2 flex h-full w-6 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div className="title-font relative z-10 mt-10 inline-flex h-2 w-2 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-medium text-white sm:mt-0"></div>
                <ul className="list-none text-sm text-[#71fead]">
                  <li className="-mx-8 w-screen">
                    <div className="flex h-1/2 w-full items-center md:mx-11">
                      <h3 className="mx-2 text-base font-bold">
                        Pharmacy Technician
                      </h3>
                      &nbsp;
                      <span className="pt-2">
                        <p className="text-slate-300">
                          &nbsp;October 2016 - May 2020
                        </p>
                      </span>
                    </div>
                    <p className="mx-2 -mt-3 flex justify-between font-light italic md:pl-11">
                      Walgreens Pharmacy- Palmview, TX
                    </p>
                    <ul className="-mx-4 w-full list-outside list-disc space-y-2 pb-6 text-slate-200 md:mx-7 md:w-3/4 md:space-y-0.5 md:text-base">
                      <li>
                        Utilized propriety software to manage patient’s
                        prescriptions, resolve rejected insurance claims, and
                        scheduled refills for medication
                      </li>
                      <li>
                        Maintained strong attention to detail, making sure all
                        patients received the correct prescription(s);
                        professionally handled confidential patient information.
                      </li>
                      <li>
                        Resolved any hardware related issues that inhibited
                        normal pharmacy operations.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item
          className="h-screen overflow-scroll md:h-screen"
          id="Projects"
        >
          <section className="relative flex flex-col items-center text-gray-600">
            <h1 className="-mb-8 bg-gradient-to-r from-[#71fead] to-[#437e60] bg-clip-text pt-20 font-bold text-transparent">
              Projects
            </h1>
            <div className="mt-16 gap-4 p-10 w-full md:w-full md:h-auto md:mt-20 md:py-10 md:px-64 grid gap-y-10 grid-cols-2 grid-rows-2  rounded-lg place-items-center">
            <ProjectCard projectName="pokedex" languages="Typescript, React, Tailwind" description="pokedex made with Pokemon-API" />
            <ProjectCard projectName="GitHub Repo Search" languages="Typescript, React, Tailwind" description="Search GitHub repositories" />
            <ProjectCard projectName="Memory Game" languages="React, Javascript, Tailwind" description="Memory Card game" />
            <ProjectCard projectName="Resume" languages="Typescript, React, Tailwind, Next JS" description="Code used to create this site" />
            </div>
          </section>
        </Carousel.Item>
      </Carousel>
    </>
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

{
  /* <section className="container flex h-full w-full flex-col overflow-scroll pt-12 text-white md:flex md:h-screen md:p-10 md:pt-14">
            <h1 className="mr-2 bg-gradient-to-r from-[#71fead] to-[#437e60] bg-clip-text py-4 pl-4 font-bold text-transparent md:pl-16">
              Job History
            </h1>
            <div className="ml-2 h-3/4 border-l-[2px] pl-[9px] md:pl-2 sm:h-full drop-shadow-lg">
              <ul className="-mt-5 list-item list-disc text-sm text-[#71fead]">
                <li className="-mx-8 w-screen">
                  <div className="flex h-1/2 w-full items-center md:mx-11">
                    <h3 className="text-base font-bold">Helpdesk Specialist</h3>
                    <span className="pt-2">
                      <p className="text-slate-300">
                        &nbsp; July 2021 - Present
                      </p>
                    </span>
                  </div>
                  <p className="-mt-3 flex justify-between font-light italic md:mx-11">
                    Maximus Federal - Remote; McAllen, TX
                  </p>
                  <ul className="-mx-4 w-full list-outside list-disc space-y-2 pb-2 text-slate-200 md:mx-7 md:w-3/4 md:space-y-0.5 md:text-base">
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
                <li className="-mx-8 w-screen">
                  <div className="flex h-1/2 w-full items-center md:mx-11 ">
                    <h3 className="text-base font-bold">Teaching Assistant</h3>
                    &nbsp;
                    <span className="pt-0.5 align-middle">
                      <p className="pt-1.5 text-slate-300">&nbsp;Spring 2021</p>
                    </span>
                  </div>
                  <p className="-mt-4 flex justify-between pt-1 font-light italic md:mx-11">
                    University of Texas Rio Grande Valley - Remote; Edinburg, TX
                  </p>
                </li>
              </ul>
              <ul className="-mx-4 w-full list-outside list-disc space-y-2 pb-2 text-sm text-slate-200 md:mx-7 md:w-3/4 md:space-y-0.5 md:text-base">
                <li>
                  Assisted undergraduate Chemistry students with course
                  material, holding weekly Q&A sessions
                </li>
                <li>
                  Conducted online test reviews and held office hours for
                  personal tutoring
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
                  <p className="-mt-4 flex justify-between pt-1 font-light italic md:mx-11">
                    SAMES, Inc. - McAllen, TX
                  </p>
                </li>
              </ul>
              <ul className="-mx-4 w-full list-outside list-disc space-y-2 pb-2 text-sm text-slate-200 md:mx-7 md:w-3/4 md:space-y-0.5 md:text-base">
                <li>
                  Mapped out boundaries for businesses and residential homes
                  using GPS technology
                </li>
                <li>
                  Provided measurements and layouts for construction projects in
                  both metropolitan and rural areas
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
                  <p className="-mt-4 flex justify-between pt-1 font-light italic md:mx-11">
                    Walgreens Pharmacy- Palmview, TX
                  </p>
                </li>
              </ul>
              <ul className="-mx-4 w-full list-outside list-disc space-y-2 pb-4  text-sm text-slate-200 md:mx-7 md:w-3/4 md:space-y-0.5 md:text-base">
                <li>
                  Utilized propriety software to manage patient’s prescriptions,
                  resolve rejected insurance claims, and scheduled refills for
                  medication
                </li>
                <li>
                  Maintained strong attention to detail, making sure all
                  patients received the correct prescription(s); professionally
                  handled confidential patient information.
                </li>
                <li>
                  Resolved any hardware related issues that inhibited normal
                  pharmacy operations.
                </li>
              </ul>
            </div>
          </section> */
}
