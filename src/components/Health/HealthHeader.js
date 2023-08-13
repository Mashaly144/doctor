import { Container } from "react-bootstrap";
import slideImg1 from "../../Assets/Img/Health/healthheader.svg";
import "./healthheader.css";
const HealthHeader = () => {
  return (
    <Container>
      <section className="health__header home__landing d-flex align-items-center">
        <div className="slide__content">
          <h1>Strategies to prevent heart disease</h1>
          <p>
            You can prevent heart disease by following a heart-healthy
            lifestyle. Here are strategies to help you protect your heart.
          </p>
          <a href="/survey">Consult Now !</a>
        </div>

        <img src={slideImg1} alt="" className="" />
      </section>
    </Container>
  );
};
export default HealthHeader;
