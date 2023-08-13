import starImg from "../Assets/Img/star.svg";
export default function Stars(props) {
  const numberOfRate = [...Array(props.rate).keys()];
  return (
    <div className="star__holder d-flex">
      {numberOfRate.map(() => {
        return <img src={starImg} alt="" />;
      })}
    </div>
  );
}
