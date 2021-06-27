import React from "react";
import "./route.scss";
import Header from "../../Components/Header/route";
import Footer from "../../Components/Footer/route";

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
            <img className="centre" src="./img/pic.png" alt="about png" />
            <img className="left" src="./img/man.png" alt="about png" />
            <img className="right" src="./img/woman.png" alt="about png" />
            <img className="side" src="./img/Oval.png" alt="about png" />
            <img className="top" src="./img/top.png" alt="about png" />
            <img className="bottom" src="./img/bottom.png" alt="about png" />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
