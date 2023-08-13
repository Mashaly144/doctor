import "./TipCard.css";
import tipImg from "../../Assets/Img/Health/tipimg.svg";
const TipCard = (props) => {
  return (
    <div className={props.right ? "tip__holder right" : "tip__holder"}>
      <div className="img__holder">
        <img src={props.img} alt="" />
      </div>

      <h1>{props.info}</h1>
    </div>
  );
};
export default TipCard;
