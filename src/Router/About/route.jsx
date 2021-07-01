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
                  <img src="./img/li-oval.png" alt="li oval" />
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
            <li>
              <div className="img-div">
                <img src="./img/li.png" alt="li png" />
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
                <hr />
                <div className="users-photo">
                  <img src="./img/li-oval.png" alt="li oval" />
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
            <li>
              <div className="img-div">
                <img src="./img/li.png" alt="li png" />
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
                <hr />
                <div className="users-photo">
                  <img src="./img/li-oval.png" alt="li oval" />
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
          <button type="button" className="button">
            <span>
              Explore All
            </span>
          </button>
        </section>
        
        <section className="container main-about__info-section">
        
          <div className="main-about__info-section__img-div">
            <img src="./img/info.png" alt="section5 png"/>
            <img src="./img/375bitmap.png" alt="section375 png"/>
          </div>
          <div className="main-about__info-section__div">
            <span>Testimonials</span>
            <h1>Our Students say About Us</h1>
            <p2>Apparently we had reached a great height in the atmosphere, for the sky was a dead black.</p2>
            <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle.</p>
          </div>
        </section>
        
        <section className="container main-about__experts-section">
        
          <div className="main-about__experts-section__div">
            <span>Features</span>
            <h1>Professionals and Experts</h1>
            <p2>Apparently we had reached a great height in the atmosphere, for the sky was a dead black.</p2>
            <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle.</p>
          </div>
          <ul>
            <li>
              <article>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.92722 9.36224C9.15894 9.36224 8.44372 9.15507 7.80667 8.82122C6.31345 8.04326 5.28446 6.49188 5.28436 4.68092C5.28436 2.09537 7.36284 0 9.92712 0C12.4918 0 14.5708 2.09537 14.5708 4.68092C14.5708 6.49089 13.5429 8.04168 12.0516 8.82063C11.4127 9.15507 10.6975 9.36224 9.92722 9.36224ZM20.9482 0.362034H46.4644C47.3125 0.362034 47.9999 1.05643 48 1.91104V25.2339C48 26.0885 47.3126 26.782 46.4645 26.782H38.2764L42.4862 46.0532C42.6764 46.9175 42.1348 47.7721 41.277 47.9628C41.1624 47.9882 41.0467 47.9998 40.9335 47.9998C40.2044 48.0007 39.5469 47.4907 39.3835 46.7434L35.023 26.7821H32.4882L28.1277 46.7434C27.9408 47.6067 27.0861 48.1511 26.236 47.9628C25.3781 47.7721 24.8364 46.9174 25.025 46.0532L29.2352 26.782H20.9482C20.0993 26.782 19.4127 26.0885 19.4127 25.2339V22.3538C20.3351 22.2669 21.1881 21.8258 21.7924 21.1148L22.4839 20.2996V23.6854H44.9287V3.45944H22.4838V10.3618C21.7451 10.5221 21.0501 10.9058 20.5229 11.528L19.4127 12.8367V1.91104C19.4127 1.05643 20.0993 0.362034 20.9482 0.362034ZM33.4981 9.06963C33.803 8.9479 34.1461 9.0989 34.2671 9.40645C34.3751 9.68403 34.264 9.99553 34.0132 10.1413L26.7598 14.4199L24.0037 16.0456L20.5863 20.0746C19.8836 20.9055 18.6265 21.0176 17.7861 20.292L16.37 19.0686V14.2932C16.37 14.1736 16.3543 14.0581 16.3386 13.9427L16.3386 13.9427L16.3386 13.9427L16.3386 13.9426C16.3298 13.8782 16.3211 13.8137 16.3151 13.7486L18.8604 15.9484L21.731 12.5685C22.4234 11.7566 23.6213 11.6409 24.4515 12.289L33.4981 9.06963ZM10.7821 10.2628H9.07733C7.77204 10.2628 6.62428 10.9024 5.89473 11.8774L0.66181 16.7348C-0.153554 17.4671 -0.227509 18.7356 0.50674 19.5626L4.7761 24.3671C5.50397 25.1888 6.76395 25.2615 7.57921 24.523C8.39664 23.7844 8.46569 22.5193 7.7332 21.6961L4.79042 18.3829L8.97032 14.6119L6.5359 17.9465L8.91726 20.6271C10.2331 22.1097 10.1091 24.3876 8.63929 25.7153C7.6358 26.6223 6.26637 26.8351 5.07917 26.4168C5.07917 26.4168 5.09761 35.6787 5.09761 45.5975C5.09761 46.9242 6.16417 47.9997 7.48015 47.9997C8.79475 47.9997 9.86268 46.9242 9.86268 45.5975V31.2812H11.4519V45.5975C11.4519 46.2902 11.2604 46.9316 10.9549 47.4993C11.3547 47.8093 11.8522 47.9997 12.3944 47.9997C13.7111 47.9997 14.7776 46.9242 14.7776 45.5975C14.7776 41.7917 14.7781 40.0589 14.7786 37.9242V37.9233V37.9211C14.7795 34.4943 14.7807 30.029 14.7807 14.2931C14.7809 12.0672 12.9911 10.2628 10.7821 10.2628Z" fill="white" />
                </svg>
              </article>
              <div>
                <h4>Powerful Tools</h4>
                <span>Peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music.</span>
              </div>
            </li>
            <li>
              <article className="one">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M47.9805 29.977C47.8807 29.3435 47.4111 28.8317 46.7887 28.6777C46.6843 28.652 38.2481 26.533 32.0499 22.7187L25.2821 15.9493C21.4719 9.75414 19.3479 1.31542 19.3221 1.21144C19.1683 0.588897 18.6563 0.119268 18.0228 0.019479C17.3895 -0.0803097 16.7579 0.209125 16.42 0.754134L14.3766 4.04955C13.2181 3.00512 11.4756 2.50941 10.0519 2.88547L9.93549 2.91646C4.89004 4.46199 1.68602 7.666 0.140481 12.7113L0.109611 12.8278C-0.244677 14.4004 0.276165 16.1661 1.43654 17.3266C1.52377 17.4138 1.6153 17.4981 1.70839 17.5769L1.74357 17.6057C5.58138 20.6725 9.31857 23.9161 12.9021 27.287C9.69092 29.067 6.89946 29.9519 4.76632 29.857C4.41107 29.8411 4.08682 30.0584 3.96609 30.3929C3.84536 30.7275 3.95604 31.1016 4.23961 31.3165L6.64855 33.1424L3.91524 35.7647C3.6806 35.9898 3.60283 36.3331 3.71745 36.6373C3.75909 36.7478 3.82299 36.8451 3.90315 36.9253C4.04398 37.0662 4.23483 37.1533 4.4417 37.1624C6.85579 37.2697 9.51169 36.7517 12.3794 35.6202C11.2478 38.4879 10.7299 41.1437 10.8372 43.5577C10.8464 43.7646 10.9336 43.9556 11.0745 44.0964C11.1546 44.1766 11.2521 44.2405 11.3626 44.2821C11.6667 44.3967 12.0101 44.3192 12.2352 44.0846L14.8576 41.351L16.6832 43.7603C16.8981 44.0435 17.2721 44.1546 17.6067 44.0335C17.9411 43.9128 18.1583 43.5884 18.1425 43.2333C18.0477 41.1001 18.9327 38.3085 20.7127 35.0971C24.0854 38.6823 27.3292 42.4195 30.3942 46.2561L30.4233 46.292C30.5019 46.3846 30.5859 46.4758 30.6728 46.5631C31.8332 47.7235 33.5992 48.2446 35.1719 47.8905L35.2889 47.8595C40.3346 46.3133 43.5385 43.1094 45.0836 38.0643C45.0836 38.0643 45.9254 35.5257 43.9505 33.6235L47.246 31.5803C47.7909 31.2419 48.0803 30.6105 47.9805 29.977ZM17.2407 5.48046C17.5573 6.4732 17.9476 7.62316 18.4099 8.85892C17.7786 8.11696 17.153 7.37058 16.5344 6.61941L17.2407 5.48046ZM3.75538 15.1323C7.86935 18.4208 11.8698 21.9089 15.6933 25.538L22.7621 18.4694C19.585 15.1222 16.5174 11.6395 13.5971 8.0642L13.1128 7.47025C12.8598 7.15772 12.6075 6.84472 12.3568 6.53099C11.9045 5.95906 11.2539 5.8345 10.8013 5.9855C6.79943 7.22975 4.45403 9.57526 3.20989 13.5767C3.06033 14.0704 3.31579 14.6969 3.69089 15.072C3.71195 15.0931 3.73361 15.1133 3.75538 15.1323ZM42.0144 37.1987C40.7706 41.1999 38.4253 43.5457 34.4236 44.79C33.9335 44.8964 33.3029 44.6839 32.9278 44.3089C32.9069 44.2877 32.8865 44.2666 32.8679 44.2449C29.5816 40.1324 26.0936 36.1317 22.4624 32.3067L29.5309 25.2384C32.8786 28.4164 36.3615 31.4839 39.9367 34.404L40.53 34.8875C40.8422 35.1406 41.1556 35.393 41.4697 35.6437C41.4914 35.6625 41.5128 35.6826 41.5337 35.7036C41.9083 36.0784 42.152 36.7189 42.0144 37.1987ZM39.1406 29.5898C39.8828 30.2216 40.6295 30.847 41.3804 31.4656L42.5196 30.7592C41.5268 30.4425 40.3766 30.0522 39.1406 29.5898Z" fill="white" />
                </svg>
              </article>
              <div>
                <h4>Actual Skills</h4>
                <span>Some distant orb has power to raise and purify our thoughts like a strain of sacred music.</span>
              </div>
            </li>
            <li>
              <article className="two">
                <svg width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.88224 7.31691L15.175 10.1151C15.8579 10.4153 19.1008 11.6055 24.8511 10.1752C32.1149 8.36698 47.8416 5.23561 48 5.20264L47.4145 2.23725C47.4087 2.23843 47.3653 2.24667 47.3101 2.25844L32.3214 0.138289C30.6729 -0.0947983 28.0119 -0.0265202 26.3775 0.292504L6.33901 4.1926C3.73197 4.05722 1.25282 5.66411 0.422131 8.26928C-0.056569 9.77257 0.0771854 11.3748 0.797582 12.7745C1.16599 13.4902 1.66816 14.1082 2.26771 14.6097C1.36545 15.3161 0.656788 16.2884 0.28251 17.4609C-0.195017 18.9642 -0.0612622 20.5664 0.657961 21.9673C1.04867 22.7254 1.59307 23.3646 2.23838 23.8767C1.3502 24.5807 0.652095 25.5484 0.281337 26.7079C-0.19619 28.2112 -0.0624355 29.8122 0.656788 31.2131C1.37836 32.6151 2.59975 33.6511 4.09686 34.1314L18.5435 38.7661C19.3367 39.0203 20.6367 39.0769 21.4486 38.8885L46.8091 33.059C46.8091 33.059 46.6578 32.3997 46.4724 31.5863C46.287 30.7728 45.4786 30.2631 44.6667 30.4503L21.5788 35.7548C20.7681 35.9419 19.4681 35.8854 18.6737 35.6323L5.01554 31.2519C4.28458 31.0188 3.68738 30.5103 3.33657 29.8275C2.98458 29.1447 2.91888 28.3631 3.15354 27.6308C3.63576 26.1158 5.25606 25.2858 6.76608 25.7603C6.7696 25.7461 15.1234 28.4243 18.5447 29.5179C19.3378 29.7722 20.6378 29.8287 21.4497 29.6403L46.8103 23.812C46.8103 23.812 46.6589 23.1516 46.4736 22.3381C46.2882 21.5247 45.4798 21.0149 44.6679 21.2021L21.58 26.5078C20.7692 26.6938 19.4692 26.6373 18.6749 26.3854L5.01554 22.0038C4.28458 21.7707 3.68738 21.2621 3.33657 20.5794C2.98458 19.8966 2.91888 19.1149 3.15354 18.3827C3.63576 16.8676 5.25606 16.0365 6.76608 16.5121C6.76726 16.5074 15.236 19.2232 18.6843 20.3274C19.4763 20.5817 20.7774 20.6382 21.5882 20.4499L46.9487 14.6203C46.9487 14.6203 46.7974 13.9623 46.612 13.1465C46.4254 12.3342 45.6171 11.8233 44.8063 12.0116L21.7184 17.315C20.9077 17.5033 19.6077 17.4468 18.8134 17.1925L5.15399 12.8121C4.42303 12.5779 3.82583 12.0705 3.47502 11.3865C3.12303 10.7037 3.05733 9.92208 3.29199 9.18985C3.77421 7.67714 5.39334 6.83426 6.88224 7.31691Z" fill="white" />
                </svg>
              </article>
              <div>
                <h4>Growth Yourself</h4>
                <span>Distant orb has power to raise and purify our thoughts like a strain of sacred music.</span>
              </div>
            </li>
          </ul>
        </section>
      
        <section className="container main-about__price-section">
          <div className="main-about__second-section__img-div">
            <img src="./img/section6-bitmap2x.png" alt="section6 png" />
          </div>
          <div className="main-about__price-section__div">
            <span>Pricing</span>
            <h1>Our Flexible Pricing Plans</h1>
            <p2>Apparently we had reached a great height in the atmosphere, for the sky was a dead black.</p2>
            <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle.</p>
          </div>
        </section>
      
        <section className="container main-about__our-brands">
          <ul>
            <li>
              <img src="../img/atlassian.png" alt="brands logo"/>
            </li>
            <li>
              <img src="../img/slack.png" alt="brands logo"/>
            </li>
            <li>
              <img src="../img/dropbox.png" alt="brands logo" />
            </li>
            <li>
              <img src="../img/shopify.png" alt="brands logo" />
            </li>
            <li>
              <img src="../img/google.png" alt="brands logo" />
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default About;                                                              
