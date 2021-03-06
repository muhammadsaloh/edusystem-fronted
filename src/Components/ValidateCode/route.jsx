import "./route.scss";

import { useState, useEffect } from "react";
let n = window.localStorage.getItem("code");
let tokenn = window.localStorage.getItem("token");
if (!tokenn && n) {
  alert(`${n}`);
}
function ValidateCode() {
  const [code, setCode] = useState("");
  const [submit, setSubmit] = useState(false);
  const [span, setSpan] = useState("");

  useEffect(() => {
    if (submit && code) {
      (async () => {
        let id = window.localStorage.getItem("id");

        const response = await fetch(
          "http://198.211.103.92:8090/users/validate-code",
          {
            method: "post",
            headers: {
              "Content-type": "application/json",
              "code-Validation-Id": id,
            },
            body: JSON.stringify({
              code,
            }),
          }
        );

        const json = await response.json();

        let { token } = json;
        try {
          if (token) {
            window.localStorage.setItem("token", token);
            window.location.href = "http://198.211.103.92:8080/";
          }
        } catch (e) {
          console.log(e);
        }
        setSubmit(false);
        setCode("");
        setSpan(json.message);
      })();
    }
  }, [submit, code, span]);

  return (
    <>
      <main className="main-login">
        <div className="container">
          <h1>Ferrari</h1>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmit(true);
              e.target.reset();
              setSpan();
            }}
          >
            <h2>Validate</h2>
            <span className="alert">{span}</span>
            <input
              type="number"
              required
              placeholder="Code"
              autoComplete="off"
              spellCheck={false}
              autoFocus={true}
              name="code"
              onKeyUp={(e) => setCode(e.target.value.trim())}
            />
            <div>
              <button>Validate</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default ValidateCode;
