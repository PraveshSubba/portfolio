import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

export const About = () => {
  const [hasCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("praveshsubba81@gmail.com");
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <h1 className="head-text">About Me</h1>
      <div className="grid xl:grid-cols-3 xl:grid-rows-4 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Pravesh </p>
              <p className="grid-subtext">
                Recent B.Sc. Computer Science graduate skilled in programming,
                web development, and databases.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid-2.png"
              alt="grid2"
              className="w-full sm:h-[276px] h-fit object-contain "
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript, focusing on the React + Spring Boot
                ecosystem to develop full-stack web applications with smooth
                front-to-backend integration.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={330}
                width={330}
                backgroundColor="rgba(0,0,0,0)"
                backgroundOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="/assets/earth-night.jpg"
                bumpImageUrl="/assets/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">
                {" "}
                I work remotely across most timezones.
              </p>
              <p className="grid-subtext">
                {" "}
                I m based at India, with remote work availabe.
              </p>
              <a href="#contact">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10 hover:[background-color:#4d4d4d]"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid3"
              className="w-full sm:h-[226px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion For Coding</p>
              <p className="grid-subtext">
                I am passionate about solving complex problems and bringing
                ideas to life through code. For me, coding isn't just a
                profession—it's a creative pursuit that fuels my curiosity and
                drives me to build impactful solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png "
              alt="grid4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center ">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">
                  praveshsubba81@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
