import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import { About } from "./sections/About";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Contact/>
      <Footer />
    </main>
  );
};

export default App;
