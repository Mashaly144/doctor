import React from "react";
import { Container } from "react-bootstrap";
import "./Diagnsis.css";
import downarrow from "../Assets/Icons/downarrow.svg";
const Diagnsis = (props) => {
  return (
    <Container>
      <div className="diagnsis-holder">
        <div className="d-flex justify-content-between ">
          <div className="col-4">
            <div className="box-digansis">
              <h1 className="box-header">Initial Diagnosis:</h1>
              <p className="text-center case-statue" style={{color:"red"}}>Abnormal Heartbeat</p>
            </div>
            <div className="box-digansis scan-holder d-flex">
              <h1 className="box-header">Scans</h1>
              <img src={downarrow} alt="" />
            </div>
          </div>
          <div className="col-7">
            <div className="box-digansis">
              <h1 className="box-header">Current Medical Concern:</h1>
              <ul>
                <li>
                  My heart beats too quickly and I have Chest pain , Shortness
                  of breath and Pain in the neck, jaw, throat, upper belly area
                  or back.
                </li>
                <li>
                  Easily getting short of breath during exercise or activity.
                </li>
                <li>
                  Swelling in the legs, belly area or areas around the eyes
                </li>
                <li>Irregular heartbeats (arrhythmias)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex digansis-btns justify-content-center">
          <a href="/doctors">Find a Doctor</a>
          <a href="/centers">Find a Hospital</a>
          <a href="/health">Check health complaints</a>
        </div>
      </div>
    </Container>
  );
};

export default Diagnsis;
