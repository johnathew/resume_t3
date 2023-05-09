import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";
import UTRGVpic from "public/UTRGV_expo.png";
import { api } from "~/utils/api";
import type { RouterOutputs } from "~/utils/api";
import { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { LoadingPage } from "~/components/loading";
import Tabs from "~/components/Tabs";
import Header from "~/components/Header";
import Blog from "~/components/Blog";
dayjs.extend(relativeTime);

const AddCommentWizard = () => {
  const { user } = useUser();
  const [input, setInput] = useState("");
  const { mutate, isLoading: isPosting } = api.comments.create.useMutation();

  if (!user) return null;

  return (
    <div className="flex h-auto w-1/2 gap-3">
      <Image
        src={user.profileImageUrl}
        className="w-14 rounded-md border-2 border-black drop-shadow-lg"
        alt="Profile Image URL"
        width={56}
        height={56}
      />
      <input
        placeholder="Leave a comment"
        type="text"
        className="w-3/4 bg-transparent p-1 outline-none dark:text-white"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isPosting}
      />
      <button
        onClick={() => mutate({ content: input })}
        className="rounded-lg border-2 bg-slate-400 p-2"
      >
        Post
      </button>
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
      {data.map((fullComment) => (
        <CommentsView {...fullComment} key={fullComment.comment.id} />
      ))}
    </div>
  );
};

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [pageView, setPageView] = useState<boolean>(true);
  // const [isShown, setIsShown] = useState<boolean>(true)
  api.comments.getAll.useQuery();
  const { isLoaded: userLoaded, isSignedIn } = useUser();

  if (!userLoaded) return <div />;

  return (
    <>
      <Head>  
        <title>Resume</title>
      </Head>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setPageView={setPageView}
        pageView={pageView}
      />
      {pageView && (
        <main
          className={`flex h-full w-full flex-col items-center text-black ${
            darkMode ? "dark" : ""
          } `}
        >
          <div className="flex w-full flex-col border-x-4  border-b-2 border-x-slate-200 border-b-slate-200 bg-slate-300 px-5 py-6 dark:bg-slate-950 dark:text-slate-200 md:w-3/4">
            <div className="flex w-full items-center justify-start border-white pb-2">
              <div className="items-left flex flex-col">
                <h1 className="justify-center text-2xl font-bold transform duration-500 hover:-translate-y-2 hover:text-sky-700 hover:underline dark:hover:text-amber-500 tracking-tight font-sans">
                  John Andrew Kornegay
                </h1>
                <h2 className="text-sm font-light font-sans">Frontend Developer</h2>
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
              <CiLocationOn className="text-2xl dark:text-amber-500 text-sky-800" />
              <h2 className="text-md pl-0.5 font-normal tracking-wide">
                McAllen, TX
              </h2>
            </div>
            <div className="flex w-3/4 items-center pl-2">
              <HiOutlineMail className="text-lg dark:text-amber-500 text-sky-800" />
              <h2 className="text-md pl-1 font-light tracking-wide">
                Jakornegay01@gmail.com
              </h2>
            </div>
          </div>
          <section className="flex w-full flex-col justify-between border-x-4 border-b-2 border-x-slate-200 border-b-slate-200 bg-slate-300  px-5 py-6 dark:bg-slate-950 md:w-3/4">
            <Tabs
              panels={[
                {
                  name: "About",
                  content: (
                    <div className="h-full w-full flex-row md:flex">
                      <div className="flex w-full flex-col items-center md:flex justify-center">
                        <Image
                          src={UTRGVpic}
                          alt="grad pic"
                          placeholder="blur"
                          priority={true}
                          className="h-1/6 w-auto rounded-3xl border-2 border-black drop-shadow-2xl sm:h-3/5"
                        />
                        <p className="pt-2 font-thin text-black dark:text-white">
                          My face &apos;22
                        </p>
                      </div>
                      <div className="flex w-full flex-col justify-center md:items-center">
                        <h2 className="m-2 border-y-2 border-y-black p-4 font-serif font-light dark:border-y-amber-500 md:text-md ">
                          <span className="font-serif font-bold">
                            A 2016 graduate from Texas A&M University
                          </span>{" "}
                          who finally figured out how to make his resume website
                          have a responsive design and suddenly thinks he
                          deserves a job. Graduated with a science degree in
                          Molecular and Cell Biology and naturally decided to
                          become a programmer.
                        </h2>
                      </div>
                    </div>
                  ),
                },
                {
                  name: "Job history",
                  content: (
                    <div className="h-full p-1">
                      <h1 className="text-lg font-bold underline">
                        Helpdesk Specialist
                      </h1>
                      <h2 className="flex justify-between italic">
                        Maximus Federal - Remote; McAllen, TX
                        <span>
                          <p>July 2021 - Present</p>
                        </span>
                      </h2>
                      <ul className="w-full list-inside list-disc pb-2 md:w-3/4">
                        <li>
                          Troubleshoot official CDC software related issues for
                          healthcare professionals and the public.
                        </li>
                        <li>
                          Process escalation service request tickets as needed
                          to ensure service levels are maintained.
                        </li>
                        <li>
                          Coordinate with official CDC representatives to
                          receive reports on system updates.
                        </li>
                        <li>
                          Collaborate with other Helpdesk Specialists to share
                          new procedures and/or critical information received
                          from upper management.
                        </li>
                      </ul>
                      <h1 className="text-lg font-bold underline">
                        University of Texas Rio Grande Valley
                      </h1>
                      <h2 className="flex justify-between italic">
                        Teaching Assistant - Edinburg, TX
                        <span>
                          <p>Spring 2021</p>
                        </span>
                      </h2>
                      <ul className="w-full list-inside list-disc pb-2 md:w-3/4">
                        <li>
                          Assisted undergraduate Chemistry students with course
                          material, holding weekly Q&A sessions
                        </li>
                        <li>
                          Conducted online test reviews and held office hours
                          for personal tutoring
                        </li>
                      </ul>
                      <h1 className="text-lg font-bold underline">
                        SAMES, Inc.
                      </h1>
                      <h2 className="flex justify-between italic">
                        Survey Assistant - McAllen, TX
                        <span>
                          <p>October 2021 - December 2021</p>
                        </span>
                      </h2>
                      <ul className="w-full list-inside list-disc pb-2 md:w-3/4">
                        <li>
                          Mapped out boundaries for businesses and residential
                          homes using GPS technology
                        </li>
                        <li>
                          Provided measurements and layouts for construction
                          projects in varying locations
                        </li>
                      </ul>
                      <h1 className="text-lg font-bold underline">
                        Pharmacy Technician
                      </h1>
                      <h2 className="flex justify-between italic">
                        Walgreens Pharmacy- Palmview, TX
                        <span>
                          <p>October 2016 - May 2020</p>
                        </span>
                      </h2>
                      <ul className="w-full list-inside list-disc pb-2 md:w-3/4">
                        <li>
                          Utilized propriety software to manage patient’s
                          prescriptions, resolve rejected insurance claims, and
                          scheduled refills for medication
                        </li>
                        <li>
                          Maintained strong attention to detail, making sure all
                          patients received the correct prescription(s);
                          professionally handled confidential patient
                          information.
                        </li>
                        <li>
                          Resolved any hardware related issues that inhibited
                          normal pharmacy operations.
                        </li>
                      </ul>
                    </div>
                  ),
                },
                {
                  name: "Education & Projects",
                  content: (
                    <div className="flex h-full w-full flex-col md:flex-row">
                      <div className="h-full w-full justify-center overflow-auto py-2 text-black dark:bg-slate-950 dark:text-slate-200">
                        <h2 className="text-2xl font-bold underline">
                          EDUCATION
                        </h2>
                        <div className="w-full justify-between p-1 md:w-full">
                          <ul className="list-inside list-disc">
                            <li className="w-full break-keep rounded-lg p-0.5 font-semibold hover:bg-slate-600 hover:text-amber-500 hover:underline ">
                              Bachelor of Science in Molecular and Cell Biology{" "}
                              <br />
                              <span className="font-light md:pl-6">
                                Graduation: 2016
                              </span>
                            </li>
                            <li className="rounded-lg p-0.5 hover:bg-slate-600 hover:text-amber-500 hover:underline">
                              Texas A&M University -
                              <span className="font-light">
                                College Station, TX
                              </span>
                            </li>
                          </ul>
                        </div>
                        <h2 className="text-2xl font-bold underline">
                          Languages
                        </h2>
                        <ul className="list-inside list-disc space-y-2 p-2 ">
                          <li className="w-1/2 rounded-lg  hover:bg-slate-600 hover:text-amber-500 hover:underline">
                            Typescript
                          </li>
                         
                          <li className="w-1/2 rounded-lg  hover:bg-slate-600 hover:text-amber-500 hover:underline">
                            React JS
                          </li>
                          <li className="w-1/2 rounded-lg hover:bg-slate-600 hover:text-amber-500 hover:underline">
                            CSS
                          </li>
                          <li className="w-1/2 rounded-lg  hover:bg-slate-600 hover:text-amber-500 hover:underline">
                            HTML
                          </li>
                        </ul>
                        <div className="flex justify-start items-baseline space-x-2">
                        <h2 className="text-2xl font-bold underline">
                          Projects 
                        </h2><span className="text-sm">(select a project to preview)</span>
                        </div>
                        <ul className="list-inside list-disc space-y-2 p-2">
                          <li className="w-1/2 rounded-lg hover:bg-slate-600 hover:text-amber-500 hover:underline">
                            Pokedex
                          </li>
                          <li className="w-1/2 rounded-lg hover:bg-slate-600 hover:text-amber-500 hover:underline">
                            Memory Game
                          </li>
                          <li className="w-1/2 rounded-lg hover:bg-slate-600 hover:text-amber-500 hover:underline">
                           TBD (sleepy)
                          </li>
                        </ul>
                        <h2 className="text-2xl font-bold underline">Skills</h2>
                        <ul className="list-inside list-disc p-2">
                          <li className="w-1/2 rounded-lg hover:bg-slate-600 hover:text-amber-500 hover:underline">
                            Adobe Photoshop
                          </li>
                        </ul>
                      </div>
                      <div className="h-full w-full bg-blue-500"></div>
                    </div>
                  ),
                },
                {
                  name: "Art",
                  content: (
                    <div className="h-screen">
                      <h1 className="text-lg font-bold underline">
                        Photoshop Projects
                      </h1>
                      <p></p>
                    </div>
                  ),
                },
              ]}
            />

            {!isSignedIn && (
              <div className="m-2 rounded-md border-2 w-20 justify-center flex bg-slate-400 p-2 font-medium text-black">
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
          {/* <article className="p-5 cursor-pointer hover:shadow-2xl group">
          <div className="relative max-h-125 border-2 transform duration-500 active:enabled:rounded-es-sm">
              {isShown && <div onClick={() => setIsShown(prev => !prev)} className="">About</div>}
              {!isShown && <div onClick={() => setIsShown(prev => !prev)} className=" group-active:opacity-100">Testing</div>}
          </div>
          </article> */}
        </main>
      )}
      {!pageView && <Blog darkMode={darkMode} />}
    </>
  );
};

export default Home;
