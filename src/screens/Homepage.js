import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Graph from "../components/Graph/Graph";
import Footer from "../components/Footer/Footer";
import Hotreviews from "../components/Hotreviews/Hotreviews";
import Popularclasses from "../components/Popularclasses";
import style from "../css/Homepage.module.css";

const Homepage = () => {
  return (
    <div className={style.app}>
      <Navbar />
      <div id={style.mainContainer}>
        <h1 id={style.homeBlurb}>
          Explore 100s of Reviews of Columbia Classes and Professors
        </h1>
        <p>
          Anonymous reviews taken from CULPA’s API, accessible here:
          http://culpa-team.github.io/api/
        </p>
        <Graph />
        <h1>Hot Reviews</h1>
        <Hotreviews />
        <h1>Popular Classes</h1>
        <Popularclasses />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
