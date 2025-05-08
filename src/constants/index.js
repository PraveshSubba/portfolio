import { ClassNames } from "@emotion/react";
import { SpotLight } from "@react-three/drei";
import Background from "three/src/renderers/common/Background.js";
import { texture } from "three/tsl";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "College Management System",
    desc: "A modern solution to education by helping institutions work more efficiently, connect better with students and staff, and keep up with new academic needs. A College Management System (CMS) solves these problems by bringing all key tasks—admissions, classes, staff, exams, and student-teacher collaboration—into one digital platform",
    className: "anmatedText1",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project1logo.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 20px 0px #AA3C304D",
    },
    tags: [
      { path: "/assets/react.svg", name: "React" },
      { path: "/assets/mongoDb.png", name: "MongoDB" },
      { path: "/assets/springboot.png", name: "SpringBoot" },
      { path: "/assets/mui.png", name: "MUI library" },
    ],
    spotlight: "/assets/spotlight1.png",
  },
];
