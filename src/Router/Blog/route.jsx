import "./route.scss";
import React from "react";
import Header from "../../Components/Header/route";
import Footer from "../../Components/Footer/route";

function Blog() {
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
      <main className="main-blog">
        <section className="main-blog__section">
          <div className="container">
            <h1>Blog</h1>
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
              <span>Blog</span>
            </div>
          </div>
        </section>
      
        <section className="container main-blog__img-section">
          <div className="main-blog__img-section__img-div">
            <img src="./img/blog.png" alt="blog png"/>
            <h1>Powerful mental tools to help you master</h1>
          </div>
        </section>
        <section className="vp main-blog__vp-section">
          <p>Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse.</p>
          <div className="main-blog__vp-section__flex-div">
            <ul>
              <li>
                <img src="./img/blog-oval.png" alt="blog oval"/>
                <h4>Jon Doe</h4>
              </li>
              <p>Learning</p>
              <li>
                <img src="./img/blog-calendar.png" alt="blog calendar"/>
                <p>29 Dec 2019</p>
              </li>
            </ul>
          </div>
          <p>Truly it was a great journey, and in it I met with many, whom to know was to love; but whom never could I see again has not space enough and each must do his duty to the security and well-being of the Redoubt. Yet, for all that I have set down, we travelled much, always.</p>
          <h1>On deer horse aboard tritely yikes</h1>
          <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
          <ul className="ul">
            <li>
              <img src="./img/triangle.png" alt="triangle"/>
              <p>This however showed weasel</p>
            </li>
            <li>
              <img src="./img/triangle.png" alt="triangle" />
              <p>Well uncritical so misled</p>
            </li>
            <li>
              <img src="./img/triangle.png" alt="triangle" />
              <p>Goodness much until that fluid owl</p>
            </li>
          </ul>
          <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
          <h2>Overlaid the jeepers uselessly much excluding</h2>
          <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. </p>
          <img className="imgg" src="./img/blog-2.png" alt="blog 2"/>
          <span className="span">This is a caption</span>
          <p>The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again.</p>
          <ul className="social-media">
            <li>
              {
                // eslint-disable-next-line
                <a href="#">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 10 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.66667 5.33333H0V8H2.66667V16H6.66667V8H9.09333L9.33333 5.33333H6.66667V4.22267C6.66667 3.58533 6.79467 3.33333 7.41067 3.33333H9.33333V0H6.128C3.73067 0 2.66667 1.056 2.66667 3.07733V5.33333Z"
                      fill="#98918E"
                    />
                  </svg>
                </a>
              }
            </li>
            <li>
              {
                // eslint-disable-next-line
                <a
                  href="https://www.instagram.com/salohiddin_dilmatov/"
                  target="_blank"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 0C5.82667 0 5.556 0.00933333 4.70133 0.0493333C1.79467 0.182667 0.181333 1.79467 0.048 4.70133C0.00933333 5.556 0 5.828 0 8C0 10.1733 0.00933333 10.4453 0.048 11.2987C0.181333 14.204 1.79467 15.8187 4.70133 15.952C5.556 15.9907 5.82667 16 8 16C10.1733 16 10.4453 15.9907 11.3 15.952C14.2013 15.8187 15.8213 14.2067 15.952 11.2987C15.9907 10.4453 16 10.1733 16 8C16 5.828 15.9907 5.556 15.952 4.70133C15.8213 1.79867 14.2067 0.181333 11.3 0.0493333C10.4453 0.00933333 10.1733 0 8 0ZM8 1.44267C10.136 1.44267 10.3893 1.45067 11.2333 1.48933C13.4027 1.588 14.4133 2.616 14.5133 4.768C14.5507 5.612 14.5587 5.864 14.5587 8C14.5587 10.136 14.5507 10.3893 14.5133 11.232C14.4133 13.3827 13.404 14.4133 11.2333 14.512C10.3893 14.5493 10.1373 14.5587 8 14.5587C5.864 14.5587 5.61067 14.5507 4.768 14.512C2.59467 14.412 1.588 13.38 1.488 11.232C1.45067 10.3893 1.44133 10.136 1.44133 8C1.44133 5.864 1.45067 5.61067 1.488 4.768C1.58667 2.61467 2.59733 1.58667 4.768 1.488C5.61067 1.44933 5.864 1.44267 8 1.44267ZM3.892 8C3.892 5.73067 5.732 3.892 8 3.892C10.268 3.892 12.108 5.732 12.108 8C12.108 10.2693 10.268 12.108 8 12.108C5.732 12.108 3.892 10.2693 3.892 8ZM8 10.6667C6.52667 10.6667 5.33333 9.47333 5.33333 8C5.33333 6.528 6.52667 5.33333 8 5.33333C9.472 5.33333 10.668 6.52667 10.668 8C10.668 9.47333 9.472 10.6667 8 10.6667ZM11.3093 3.73067C11.3093 3.2 11.74 2.77067 12.2693 2.77067C12.8013 2.77067 13.2307 3.2 13.2307 3.73067C13.2307 4.26133 12.8 4.69067 12.2693 4.69067C11.7387 4.69067 11.3093 4.26 11.3093 3.73067Z"
                      fill="#98918E"
                    />
                  </svg>
                </a>
              }
            </li>
            <li>
              {
                // eslint-disable-next-line
                <a href="#">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 1.54C15.412 1.80133 14.7787 1.97733 14.1147 2.05733C14.7933 1.65067 15.312 1.008 15.5587 0.241333C14.924 0.617333 14.2213 0.890667 13.4733 1.03733C12.876 0.398667 12.0213 0 11.0787 0C8.95867 0 7.40133 1.97733 7.88 4.03067C5.15333 3.89333 2.73333 2.58667 1.11467 0.601333C0.254667 2.076 0.669333 4.00667 2.13067 4.984C1.59333 4.96667 1.088 4.81867 0.645333 4.57333C0.609333 6.09333 1.7 7.516 3.27867 7.83333C2.81733 7.95867 2.31067 7.988 1.796 7.88933C2.21333 9.19333 3.428 10.1413 4.86267 10.168C3.48 11.2507 1.74267 11.7347 0 11.5293C1.45333 12.4613 3.17733 13.004 5.03067 13.004C11.1267 13.004 14.5693 7.856 14.3613 3.23867C15.004 2.77733 15.56 2.19867 16 1.54Z"
                      fill="#98918E"
                    />
                  </svg>
                </a>
              }
            </li>
          </ul>
        
          <div className="one">
            <img src="./img/new-oval.png" alt="blog oval"/>
            <h1>John Doe</h1>
            <p>She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains.</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
