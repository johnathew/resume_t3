import React, { FC, ReactNode, useState } from "react";
import classNames from "classnames";

type Panel = {
  name: string;
  content: ReactNode;
};

const Tabs: FC<{
  panels: Panel[];
}> = ({ panels }) => {
  const [activeTabName, setActiveTabName] = useState(panels[0]?.name);
  const ActiveContent = panels.find(
    ({ name }) => name === activeTabName
  )?.content;

  return (
    <div className="flex">
      {panels.map((panel) => (
        <div
          onClick={() => setActiveTabName(panel.name)}
          key={panel.name}
          className= {classNames(
            "text-black relative h-10 w-20 hover:underline cursor-pointer px-4 py-4 rounded mr-2  dark:text-slate-200 border-b-2 hover:inset-y-2 transform duration-700",
            panel.name === activeTabName && "font-bold opacity-75 text-white border-b-gray-950 dark:border-b-amber-500 bg-blue-950 drop-shadow-2xl rounded-lg dark:text-black hover:inset-y-9 transform duration-300"
          )}
        >
          {panel.name}
        </div>
      ))}

      {ActiveContent && (
        <div
          style={{
            top: "-1px"
          }}
          className="relative -top-1 p-4 rounded-t-sm dark:text-slate-200 text-white"
        >
          {ActiveContent}
        </div>
      )}
    </div>
  );
};

export default Tabs;