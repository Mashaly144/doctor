import SectionHeader from "../../UI/SectionHeader";
import { Carousel, Container } from "react-bootstrap";
import slideImg from "../../Assets/Img/Home/feedback.svg";
import Stars from "../../UI/Stars";
import "./feedback.css";
export default function FeedBack() {
  return (
    <Container>
      <section className="feedback" id="feedback">
        <SectionHeader
          head="Feedback"
          content="Our patients feedback about us"
          center={true}
        />
        <Carousel controls={true} indicators={false} className="slider__holder">
          <Carousel.Item>
            <div className="home__slide d-flex align-items-center justify-content-between">
              <div className="img__holder col-xl-4 ">
                <img src={slideImg} alt="" className="" />
              </div>
              <div className="slide__content col-xl-7 ">
                <h1>Edward Newgate</h1>
                <Stars rate={5} />
                <p>
                  Dr Mia is a great doctor, she’s very helpful and takes time
                  with the patient to help them. highly recommend him to anyone
                  looking for a specialist.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="home__slide flex-wrap d-flex align-items-center justify-content-between">
              <div className="img__holder col-xl-4 ">
                <img src={slideImg} alt="" className="" />
              </div>
              <div className="slide__content col-xl-7 ">
                <h1>Edward Newgate</h1>
                <Stars rate={5} />
                <p>
                  Dr Mia is a great doctor, she’s very helpful and takes time
                  with the patient to help them. highly recommend him to anyone
                  looking for a specialist.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="home__slide flex-wrap d-flex align-items-center justify-content-between">
              <div className="img__holder col-xl-4 ">
                <img src={slideImg} alt="" className="" />
              </div>
              <div className="slide__content col-xl-7  ">
                <h1>Edward Newgate</h1>
                <Stars rate={5} />
                <p>
                  Dr Mia is a great doctor, she’s very helpful and takes time
                  with the patient to help them. highly recommend him to anyone
                  looking for a specialist.
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </Container>
  );
}
