import "./InputField.css";
const InputField = (props) => {
  return (
    <div className={`${props.className} input__holder`} style={props.style}>
      <input
        id={props.label}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.label}
      />
      <label htmlFor={props.label}>{props.label}</label>
    </div>
  );
};
export default InputField;
