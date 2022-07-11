import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./Container/Home";
import Departments from "./Container/Departments";
import Doctors from "./Container/Doctors";
import Medicine from "./Container/Medicine";
import About from "./Container/About";
import Contact from "./Container/Contact";
import BookAppointment from "./Container/Appoinment/BookAppointment";
import ListAppointment from "./Container/Appoinment/ListAppointment";
import Login from "./Container/Login";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/doctors" component={Doctors} />
        <Route exact path="/medicine" component={Medicine} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/book-appointment" component={BookAppointment} />
        <Route exact path="/list-appointment" component={ListAppointment} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
