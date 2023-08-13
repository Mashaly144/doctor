import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import slideImg1 from "../../Assets/Img/Home/slide1.svg";
import slideImg2 from "../../Assets/Img/Home/slide2.svg";
import slideImg3 from "../../Assets/Img/Home/slide3.svg";
import "./HomeLanding.css";
const HomeLanding = () => {
  return (
    <Container>
      <section className="home__landing" id="home">
        <Carousel controls={false} className="slider__holder">
          <Carousel.Item>
            <div className="home__slide d-flex align-items-center">
              <div className="slide__content col-lg-6 col-md-12">
                <h1>Your way to obtaining best medical treatment</h1>
                <a href="/survey">Consult Now !</a>
              </div>
              <div className="img__holder col-lg-6 col-md-12">
                <img src={slideImg1} alt="" className="" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="home__slide d-flex align-items-center">
              <div className="slide__content  col-lg-6 col-md-12">
                <h1>We connect you with the best doctors all over the world</h1>
                <a href="/survey">Consult Now !</a>
              </div>
              <div className="img__holder col-lg-6 col-md-12">
                <img src={slideImg2} alt="" className="wrong__img" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="home__slide d-flex align-items-center">
              <div className="slide__content col-lg-6 col-md-12">
                <h1>Get the right diagnosis and proper treatment</h1>
                <a href="/survey">Consult Now !</a>
              </div>
              <div className="img__holder col-lg-6 col-md-12">
                <img src={slideImg3} alt="" className="" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </Container>
  );
};
export default HomeLanding;
