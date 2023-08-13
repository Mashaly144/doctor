import logo from "../Assets/Img/logo.svg";
import "./LoginPattern.css";
export default function LoginPattern(props) {
  return (
    <div className="d-flex">
      <div className="logo__side col-4">
        <img src={logo} alt="" />
      </div>
      <div className="login__side col-8">
        <h1>{props.head}</h1>
        <div className="form__holder">{props.children}</div>
      </div>
    </div>
  );
}
