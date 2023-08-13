import { Container } from "react-bootstrap";
import "./Tips.css";
import TipCard from "./TipCard";
import img1 from "../../Assets/Img/faq/no-smoking.png";
import img2 from "../../Assets/Img/faq/2.jpg";
import img3 from "../../Assets/Img/faq/Asset 1.svg";
import img4 from "../../Assets/Img/faq/4.jpg";
import img5 from "../../Assets/Img/faq/5.png";
import img6 from "../../Assets/Img/faq/6jpg.jpg";
import img7 from "../../Assets/Img/faq/chest_x_ray_1.jpg";
export default function Tips() {
  return (
    <section className="tips" id="tips">
      <Container>
        <h1 className="tips__header">
          Get started with these seven tips <br /> for boosting your heart
          health
        </h1>
        <div className="tips__holder">
          <TipCard right={false} info="Don't smoke or use tobacco" img={img1} />
          <TipCard
            right={true}
            info="Get moving: Aim for at least 30 to 60 minutes of activity dial"
            img={img2}
          />
          <TipCard right={false} info=" Eat a heart-healthy diet" img={img3} />
          <TipCard right={true} info=" Maintain a healthy weight" img={img4} />
          <TipCard right={false} info=" Get good quality sleep" img={img5} />
          <TipCard right={true} info="Manage stress" img={img6} />
          <TipCard
            right={false}
            info=" Get regular health screenings"
            img={img7}
          />
        </div>
      </Container>
    </section>
  );
}
