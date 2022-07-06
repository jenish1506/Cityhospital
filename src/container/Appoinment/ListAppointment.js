import React from "react";
import { NavLink } from "react-router-dom";

const ListAppointment = () => {
  return (
    <>
      <section id="appointment" className="appointment section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Make an Appointment</h2>
            <div className="row">
              <div className="col-6 text-end">
                <NavLink to="/book-appointment">Book an Appointment</NavLink>
              </div>
              <div className="col-6 text-start">
                <NavLink to="/list-appointment">List an Appointment</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListAppointment;
