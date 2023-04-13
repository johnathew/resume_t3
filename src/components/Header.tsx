import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { IoIosSunny } from "react-icons/io";

type HeaderTypes = {
    darkMode: boolean,
    setDarkMode: Dispatch<SetStateAction<boolean>>
}


const Header = ({darkMode, setDarkMode}: HeaderTypes) => {

  return (
    <header className={`flex w-full justify-center ${darkMode ? "dark" : ""}`}>
      <div className="m-0 flex w-full items-center justify-between border-x-4 border-b-2 border-x-slate-200 border-b-slate-200 bg-slate-200 p-2 text-slate-800 md:w-3/4 md:text-lg">
        <Link href="/">
          <div className="flex justify-start space-x-2">
            <nav className="md:align-center rounded-lg border-2 bg-slate-400 p-2">
              Resume
            </nav>
            <nav className="rounded-lg p-2">Blog App</nav>
          </div>
        </Link>
        <div className="ml-2 flex h-10 w-auto space-x-2 rounded-lg p-3 text-2xl">
          <Link href="https://www.instagram.com/johnathew_k/">
            <AiOutlineInstagram className="rounded-lg hover:bg-amber-400" />
          </Link>
          <Link href="https://github.com/johnathew">
            <FiGithub className="rounded-lg hover:bg-amber-400" />
          </Link>
          <Link href="https://www.linkedin.com/in/john-kornegay-00541411b/">
            <CiLinkedin className="rounded-lg hover:bg-amber-400" />
          </Link>
          {darkMode && (
            <IoIosSunny
              onClick={() => setDarkMode((prev) => !prev)}
              className="rounded-lg hover:cursor-pointer hover:bg-amber-400"
            />
          )}
          {!darkMode && (
            <BsSun
              onClick={() => setDarkMode((prev) => !prev)}
              className="rounded-lg hover:cursor-pointer hover:bg-amber-400"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
