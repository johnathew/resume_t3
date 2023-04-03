import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin, CiLocationOn } from "react-icons/ci";
import { SlSocialSpotify } from "react-icons/sl";
import { IoIosSunny } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";
import gradPic from "public/gradPic.jpeg"
import { api } from "~/utils/api";

const Home: NextPage = () => {
  // never want user to connect directly to a DB
  const { data } = api.comments.getAll.useQuery();
  const user = useUser();

  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <header className="flex w-full justify-center">
        <div className="m-0 flex w-full items-center justify-between border-x-4 border-b-2 border-x-slate-200 border-b-slate-200 bg-slate-200 p-2 text-slate-800 md:w-3/4 md:text-lg">
          <Link href="/">
            <div className="flex justify-start space-x-2">
              <nav className="md:align-center rounded-lg bg-gray-500 p-2">
                Resume
              </nav>
              <nav className="rounded-lg p-2">Blog App</nav>
            </div>
          </Link>
          <div className="ml-2 flex h-10 w-auto space-x-2 p-2 text-2xl">
            <AiOutlineInstagram />
            <FiGithub />
            <CiLinkedin />
            <SlSocialSpotify />
            <MdOutlineDarkMode />
            <IoIosSunny />
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center h-screen  text-zinc-50 w-full">
      <div className="border-b-2 border-b-slate-200 border-x-4 border-x-slate-200 py-6 px-5 flex flex-col w-full md:w-3/4">
          <div className=" w-full items-center justify-start border-white pb-2 px-1 flex">
            <Image
              src={gradPic}
              alt="bio degree lol"
              priority={true}
              className="h-12 rounded-full w-auto"
            />
            <div className="pl-3 flex flex-col items-left">
              <h1 className="font-medium text-2xl hover:text-yellow-400 justify-center">
                John A. Kornegay
              </h1>
              <h2 className="text-sm font-light">Frontend Developer</h2>
              </div>
              
          </div>
          <div className="border-b-2 py-2 w-full justify-end">
              <p>
              A self-taught and highly motivated individual seeking to gain
              experience as a front-end developer through an internship
              opportunity.
            </p>
            </div>
          <div className="flex p-1 w-3/4 items-end pt-2">
            <CiLocationOn className="text-2xl text-yellow-200" />
            <h2 className="text-md font-normal pl-0.5 tracking-wide">
              {" "}
              McAllen, TX
            </h2>
          </div>
          <div className="flex pl-2 w-3/4 items-center">
            <HiOutlineMail className="text-lg text-yellow-200" />
            <h2 className="text-md font-light pl-1 tracking-wide">
              Jakornegay01@gmail.com
            </h2>
          </div>
        </div>
        <section className="border-b-2 border-b-slate-200 border-x-4 border-x-slate-50 flex flex-col justify-between  w-full px-5 py-6 md:w-3/4">
          <div className="justify-center py-2">
            <h2 className="font-bold text-2xl underline">Experience</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, suscipit.</p>
            <h2 className="font-bold text-2xl underline">Languages</h2>
            <ul>
              <li>Javascript</li>
              <li>React JS</li>
            </ul>
            <h2 className="font-bold text-2xl underline">Projects</h2>
            <ul>
              <li>Calculator</li>
              <li>Memory Game</li>
              <li>Blog App</li>
            </ul>
            <h2 className="font-bold text-2xl underline">Skills</h2>
            <ul>
              <li>Adobe Photoshop</li>
            </ul>
          </div>
        </section>
        {!user.isSignedIn && <SignInButton />}
        {user.isSignedIn && <SignOutButton />}
        <div>
          {data?.map((comment) => (
            <div key={comment.authorId}>{comment.content}</div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
