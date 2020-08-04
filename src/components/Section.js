import React, { Component } from "react";
import Home from "./section/Home";
import Blog from "./section/Blog";
import Contact from "./section/Contact";
import About from "./section/About";
import Login from "./section/Login";
import { Route } from "react-router-dom";
import Register from "./section/Register";
import Forgetpassword from "./section/ForgetPassword";
export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Home} exact />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/res" component={Register} />
        <Route path="/getpass" component={Forgetpassword} />
      </section>
    );
  }
}

export default Section;
