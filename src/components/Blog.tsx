import React from "react";

type BlogTypes = {
  darkMode: boolean;
};

const Blog = ({ darkMode }: BlogTypes) => {
  return (
    <div
      className={`flex h-full w-full flex-col items-center text-black ${
        darkMode ? "dark" : ""
      } `}
    >
      <div className="flex w-full flex-col border-x-4  border-b-2 border-x-slate-200 border-b-slate-200 bg-slate-300 px-5 py-6 dark:bg-slate-950 dark:text-slate-200 md:w-3/4">
        <div className="flex w-full items-center justify-start border-white pb-2">
          <div className="items-left flex flex-col">
            <h1 className="justify-center text-2xl font-medium hover:text-sky-700 dark:hover:text-amber-500">
             Blog content will go here
            </h1>
          </div>
        </div>
        <div className="w-full justify-end border-b-2 border-black py-2 dark:border-slate-200">
          <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam praesentium tempore doloribus perspiciatis pariatur recusandae a, obcaecati possimus voluptate deleniti? Ipsum, beatae! Non nesciunt ullam repudiandae praesentium incidunt minus provident.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
