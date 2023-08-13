import errorImg from "./404 error with a landscape.gif";
import "./error.css";
export default function ErrorPage() {
  return (
    <div className="error-page">
      <img src={errorImg} alt="" />
      <a href="/">Go Back</a>
    </div>
  );
}
