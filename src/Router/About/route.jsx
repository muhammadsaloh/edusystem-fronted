import React from "react";
import "./route.scss";
import Header from "../../Components/Header/route";
import Footer from "../../Components/Footer/route";
// Images
import centreImg from "../img/pic.png";
import man from "../img/man.png";
import woman from "../img/woman.png";
import oval from "../img/Oval.png";
import top from "../img/top.png";
import bottom from "../img/bottom.png";

function About() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

const Main = () => {
  return (
    <>
      <main className="main-about">
        <div className="container first-section">
          <div className="side-bar">
            <h1>Education Academy</h1>
            <p>
              The sky was cloudless and of a deep dark blue. The spectacle
              before us was indeed sublime.
            </p>
            <button className="first">
              <span>Get started</span>
            </button>
            <button className="second">
              <span>Learn More</span>
            </button>
          </div>
          <div className="img-side-bar">
            <img className="centre" src={centreImg} alt="about png" />
            <img className="left" src={man} alt="about png" />
            <img className="right" src={woman} alt="about png" />
            <img className="side" src={oval} alt="about png" />
            <img className="top" src={top} alt="about png" />
            <img className="bottom" src={bottom} alt="about png" />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
