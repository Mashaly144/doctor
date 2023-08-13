import { Container } from "react-bootstrap";
import Card from "../../UI/Card";
import SectionHeader from "../../UI/SectionHeader";
import "./Services.css";
import serviceImg1 from "../../Assets/Img/Home/service1.svg";
import serviceImg2 from "../../Assets/Img/Home/service2.svg";
import serviceImg3 from "../../Assets/Img/Home/service3.svg";
export default function Services() {
  const services = [
    {
      img: serviceImg1,
      head: "Check health complaints",
      content: "Check the disease so you can easily choose the Problem.",
    },
    {
      img: serviceImg2,
      head: "Make a Consultation",
      content:
        "Make a schedule with the doctor concerned so you can start the examination.",
    },
    {
      img: serviceImg3,
      head: "MRI & ECG Scan",
      content: "upload your MRI scan to help system diagnose.",
    },
  ];
  return (
    <Container>
      <section className="services" id="services">
      <SectionHeader
          head="Services"
          content="step by step to get your solutions"
          center={true}
        />
        <div className="services__holder cards__holder justify-content-between d-flex">
          {services.map((ser) => {
            return (
              <Card cl="col-sm-12">
                <a href="/survey">
                  <h1 className="d-flex align-items-center">
                    <img className="whiteSvg" src={ser.img} alt="" />
                    {ser.head}
                  </h1>
                  <p>{ser.content}</p>
                </a>
              </Card>
            );
          })}
        </div>
      </section>
    </Container>
  );
}
