import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin, CiLocationOn } from "react-icons/ci";
import { IoIosSunny } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { BsSun } from "react-icons/bs";
import Image from "next/image";
import gradPic from "public/gradPic.jpeg";
import { api } from "~/utils/api";
import type { RouterOutputs } from "~/utils/api";
import { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { LoadingPage } from "~/components/loading";
dayjs.extend(relativeTime);

// TODO: add job history section
const AddCommentWizard = () => {
  const { user } = useUser();
  if (!user) return null;

  return (
    <div className="flex h-auto w-1/2 gap-1">
      <Image
        src={user.profileImageUrl}
        className="w-14 rounded-md border-2 border-black drop-shadow-lg"
        alt="Profile Image URL"
        width={56}
        height={56}
      />
      <input
        placeholder="Leave a comment"
        className="w-3/4 bg-transparent p-1 outline-none dark:text-white"
      />
    </div>
  );
};

type CommentWithUser = RouterOutputs["comments"]["getAll"][number];
const CommentsView = (props: CommentWithUser) => {
  const { comment, author } = props;
  return (
    <div
      key={comment.authorId}
      className="mt-4 flex h-full items-center gap-1 border-4 border-slate-400 dark:text-white"
    >
      <Image
        src={author.profileImageUrl}
        alt={`${author.username}'s profile pic`}
        className="w-14 rounded-md border-2 border-black drop-shadow-lg"
        width={56}
        height={56}
      />
      <div className="flex flex-col">
        <div className="underline-offset-3 flex text-slate-950 dark:text-white">
          <span>User: {author.username}</span>
          <span>{`・${dayjs(comment.createdAt).fromNow()}`}</span>
        </div>
        {comment.content}
      </div>
    </div>
  );
};

const CommentFeed = () => {
  const { data, isLoading: postsLoading } = api.comments.getAll.useQuery();
  if (postsLoading) return <LoadingPage />;
  if (!data) return <div>Error</div>;
  return (
    <div>
      {data?.map((fullComment) => (
        <CommentsView {...fullComment} key={fullComment.comment.id} />
      ))}
    </div>
  );
};

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  api.comments.getAll.useQuery();
  const { isLoaded: userLoaded, isSignedIn } = useUser();

  if (!userLoaded) return <div />;

  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <header
        className={`flex w-full justify-center ${darkMode ? "dark" : ""}`}
      >
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
            <AiOutlineInstagram className="rounded-lg hover:bg-amber-400" />
            <FiGithub className="rounded-lg hover:bg-amber-400" />
            <CiLinkedin className="rounded-lg hover:bg-amber-400" />
            {darkMode && (
              <IoIosSunny
                onClick={() => setDarkMode((prev) => !prev)}
                className="hover:bg-amber-400"
              />
            )}
            {!darkMode && (
              <BsSun
                onClick={() => setDarkMode((prev) => !prev)}
                className="hover:bg-amber-400"
              />
            )}
          </div>
        </div>
      </header>
      <main
        className={`flex h-full w-full flex-col items-center text-black ${
          darkMode ? "dark" : ""
        } `}
      >
        <div className="flex w-full flex-col border-x-4  border-b-2 border-x-slate-200 border-b-slate-200 bg-slate-300 px-5 py-6 dark:bg-slate-950 dark:text-slate-200 md:w-3/4">
          <div className=" flex w-full items-center justify-start border-white px-1 pb-2">
            <Image
              src={gradPic}
              alt="grad pic"
              className="h-12 w-auto rounded-full"
            />
            <div className="items-left flex flex-col pl-3">
              <h1 className="justify-center text-2xl font-medium hover:text-yellow-400">
                John A. Kornegay
              </h1>
              <h2 className="text-sm font-light">Frontend Developer</h2>
            </div>
          </div>
          <div className="w-full justify-end border-b-2 border-black py-2 dark:border-slate-200">
            <p>
              A self-taught and highly motivated individual seeking to gain
              experience as a front-end developer through an internship
              opportunity.
            </p>
          </div>
          <div className="flex w-3/4 items-end p-1 pt-2">
            <CiLocationOn className="text-2xl dark:text-yellow-200" />
            <h2 className="text-md pl-0.5 font-normal tracking-wide">
              McAllen, TX
            </h2>
          </div>
          <div className="flex w-3/4 items-center pl-2">
            <HiOutlineMail className="text-lg dark:text-yellow-200" />
            <h2 className="text-md pl-1 font-light tracking-wide">
              Jakornegay01@gmail.com
            </h2>
          </div>
        </div>
        <section className="flex w-full flex-col justify-between border-x-4 border-b-2 border-x-slate-50 border-b-slate-200 bg-slate-300  px-5 py-6 dark:bg-slate-950 md:w-3/4">
          <div className="justify-center bg-slate-300 py-2 text-black dark:bg-slate-950 dark:text-slate-200">
            <h2 className="text-2xl font-bold underline">EDUCATION</h2>
            <div className="w-1/2 justify-between rounded-lg p-1 hover:bg-slate-600 hover:text-yellow-400 hover:underline">
              <p className="font-semibold">・Bachelor of Science in Biology</p>
              <p className="pl-4">Graduation: 2016</p>
            </div>
            <p className="w-3/4 break-normal rounded-lg p-1 hover:bg-slate-600 hover:text-yellow-400 hover:underline">
              ・Texes A&M Univeristy - College Station, TX
            </p>
            <h2 className="text-2xl font-bold underline">Languages</h2>
            <ul>
              <li className="w-1/2 rounded-lg p-2 hover:bg-slate-600 hover:text-yellow-400 hover:underline">
                ・Typescript
              </li>
              <li className="w-1/2 rounded-lg p-2 hover:bg-slate-600 hover:text-yellow-400 hover:underline">
                ・React JS
              </li>
            </ul>
            <h2 className="text-2xl font-bold underline">Projects</h2>
            <ul>
              <li className="w-1/2 rounded-lg p-2 hover:bg-slate-600 hover:text-yellow-400 hover:underline">
                ・Calculator
              </li>
              <li className="w-1/2 rounded-lg p-2 hover:bg-slate-600 hover:text-yellow-400 hover:underline">
                ・Memory Game
              </li>
              <li className="w-1/2 rounded-lg p-2 hover:bg-slate-600 hover:text-yellow-400 hover:underline">
                ・Blog App
              </li>
            </ul>
            <h2 className="text-2xl font-bold underline">Skills</h2>
            <ul className="">
              <li className="w-1/2 rounded-lg p-2 hover:bg-slate-600 hover:text-yellow-400 hover:underline">
                ・Adobe Photoshop
              </li>
            </ul>
          </div>
          {!isSignedIn && (
            <div className="m-2 rounded-md border-2 bg-slate-400 p-2 font-medium text-black">
              <SignInButton>Sign in</SignInButton>
            </div>
          )}
          {isSignedIn && (
            <>
              <AddCommentWizard />
              <div className="w-1/2 dark:bg-slate-400 dark:text-white">
                <SignOutButton />
              </div>
            </>
          )}

          <CommentFeed />
        </section>
      </main>
    </>
  );
};

export default Home;
