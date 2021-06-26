import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import React from "react";
import About from "./Router/About/route";
import Course from "./Router/Course/route";
import Blog from "./Router/Blog/route";
import Contact from "./Router/Contact/route";
import Login from "./Components/Login/route";
import Registration from "./Components/Registration/route";
import ValidateCode from "./Components/ValidateCode/route";
import Accaunt from "./Router/Accaunt/route";
import NotFoundPage from "./Components/NotfoundPage/route";
import "./App.scss";

function App() {
  const token = window.localStorage.getItem("token");
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/courses">
            <Course />
          </Route>
          <Route path="/blog">
            {token ? <Blog /> : <Redirect to="/login" />}
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            {!token ? <Login /> : <Redirect to="/" />}
          </Route>
          <Route path="/registration">
            {!token ? <Registration /> : <Redirect to="/" />}
          </Route>
          <Route path="/validate-code">
            {!token ? <ValidateCode /> : <Redirect to="/" />}
          </Route>
          <Route path="/accaunt">
            {token ? <Accaunt /> : <Redirect to="/" />}
          </Route>
          <Route exact component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
