import "./route.scss";
import { Link } from 'react-router-dom';
import React from "react";
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
        <section className="main-about__section">
        
          <div className="container first-section">
            <div className="side-bar">
            <h1>Education Academy</h1>
            <p>
              The sky was cloudless and of a deep dark blue. The spectacle
              before us was indeed sublime.
            </p>
            <div className="buttons">
              <button className="first">
              <span>Get started</span>
            </button>
            <button className="second">
              <span>Learn More</span>
            </button>
            </div>
          </div>
          <div className="img-sidebar">
            <img src="./img/bitmap.png" alt="aboutpng" width="360px"/>
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
        </section>
        <section className="container main-about__second-section">
          <div className="main-about__second-section__img-div">
            <img src="./img/section2-bitmap.png" alt="section2 png"/>
          </div>
          <div className="main-about__second-section__div">
            <span>About us</span>
            <h1>Best Education Platform</h1>
            <p2>Apparently we had reached a great height in the atmosphere, for the sky was a dead black.</p2>
            <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle.</p> 
            <button>
              <span>Explore</span>
            </button>
          </div>
        </section>
        <section className="container main-about__third-section">
            <div className="main-about__third-section__div2">
              <span>Our services</span>
              <h1>Online learning academy</h1>
              <p>Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed.</p>
              <div>
                <article>
                  <svg width="52" height="38" viewBox="0 0 52 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M52 13.4773V12.3487L25.9886 0L0 12.3378V13.488L25.9886 25.8261L52 13.4773ZM9.00405 20.0131V27.3932L24.6722 34.8315H27.305L42.9301 27.4136C42.9451 27.3811 42.9592 27.3487 42.9733 27.316V20.013L25.9886 28.0763L9.00405 20.0131ZM49.2604 16.9454V31.3028L50.6006 35.3273L48.5746 38H47.889L45.8629 35.3273L47.2033 31.3028V17.9678L49.2604 16.9454Z" fill="white"/>
                  </svg>
                </article>
                <p>Minuteness of the parts formed a great hindrance to my speed, I resolved, contrary to my first intention.</p>
              </div>
            </div>
            <div className="main-about__third-section__img-div">
              <img src="./img/section3-bitmap.png" alt=""/>
            </div>
        </section>
        <section className="main-about__online-edu-section">
          <div className="container">
            <h1>Start online education</h1>
            <p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. When it came near enough he perceived that it was not grass there were no blades.</p>
            <div>
              <button>
                <span>Get started</span>
              </button>
              <Link exact to="/contact">
                <button>
                  <span>Contact</span>
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="container main-about__popular-courses">
          <div className="main-about__popular-courses__div">
            <div>
              <span>Our big library</span>
              <h1>Popular Courses</h1>
              <p>Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed.</p>
            </div>
            <form>
              <input type="text" placeholder="Search..."/>
              <button type="button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2945 10.7303L15.676 14.112C16.108 14.5439 16.108 15.2435 15.676 15.6759C15.4603 15.8922 15.1777 16 14.894 16C14.6108 16 14.3287 15.8922 14.1119 15.6759L10.7304 12.2942C9.58603 13.1182 8.22103 13.5678 6.78356 13.5678C4.97111 13.5678 3.26761 12.8611 1.98667 11.5803C0.705181 10.2984 0 8.59505 0 6.78335C0 4.97166 0.705734 3.2678 1.98667 1.98756C3.26761 0.705102 4.97166 0 6.78356 0C8.59602 0 10.3006 0.706761 11.5805 1.98756C12.8631 3.26891 13.5682 4.97221 13.5682 6.78335C13.5682 8.22121 13.1164 9.58717 12.2945 10.7303ZM2.21233 6.7828C2.21233 8.00332 2.68743 9.15194 3.55135 10.0158C4.4136 10.879 5.5618 11.3546 6.78356 11.3546C8.00532 11.3546 9.15242 10.8801 10.0163 10.0163C10.8808 9.15194 11.3559 8.00387 11.3559 6.78335C11.3559 5.56284 10.8802 4.41477 10.0163 3.55095C9.15297 2.68713 8.00477 2.21153 6.78356 2.21153C5.56236 2.21153 4.41471 2.68713 3.55135 3.55095C2.68743 4.41477 2.21233 5.56228 2.21233 6.7828Z" fill="white" />
                </svg>
              </button>
            </form>
          </div>
          <ul className="ul">
            <li>
              <div className="img-div">
                <img src="./img/li.png" alt="li png"/>
              </div>
              <h4>System Administration and IT Infrastructure Services</h4>
              <div className="user-data">
                <div className="users">
                  <div className="user">
                    <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0542 3.70656C10.0542 5.75364 8.45963 7.41313 6.49259 7.41313C4.52555 7.41313 2.93094 5.75364 2.93094 3.70656C2.93094 1.65949 4.52555 0 6.49259 0C8.45963 0 10.0542 1.65949 10.0542 3.70656ZM0.0371094 15.9846C0.0371094 12.2742 2.92732 9.26641 6.49259 9.26641C10.0579 9.26641 12.9481 12.2742 12.9481 15.9846H0.0371094Z" fill="#6483F6" />
                    </svg>
                    <p>42 users</p>
                  </div>
                  <div className="clock">
                    <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9525 5.35582L14.0302 4.27854L12.9697 3.21814L11.8168 4.37057C10.7636 3.62449 9.53449 3.16467 8.25 3.03616V1.49934H9.75V0H5.25V1.49934H6.75V3.03616C5.46551 3.16467 4.23644 3.62449 3.18319 4.37057L2.03026 3.21814L0.969757 4.27854L2.04751 5.35582C-0.758441 8.32539 -0.669553 12.9938 2.2474 15.8545C5.16436 18.7152 9.83564 18.7152 12.7526 15.8545C15.6696 12.9938 15.7584 8.32539 12.9525 5.35582ZM7.5 16.4927C4.18629 16.4927 1.50001 13.8076 1.50001 10.4954C1.50001 7.18311 4.18629 4.49801 7.5 4.49801C10.8137 4.49801 13.5 7.18311 13.5 10.4954C13.4963 13.8061 10.8122 16.489 7.5 16.4927ZM7.5 10.4954V5.99734C9.98528 5.99734 12 8.01117 12 10.4954C12 12.9795 9.98528 14.9934 7.5 14.9934C5.01472 14.9934 3 12.9795 3 10.4954H7.5Z" fill="#F07867" />
                    </svg>
                    <p>100 min</p>
                  </div>
                </div>
                <hr/>
                <div className="users-photo">
                  <img src="./img/li-oval" alt="li oval" />
                  <div className="span">
                    <h4>Alfonso Pinto</h4>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
              <div className="money">
                <div className="num">
                  $19
                </div>
                <button>
                  <span>Get started</span>
                </button>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default About;                                                              
