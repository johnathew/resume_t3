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
    <div>
      {panels.map((panel) => (
        <div
          onClick={() => setActiveTabName(panel.name)}
          key={panel.name}
          className= {classNames(
            "bg-slate-300 relative z-10 hover:underline cursor-pointer inline-block px-4 py-2 rounded-t-sm mr-2 dark:bg-slate-950 dark:text-slate-200 border-b-2",
            panel.name === activeTabName && "font-bold border-b-gray-950 dark:border-b-amber-500 bg-amber-400 drop-shadow-lg rounded-lg dark:bg-slate-200 dark:text-black"
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
          className="bg-slate-300 relative -top-1 p-4 rounded-t-sm dark:bg-slate-950 dark:text-slate-200"
        >
          {ActiveContent}
        </div>
      )}
    </div>
  );
};

export default Tabs;