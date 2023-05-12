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
      <Carousel.Item
        className="flex h-full w-full flex-col items-center justify-center overflow-scroll text-white lg:mx-auto md:mt-10 md:h-screen md:flex-col md:items-start"
      >
        <div className="flex flex-col items-center md:flex-row md:items-center md:w-3/4 md:mx-auto">
          <Image
            src={gradPic}
            alt="about me pic"
            className="h-3/4 w-1/2 rounded-full drop-shadow-sm md:w-72 md:h-auto"
          />
          <div className="flex w-full flex-col justify-start px-5 pt-4 align-middle dark:text-white md:w-3/4">
            <div className="flex w-full items-center justify-start pb-4">
              <div className="flex flex-col break-keep">
                <h3 className="flex flex-col items-start justify-start md:flex-row">
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
              <h3 className="my-auto pl-1 text-base tracking-wide font-light">
                McAllen, TX
              </h3>
            </div>
            <div className="flex items-center pl-2 text-lg">
              <HiOutlineMail className="text-[#71fead]" />
              <h3 className="pl-1 pt-1 text-base tracking-wide font-light">
                Jakornegay01@gmail.com
              </h3>
            </div>
          </div>
        </div>
        <div className="md:-mt-auto flex md:flex-col h-1/2 md:w-3/4 md:mx-auto">
        <h1 className="text-2xl p-1">About Me</h1>
          <div className="flex w-full flex-col justify-center md:items-center">
    
            <h2 className="md:text-base font-base m-2 border-y-2 border-y-[#437e60] p-4 font-light dark:border-y-amber-500 ">
              <span className="font-serif font-bold">
                A 2016 graduate from Texas A&M University
              </span>{" "}
              who finally figured out how to make his resume website have a
              responsive design and suddenly thinks he deserves a job. Graduated
              with a science degree in Molecular and Cell Biology and naturally
              decided to become a programmer.
            </h2>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className={styles.itemP}>
        <Image src={gradPic} alt="slides" />
        <Carousel.Caption className={styles.caption}>
          <h3>About Me</h3>
          <p>Hello my name is John</p>
          <button className="btn btn-danger">Visit Docs</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
