import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { IoIosSunny } from "react-icons/io";

type HeaderTypes = {
  darkMode: boolean;
  pageView: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  setPageView: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ darkMode, setDarkMode, setPageView, pageView }: HeaderTypes) => {
  return (
    <header className={`flex w-full justify-center ${darkMode ? "dark" : ""}`}>
      <div className="m-0 h-auto flex w-full items-center justify-between dark:text-slate-200 py-2 md:px-10 px-5 text-sm md:text-lg">
          <div className="flex justify-start space-x-2">
            <button className={`md:align-center rounded-lg p-2 ${pageView && "border-2 bg-orange-400 text-black"} drop-shadow-md `} onClick={() => setPageView((prev) => !prev)} disabled={pageView}>
              Resume
            </button>
            <button className={`md:align-center rounded-lg p-2 ${!pageView && "border-2 bg-orange-400 text-black"} drop-shadow-md `} onClick={() => setPageView((prev) => !prev)} disabled={!pageView}>Blog</button>
          </div>
        <div className="ml-2 flex h-10 w-auto space-x-2 rounded-lg p-3 text-2xl">
          <Link href="https://www.instagram.com/johnathew_k/">
            <AiOutlineInstagram className="rounded-lg hover:bg-orange-400 transform duration-500" />
          </Link>
          <Link href="https://github.com/johnathew">
            <FiGithub className="rounded-lg hover:bg-orange-400 transform duration-500" />
          </Link>
          <Link href="https://www.linkedin.com/in/john-kornegay-00541411b/">
            <CiLinkedin className="rounded-lg hover:bg-orange-400 transform duration-500" />
          </Link>
          {darkMode && (
            <IoIosSunny
              onClick={() => setDarkMode((prev) => !prev)}
              className="rounded-lg hover:cursor-pointer hover:bg-orange-400 transform duration-500"
            />
          )}
          {!darkMode && (
            <BsSun
              onClick={() => setDarkMode((prev) => !prev)}
              className="rounded-lg hover:cursor-pointer hover:bg-orange-400 transform duration-500"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
