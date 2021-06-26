import "./route.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Header from "../../Components/Header/route";
import male from "../img/user.png";
import female from "../img/female.png";

function Accaunt() {
  return (
    <>
      <Header />
      <Get />
    </>
  );
}

const Get = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, serRole] = useState("");
  const [bdate, setBdate] = useState("");
  // eslint-disable-next-line
  const [photo, setPhoto] = useState("");
  const [gender, setGender] = useState("");

  const setExit = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("code");
    window.localStorage.removeItem("id");
    window.location.reload();
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    (async () => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      };
      let response = await fetch("http://localhost:9010/users", { headers });

      let json = await response.json();
      const { name, email, phone, role, bdate, photo, gender } = json.data;

      setName(name);
      setEmail(email);
      setPhone(phone);
      serRole(role);
      setBdate(moment(bdate).utc().format("MM/DD/YYYY"));
      setPhoto(photo);
      setGender(gender);
    })();
  }, []);

  return (
    <>
      <main className="main-accaunt">
        <div className="container">
          <h1>Accaunt</h1>
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
            <span>Accaunt</span>
          </div>
          <section className="main-data">
            <div className="img">
              {gender === "male" ? (
                <img src={male} alt="user png" width="100" height="100" />
              ) : (
                <img src={female} alt="user png" width="100" height="100" />
              )}
            </div>
            <ul>
              <li>Name: {name}</li>
              <li>Email: {email}</li>
              <li>Tel: {phone}</li>
              <li>Role: {role}</li>
              <li>Birthday: {bdate}</li>
              <li>Gender: {gender}</li>
              <button color="danger" onClick={toggle}>
                Edit
              </button>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit</ModalHeader>
                <ModalBody>
                  <Edit />
                </ModalBody>
                <ModalFooter className="justify-content-md-center justify-content-xl-between">
                  <Button color="danger" onClick={setExit}>
                    Exit
                  </Button>
                  <Button color="secondary" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};

const Edit = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [bdate, setDate] = useState("");
  const [span, setSpan] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (submit && name && gender && email && bdate) {
      (async () => {
        const response = await fetch("http://localhost:9010/users/edit", {
          method: "post",
          headers: {
            "Content-type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            name,
            gender,
            email,
            bdate,
          }),
        });

        const json = await response.json();

        setSubmit(false);
        setName("");
        setGender("");
        setEmail("");
        setDate("");
        setSpan(json.message);
        window.location.reload();
      })();
    }
  }, [name, bdate, span, email, gender, submit]);

  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmit(true);
          e.target.reset();
          setSpan();
        }}
      >
        <span className="alert">{span}</span>

        <input
          type="text"
          required
          placeholder="Ismingiz"
          autoComplete="off"
          spellCheck={false}
          autoFocus={true}
          name="name"
          onKeyUp={(e) => setName(e.target.value.trim())}
        />
        <input
          type="email"
          required
          placeholder="Emailingiz"
          autoComplete="off"
          spellCheck={false}
          autoFocus={true}
          name="email"
          onKeyUp={(e) => setEmail(e.target.value.trim())}
        />
        <input
          required
          type="date"
          name="bdate"
          onChange={(e) => setDate(e.target.value.trim())}
        />

        <select
          required
          defaultValue={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="" disabled={true}>
            Select gender
          </option>
          <option value="1">Female</option>
          <option value="2">Male</option>
        </select>

        <div>
          <button>Change</button>
        </div>
      </form>
    </>
  );
};

export default Accaunt;
