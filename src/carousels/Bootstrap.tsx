import { useState } from "react";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "~/components/Header";
import About from "~/components/About";
import JobHistory from "~/components/JobHistory";
import Projects from "~/components/Projects";

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
          className="h-screen overflow-scroll md:h-screen"
          id="About"
        >
          <About />
        </Carousel.Item>
        <Carousel.Item
          className="h-screen overflow-scroll md:h-screen"
          id="Job History"
        >
          <JobHistory />
        </Carousel.Item>
        <Carousel.Item
          className="h-screen overflow-scroll md:h-screen"
          id="Projects"
        >
          <Projects />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

