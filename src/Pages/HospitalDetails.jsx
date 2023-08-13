import { Container } from "react-bootstrap";
import Stars from "../UI/Stars";
import imgHospital from "../Assets/Img/Home/partners1.svg";
import img2 from "../Assets/Img/Home/img2.svg";
import "./centers.css";
import doctorImg1 from "../Assets/Img/Home/doctor1.svg";
import doctorImg2 from "../Assets/Img/Home/doctor2.svg";
import doctorImg3 from "../Assets/Img/Home/doctor3.svg";

import Card from "../UI/Card";
const HospitalDetails = (props) => {
  const doctors = [
    {
      img: doctorImg1,
      name: "Dr. Mia",
      spec: "Cardiologist",
      rate: 5,
      ad: {
        exp: "10 Yrs",
        country: "EG",
        visited: "2.5K",
        price: "10",
      },
    },
    {
      img: doctorImg2,
      name: "Dr. Ahmed",
      spec: "Cardiologist",
      rate: 5,
      ad: {
        exp: "10 Yrs",
        country: "EG",
        visited: "2.5K",
        price: "10",
      },
    },
    {
      img: doctorImg3,
      name: "Dr. Mina",
      spec: "Cardiologist",
      rate: 5,
      ad: {
        exp: "10 Yrs",
        country: "EG",
        visited: "2.5K",
        price: "10",
      },
    },
  ];
  return (
    <Container>
      <div className="d-flex justify-content-between mt-5">
        <img src={imgHospital} alt="" />
        <div className="d-flex">
          <div>
            <div className="d-flex">
              <h1 className="ad">
                <img src={img2} alt="" className="whiteSvg" /> Egypt
              </h1>
              <h1 className="ad price px-2">50$</h1>
            </div>
            <Stars rate={5} />
          </div>
          <div className="digansis-btns mx-3">
            <a href="/billing">Consult</a>
          </div>
        </div>
      </div>
      <p className="hospital-info mt-4">
        The Saudi German Health Group is the largest private group providing
        health services in the Middle East and North Africa. The group is a
        multi-service health care company and a health care developer, not just
        a provider. <br /> The group builds its hospitals (we have 1000 workers
        in the field of construction) and finances its projects with the support
        of the national government and development banks. The Saudi German Group
        operates its hospitals with the cooperation of several German medical
        colleges and schools. <br /> The Saudi German Health Group establishes a
        new branch every year, adding to its workforce 500 employees annually.
        The group currently employs 3000 individuals, with a growth rate of 16%
        every year.
      </p>
      <h1>Doctors work here </h1>
      <div className="doctors__holder flex-wrap cards__holder justify-content-between d-flex">
        {doctors.map((doc) => {
          return (
            <Card>
              <a href="/doctordetails">
                <div className="mb-5 doctor__info flex-wrap d-flex align-items-center">
                  <img src={doc.img} alt="" />
                  <div className="doctor__data">
                    <p className="doctor__name">{doc.name}</p>
                    <p className="doctor__spec">{doc.spec}</p>
                    <Stars rate={doc.rate} />
                  </div>
                </div>
                <a
                  href="/doctordetails"
                  style={{
                    display: "block",
                    direction: "rtl",
                    fontSize: "15px",
                    color: "#4A94FC",
                  }}
                >
                  View Profile
                </a>
              </a>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default HospitalDetails;
