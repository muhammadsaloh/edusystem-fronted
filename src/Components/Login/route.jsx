import { Link } from "react-router-dom";
import "./route.scss";

import { useState, useEffect } from "react";

function Login() {
  const [phone, setPhone] = useState("");
  const [submit, setSubmit] = useState(false);
  const [span, setSpan] = useState("");

  useEffect(() => {
    if (submit && phone) {
      (async () => {
        const response = await fetch("http://198.211.103.92:9010/users/login", {
          method: "post",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            phone,
          }),
        });
        const json = await response.json();
        // console.log(json);
        let { id, code } = json;
        // eslint-disable-next-line
        if ((id, code)) {
          window.localStorage.setItem("id", id);
          window.localStorage.setItem("code", code);
        }
        if(json.ok) {
          window.location.href = "http://198.211.103.92:3000/validate-code";
        }

        setSubmit(false);
        setPhone("");
        setSpan(json.message);
      })();
    }
  }, [submit, phone, span]);

  return (
    <>
      <main className="main-login">
        <div className="container">
          <h1>EDCT</h1>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmit(true);
              e.target.reset();
              setSpan();
            }}
          >
            <h2>Login</h2>
            <span className="alert">{span}</span>
            <input
              type="number"
              required
              placeholder="Telefon raqam"
              autoComplete="off"
              spellCheck={false}
              autoFocus={true}
              name="phone"
              onKeyUp={(e) => setPhone(e.target.value.trim())}
            />
            <div>
              <button>Login</button>
            </div>
          </form>
          <div className="one">
            <span>New User ?</span>
            <Link to="/registration">Registration</Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
