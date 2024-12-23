import React from "react";
import { BottomHero, Header } from "./Components";
import { Hero } from "./Components";
import { About } from "./Components";
import { Services } from "./Components";
import { Project } from "./Components";
import { Feedback } from "./Components";
import { Review } from "./Components";
import { Preview } from "./Components";
import { Caris } from "./Components";
import { Containers } from "./Components";
import { Footer } from "./Components";
import { AboutUs } from "./Components";
// import { Home } from "./Pages";
// import Blogs from "./Pages/blogs";
// import SignUp from "./Pages/signup";
// import Contact from "./Pages/contact";

export default function Root() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      {/* <Project /> */}
      <br />
      <Feedback />
      <Review />
      <AboutUs />
      {/* <Preview />
      <Caris /> */}
      <BottomHero />
      <Containers />
      <Footer />
    </>
  );
}
