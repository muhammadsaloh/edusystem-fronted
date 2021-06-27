import "./route.scss";
import { Link } from "react-router-dom";

// eslint-disable-next-line
export default () => {
  return (
    <>
      <footer className="footer">
        <section className="container footer__section">
          <div className="footer__section__div">
            <h1 className="footer__section__div__heading">Learning Now!</h1>
            <p className="footer__section__div__paragraph">
              By the same illusion which lifts the horizon of the sea to the
              level of the spectator.
            </p>
          </div>
          <div className="footer__section__div2">
            <button className="footer__section__div2__first">
              <span>Get started</span>
            </button>
            <Link to="/contact">
              <button className="footer__section__div2__second">
                <span>Contact</span>
              </button>
            </Link>
          </div>
        </section>
        <hr />
        <section className="container footer__section2">
          <div className="footer__section2__div1">
            <h1>EDCT</h1>
            <p>Apparently we had reached a great height in the atmosphere.</p>
          </div>
          <div className="footer__section2__div2">
            <p>Contact</p>
            <span>Email: education@edu.com</span> <br />
            <span>Phone: +1 (234) 567-89-00</span>
          </div>
          <div className="footer__section2__div3">
            <p>Subscribe</p>
            <form>
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                autoComplete="off"
                spellCheck={false}
              />
              <button>
                <span>Submit</span>
              </button>
            </form>
          </div>
        </section>
        <hr />
        <section className="container footer__section3">
          <p>Privacy Policy Terms & Conditions</p>
          <span>2021 Salohiddin</span>
        </section>
      </footer>
    </>
  );
};
