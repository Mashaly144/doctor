import { Container } from "react-bootstrap";
import Card from "../../UI/Card";
import SectionHeader from "../../UI/SectionHeader";
import Stars from "../../UI/Stars";
import doctorImg1 from "../../Assets/Img/Home/doctor1.svg";
import doctorImg2 from "../../Assets/Img/Home/doctor2.svg";
import doctorImg3 from "../../Assets/Img/Home/doctor3.svg";
import cam from "../../Assets/Icons/cam.svg";
import note from "../../Assets/Icons/note.svg";
import img2 from "../../Assets/Img/Home/img2.svg";

import "./Doctors.css";

export default function Doctors() {
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
      <section className="doctors" id="doctors">
        <SectionHeader
          head="Doctors"
          content="Well  qualified doctors are ready to serve you"
          center={true}
        />
        <div className="doctors__holder cards__holder justify-content-between d-flex">
          {doctors.map((doc, i) => {
            return (
              <Card key={i}>
                <a href="/doctordetails">
                  <div className="doctor__info flex-wrap d-flex align-items-center">
                    <img src={doc.img} alt="" />
                    <div className="doctor__data">
                      <p className="doctor__name">{doc.name}</p>
                      <p className="doctor__spec">{doc.spec}</p>
                      <Stars rate={doc.rate} />
                    </div>
                  </div>
                  <div className="doctor__ads d-flex justify-content-between px-4">
                    <h1 className="ad">
                      <img src={img2} alt="" className="whiteSvg" />{" "}
                      {doc.ad.country}
                    </h1>
                    <h1 className="ad" style={{ color: "#4A94FC" }}>
                      <img
                        src={note}
                        alt=""
                        className="whiteSvg"
                        style={{
                          width: "32%",
                          marginRight: "5%",
                        }}
                      />{" "}
                      70$
                    </h1>
                    <h1 className="ad" style={{ color: "#4A94FC" }}>
                      <img
                        src={cam}
                        alt=""
                        className="whiteSvg"
                        style={{
                          width: "32%",
                          marginRight: "5%",
                        }}
                      />{" "}
                      50$
                    </h1>
                  </div>
                  <a
                    href="/doctordetails"
                    style={{
                      display: "block",
                      direction: "rtl",
                      fontSize: "15px",
                      color: "#000",
                    }}
                  >
                    View Profile
                  </a>
                </a>
              </Card>
            );
          })}
        </div>
        <a href="/doctors" className="view-more">
          View More
        </a>
      </section>
    </Container>
  );
}
