import SectionHeader from "../../UI/SectionHeader";
import partnersImg1 from "../../Assets/Img/Home/partners1.svg";
import partnersImg2 from "../../Assets/Img/Home/partners2.svg";
import partnersImg3 from "../../Assets/Img/Home/partners3.svg";
import { Container } from "react-bootstrap";
export default function Partners() {
  return (
    <Container>
      <section className="partners" id="partners">
        <SectionHeader
          head={"Our Partners"}
          content="We are pleasure to work with"
          center={true}
        />
        <div className="d-flex justify-content-between">
          <img style={{ width: "20%" }} src={partnersImg1} alt="" />
          <img style={{ width: "25%" }} src={partnersImg2} alt="" />
          <img style={{ width: "20%" }} src={partnersImg3} alt="" />
        </div>
      </section>
    </Container>
  );
}
