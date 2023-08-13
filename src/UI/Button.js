import "./Button.css";
export default function Button(props) {
  return (
    <div className="d-flex justify-content-center">
      <button className="btn__handler" onClick={props.onClick}>
        {props.name}
      </button>
    </div>
  );
}
