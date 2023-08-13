import React, { useState } from "react";
import doctorImg from "../Assets/Img/Home/doctor1.svg";
import { Calendar } from "primereact/calendar";
import { Container } from "react-bootstrap";
import Stars from "../UI/Stars";
import "./DoctorDetailsPage.css";
import cam from "../Assets/Icons/cam.svg";
import note from "../Assets/Icons/note.svg";

const DoctorDetailsPage = (props) => {
  const [date, setDate] = useState();
  console.log(date);
  return (
    <Container>
      <div className="d-flex doctor-details flex-wrap justify-content-center">
        <div className="col-lg-3 col-md-3 col-sm-12 d-flex flex-column align-items-center">
          <div className="doctor-details-img text-center">
            <img src={doctorImg} alt="" style={{ width: "100%" }} />
          </div>
          <div className="text-center info">
            <h2 className="">Dr Muhammed</h2>
            <h3>Saudi German Hospital</h3>
            <Stars rate={5} />
          </div>
          <Calendar
            className="cale"
            value={date}
            onChange={(e) => setDate(e.value)}
            inline
          />
          <div className="checkout-doctor d-flex">
            <a href="/billing" className="checkout-btn">
              <img src={cam} alt="" /> Written Conultation 50$
            </a>
            <a href="/billing" className="checkout-btn">
              <img src={note} alt="" /> Video 70$
            </a>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 right-side">
          <h1 className="doctor-info-header">Specialist:</h1>
          <p className="doctor-title">
            Cardiologist, Interventional Cardiologist MBBS, FCPS (Cardiology)
          </p>
          <div className="d-flex justify-content-between flex-wrap mb-5">
            <div className="doctor-experience col-lg-4 col-md-12 col-sm-12 col-12">
              <div>
                <h3 className="exp-title">Experience</h3>
                <p className="exp-info">14 year(s)</p>
              </div>
            </div>
            <div className="doctor-experience col-lg-4 col-md-12 col-sm-12 col-12">
              <div>
                <h3 className="exp-title">Satisfaction </h3>
                <p className="exp-info">100%</p>
              </div>
            </div>
            <div className="doctor-experience col-lg-4 col-md-12 col-sm-12 col-12">
              <div>
                <h3 className="exp-title">Wait Time</h3>
                <p className="exp-info">2 Days</p>
              </div>
            </div>
          </div>
          <h1 className="doctor-info-header">About:</h1>
          <p>
            Dr. Muhammed practices through Marham.pk. The Interventional
            Cardiologist has treated 145 patients and has 75 published reviews
            on Marham. <br />
            MBBS from King Edwards Medical University and FCPS from College of
            Physicians and Surgeons <br />
            The Interventional Cardiologist's, special areas of interest
            include:
            <ul>
              <li>Fast And Slow Heart Beat Management</li>
              <li>Foetal Echocardiography</li>
              <li>Adult Echocardiography</li>
            </ul>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default DoctorDetailsPage;
