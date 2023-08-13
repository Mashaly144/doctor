import { Container } from "react-bootstrap";
import SectionHeader from "../../UI/SectionHeader";
import aboutImg from "../../Assets/Img/Home/AboutImg.svg";
import "./aboutus.css";
const AboutUs = () => {
  return (
    <Container>
      <section
        className="aboutus d-flex flex-wrap justify-content-between align-items-center"
        id="aboutus"
      >
        <div className="about__imgHolder col-lg-5 col-md-12">
          <img src={aboutImg} alt="" />
        </div>
        <div className="about__content col-lg-7 col-md-12">
          <SectionHeader
            head="About Us"
            content="An elite of cardiologist all over the world"
          />
          <p>
            Our goal is to help you to take care of your health especially in
            heart diseases and take a consultation from more than one doctor
            without any need to leave your home ,Our goal is to help you to take
            care of your health especially in heart diseases and take a
            consultation from more than one doctor without any need
            to leave your home.
          </p>
        </div>
      </section>
    </Container>
  );
};
export default AboutUs;
