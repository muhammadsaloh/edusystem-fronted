import "./route.scss";
import React from "react";

import Header from "../../Components/Header/route";
import Footer from "../../Components/Footer/route";

function Contact() {
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
      <main className="contact">
        <section className="container contact__section1">
          <h1>Contact</h1>
          <div>
            <span>Home</span>
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8L0 16L0 0L10 8Z" fill="#F28A4B" />
            </svg>
            <span>Contact</span>
          </div>
        </section>
      </main>
      <section className="container new__section">
        <ul className="new__section__ul">
          <li className="new__section__ul__li">
            <article classname="new__section__ul__svg">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.75 11.25C12.75 5.04675 17.7968 0 24 0C30.2032 0 35.25 5.04675 35.25 11.25C35.25 13.3773 34.6527 15.4497 33.5222 17.243L24 32.4375L14.4778 17.243C13.3473 15.4497 12.75 13.3773 12.75 11.25ZM16.9688 11.25C16.9688 15.1267 20.1233 18.2812 24 18.2812C27.8767 18.2812 31.0312 15.1267 31.0312 11.25C31.0312 7.37329 27.8767 4.21875 24 4.21875C20.1233 4.21875 16.9688 7.37329 16.9688 11.25ZM24 7.03125C21.6738 7.03125 19.7812 8.92383 19.7812 11.25C19.7812 13.5762 21.6738 15.4688 24 15.4688C26.3262 15.4688 28.2188 13.5762 28.2188 11.25C28.2188 8.92383 26.3262 7.03125 24 7.03125ZM30.8394 48H17.1559L18.2102 39.4688H29.7579L30.8394 48ZM18.5618 36.6562H23.335L19.3517 30.3387L18.5618 36.6562ZM43.3129 36.6562H32.2339L31.1517 28.2188H39.7972L43.3129 36.6562ZM4.68713 36.6562H15.7277L16.7823 28.2188H8.20276L4.68713 36.6562ZM29.3972 36.6562H24.665L28.5978 30.4197L29.3972 36.6562ZM15.3761 39.4688H3.51526L0 48H14.3218L15.3761 39.4688ZM32.5942 39.4688H44.4847L48 48H33.676L32.5942 39.4688Z"
                  fill="white"
                />
              </svg>
            </article>
            <div className="new__section__ul__li__div2">
              <h4>Visit Us</h4>
              <p>504 W 42nd St, New York, NY 10036</p>
            </div>
          </li>
          <li className="new__section__ul__li">
            <article className="one">
              <svg
                width="46"
                height="48"
                viewBox="0 0 46 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M43.4534 15.6545H42.3315V3.24297C42.3315 1.45913 40.8823 0 39.11 0H17.8561C16.0845 0 14.6353 1.45982 14.6353 3.24297V12.1478C10.3483 14.5879 5.92664 17.1369 5.91711 17.1431C3.51679 18.1378 0 21.3472 0 28.9258C0 29.6026 0.0442236 30.2273 0.106137 30.8309C0.125867 31.0076 0.147639 31.1775 0.171451 31.3481C0.233364 31.7913 0.310926 32.2153 0.403455 32.6181C0.417027 32.6767 0.429358 32.7363 0.441643 32.7956C0.459534 32.8821 0.477326 32.9681 0.498706 33.0497C0.623212 33.5155 0.767449 33.9526 0.929375 34.3684C1.00223 34.5524 1.0805 34.7217 1.15984 34.8933L1.18859 34.9555C1.28384 35.1589 1.37978 35.359 1.48251 35.546C1.60157 35.7714 1.72064 35.9885 1.85127 36.1947C1.86715 36.2191 1.88374 36.2423 1.90041 36.2657L1.90043 36.2658L1.90047 36.2658L1.90052 36.2659L1.90057 36.266L1.90059 36.266C1.91669 36.2886 1.93287 36.3113 1.94856 36.3352C5.04829 41.053 10.7667 41.0743 10.7667 41.0743H14.6353V44.7591C14.6353 46.5409 16.0845 48 17.8561 48H39.1093C40.8816 48 42.3308 46.5402 42.3308 44.7591V40.2645H42.822V40.2618H43.4486C44.8577 40.2618 46 39.1144 45.9973 37.6956L46 37.4161C45.9973 35.9995 44.8577 34.8555 43.4507 34.8555H42.822H38.6997H38.0643C36.6573 34.8555 35.5211 36.0022 35.5211 37.4182V37.7025C35.5211 39.115 36.66 40.2666 38.0663 40.2666H40.0897V42.0025H16.8757V18.7173C18.0419 17.9727 19.1216 17.2561 19.7373 16.7759C20.2847 16.3496 20.8273 15.9386 21.352 15.5411C23.8171 13.6733 25.888 12.1044 26.2185 10.6578C26.7403 8.38145 25.0047 6.46334 21.9941 8.03825C21.0457 8.53422 19.0991 9.62137 16.8757 10.8784V5.13916L40.0897 5.14259V15.6531H38.6997V15.6559H38.0676C36.66 15.6559 35.5177 16.8026 35.5177 18.2227V18.5008C35.5177 19.9202 36.66 21.0643 38.0643 21.0643H38.6963H42.8186H43.452C44.8577 21.0643 45.9973 19.9175 45.9973 18.5008V18.2152C46 16.8047 44.8611 15.6545 43.4534 15.6545ZM28.48 43.141C29.3726 43.141 30.0924 43.8665 30.0924 44.7632C30.0924 45.662 29.3719 46.3847 28.48 46.3847C27.5907 46.3847 26.8723 45.6599 26.8723 44.7632C26.8736 43.8692 27.5941 43.141 28.48 43.141ZM25.0829 3.12241H31.8838C32.0975 3.12241 32.2716 2.94704 32.2716 2.73194C32.2716 2.51204 32.0975 2.33804 31.8838 2.33804H25.0829C24.8693 2.33804 24.6924 2.51272 24.6924 2.73194C24.6924 2.94772 24.8693 3.12241 25.0829 3.12241ZM43.4507 22.0548H38.7004H38.0649C36.6607 22.0548 35.5217 23.2016 35.5217 24.6203V24.8984C35.5217 26.3185 36.6607 27.466 38.067 27.466H42.822H43.4507C44.8577 27.466 46 26.3137 46 24.8984L45.9973 24.6169C46 23.2016 44.8577 22.0548 43.4507 22.0548ZM42.822 28.4552H43.4507C44.8611 28.4552 45.9973 29.6053 45.998 31.0213V31.3022C45.9946 32.7195 44.8584 33.8663 43.4493 33.8663H42.8193H38.697H38.0649C36.6579 33.8663 35.5183 32.7195 35.5183 31.3022V31.0213C35.5183 29.6053 36.6607 28.4552 38.0649 28.4552H42.822Z"
                  fill="white"
                />
              </svg>
            </article>
            <div className="new__section__ul__li__div2">
              <h4>Call Us</h4>
              <p>
                +3 (234) 567-89-02 <br />
                +2 (456) 789-00-34
              </p>
            </div>
          </li>
          <li className="new__section__ul__li">
            <article className="two">
              <svg
                width="51"
                height="48"
                viewBox="0 0 51 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M50.2669 14.55L44.625 11.19V3C44.625 1.35 43.1906 0 41.4375 0H9.5625C7.80937 0 6.375 1.35 6.375 3V11.19L0.733125 14.55C0.286875 14.82 0 15.3 0 15.81V19.71L9.5625 23.52V3H41.4375V23.52L51 19.71V15.81C51 15.3 50.7131 14.82 50.2669 14.55ZM26.1216 32.88C25.9239 32.961 25.7104 33 25.5 33C25.2896 33 25.0761 32.961 24.8784 32.88L0 22.965V45C0 46.656 1.428 48 3.1875 48H47.8125C49.572 48 51 46.656 51 45V22.965L26.1216 32.88ZM14.3438 6H36.6562C37.536 6 38.25 6.672 38.25 7.5C38.25 8.328 37.536 9 36.6562 9H14.3438C13.464 9 12.75 8.328 12.75 7.5C12.75 6.672 13.464 6 14.3438 6ZM36.6562 12H14.3438C13.464 12 12.75 12.672 12.75 13.5C12.75 14.328 13.464 15 14.3438 15H36.6562C37.536 15 38.25 14.328 38.25 13.5C38.25 12.672 37.536 12 36.6562 12ZM14.3438 18H27.0938C27.9735 18 28.6875 18.672 28.6875 19.5C28.6875 20.328 27.9735 21 27.0938 21H14.3438C13.464 21 12.75 20.328 12.75 19.5C12.75 18.672 13.464 18 14.3438 18Z"
                  fill="white"
                />
              </svg>
            </article>
            <div className="new__section__ul__li__div2">
              <h4>Email Us</h4>
              <p>support@education.com education@gmail.com</p>
            </div>
          </li>
        </ul>
        <form>
          <h1>Get in Touch</h1>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea cols="30" rows="5" placeholder="Message"></textarea>
          <button type="button">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
