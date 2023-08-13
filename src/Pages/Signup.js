import { useState,useRef } from "react";
import LoginPattern from "../UI/LoginPattern";
import InputField from "../UI/InputField";
import CheckBox from "../UI/CheckBox";
import Button from "../UI/Button";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthService from "../HOOK/auth.service";
import notify from "../HOOK/useNotifaction";

import "./Signup.css";
import uploadArrow from "../Assets/Icons/uploadArrow.svg";


export default function Signup() {
  const [signDefault, setSignDefault] = useState(true);
  const [signDoctor, setSignDoctor] = useState(false);
  const [signPatient, setSignPatient] = useState(false);
 
const navigate = useNavigate();

  // State for all inputs
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [country, setCountry] = useState("");
    const [loading, setLoading] = useState(true);
    const [gender , setGender] = useState("Male")
    const [message, setMessage] = useState({});
    const [specialist, setSpecialist] = useState("");
    const [certificate, setCertificate] = useState(null);
    const [hospital, setHospital] = useState("");
    const [cv, setCv] = useState(null);

  // all method to get input value
    const onChangeName = (e) => {
      setName(e.target.value);
    };
    const onChangeFirstName = (e) => {
      setFirstName(e.target.value);
    };
    const onChangeLastName = (e) => {
      setLastName(e.target.value);
    };
    const onChangeEmail = (e) => {
      setEmail(e.target.value);
    };
    const onChangePhone = (e) => {
      setPhone(e.target.value);
    };
    const onChangePassword = (e) => {
      setPassword(e.target.value);
    };
    const onChangeConfirmPassword = (e) => {
      setConfirmPassword(e.target.value);
    };
    const onChangeCountry = (e) => {
      setCountry(e.target.value);
    };
    const onChangeSpecialist = (e) => {
      setSpecialist(e.target.value);
    };
    const onChangeHospital = (e) => {
      setHospital(e.target.value);
    };
    const onChangeCertificate = (e) => {
      setCertificate(e.target.files[0]);
    };
    const onChangeCv = (e) => {
      setCv(e.target.files[0]);
    };

  // function to valid all inputs
    const validationValues = () => {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (name === "") {
      notify("Please enter username", "error");
      return;
    }
    if (!email.match(validRegex)) {
      notify("Please enter Valid Email", "error");
      return;
    }

    if (firstName === "") {
      notify("Please enter First Name", "error");
      return;
    }
    if (lastName === "") {
      notify("Please enter Last Name", "error");
      return;
    }
    if (country === "") {
      notify("Please enter Your Country", "error");
      return;
    }
    if (phone.length <= 10) {
      notify("Please enter Valid Phone Number", "error");
      return;
    }
    if (password !== confirmPassword) {
      notify("من فضلك تاكيد من كلمه السر", "error");
      return;
    }
     };

  const OnSubmit = async (e) => {
    e.preventDefault();
    validationValues();
    setLoading(true); 
    try {
      const response = await AuthService.registerForPatient(
        name,
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        country,
        gender,
        phone
      );
      console.log(response)
      if(response.status === 201){
        notify("Account create succesfuly" , "success")
        setTimeout(()=>{
          navigate("/")
        },2000)
      }
    } catch (error) {
  console.log(error)
  setMessage(error)
      notify(message.response?.data.username[0], "error");
    }
    
    setLoading(false);
    
  };
 const doctorRegister = async (e)=>{
  e.preventDefault();
  
  setLoading(true); 
  try {
    const formData = new FormData();
    formData.append("username", name);
    formData.append("email", email);
    formData.append("password1", password);
    formData.append("password2", confirmPassword);
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("country", country);
    formData.append("gender", gender);
    formData.append("Phone_number", phone);
    formData.append("specialist", specialist);
    formData.append("certificate", certificate);
    formData.append("hospital_or_center", hospital);
    formData.append("cv", cv);

    const response = await AuthService.registerForDoctor(formData);

    if (response.status === 201) {
      notify("Account created successfully", "success");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  } catch (error) {
console.log(error)
setMessage(error)
    notify(message.response?.data.username[0], "error");
  }
  
  setLoading(false);
 }
  const showDoctor = () => {
    setSignDefault(false);
    setSignDoctor(true);
    setSignPatient(false);
  };
  const showPatient = () => {
    setSignDefault(false);
    setSignDoctor(false);
    setSignPatient(true);
  };
  return (
    <>
      {/* HOME PAGE */}
      {signDefault && (
        <LoginPattern head="­">
          <div className="text-center d-flex flex-column align-items-center">
            <h1>Sign Up as</h1>
            <p
              style={{ cursor: "pointer" }}
              className="btn__handler"
              onClick={showDoctor}
            >
              Doctor
            </p>
            <p
              style={{ display: "inline-block", cursor: "pointer" }}
              className="btn__handler"
              onClick={showPatient}
            >
              Patient
            </p>
          </div>
        </LoginPattern>
      )}

      {/* DOCTOR PAGE */}
      {signDoctor && (
        <LoginPattern head="Sign Up">
          <form style={{scale:".9"}} className="signup__doctor__form" onSubmit={doctorRegister} enctype="multipart/form-data">
          <div className="d-flex justify-content-between">
  <InputField
    className="col-lg-5"
    label="First Name"
    type="text"
    value={firstName}
    onChange={onChangeFirstName}
  />
  <InputField
    className="col-lg-5"
    type="text"
    label="Last Name"
    value={lastName}
    onChange={onChangeLastName}
  />
</div>
          <div className="d-flex justify-content-between">
  <InputField
    className="col-lg-5"
    label="Name"
    type="text"
    value={name}
    onChange={onChangeName}
  />
  <InputField
    className="col-lg-5"
    type="text"
    label="Email"
    value={email}
    onChange={onChangeEmail}
  />
</div>
<div className="d-flex justify-content-between">
  <InputField
    className="col-lg-5"
    label="Country"
    type="text"
    value={country}
    onChange={onChangeCountry}
  />
  <InputField
    className="col-lg-5"
    type="text"
    label="Phone Number"
    value={phone}
    onChange={onChangePhone}
  />
</div>
<div className="d-flex justify-content-between">
  <InputField
    className="col-lg-5"
    label="Password"
    type="password"
    value={password}
    onChange={onChangePassword}
  />
  <InputField
    className="col-lg-5"
    type="password"
    label="Confirm Password"
    value={confirmPassword}
    onChange={onChangeConfirmPassword}
  />
</div>
<div className="d-flex justify-content-between">
  <InputField
    className="col-lg-5 col-12"
    label="Hospital"
    type="text"
    value={hospital}
    onChange={onChangeHospital}
  />
  <InputField
    className="col-lg-5 col-12"
    type="text"
    label="Specialist"
    value={specialist}
    onChange={onChangeSpecialist}
  />
</div>
<div className="d-flex justify-content-between">
  <div className="upload__btn__holder col-lg-5">
    <input
      type="file"
      className="upload__btn"
      id="CV"
      name="cv"
      onChange={onChangeCv}
    />
    <label htmlFor="CV" className="d-flex justify-content-between">
      <span>CV</span> <img src={uploadArrow} alt="" />
    </label>
  </div>
  <div className="upload__btn__holder col-lg-5">
    <input
      type="file"
      className="upload__btn"
      id="Certificate"
      name="certificate"
      onChange={onChangeCertificate}
    />
    <label
      htmlFor="Certificate"
      className="d-flex justify-content-between"
    >
      <span>Certificate</span> <img src={uploadArrow} alt="" />
    </label>
  </div>
</div>
<div className="d-flex">
  <CheckBox id="remeber" />
  <p>Remember me</p>
</div>
<div className="d-flex">
  <CheckBox id="term" />{" "}
  <p>
    I've read and agree with{" "}
    <Link style={{ color: "var(--main-color)" }}>
      Terms of Service
    </Link>{" "}
    and our{" "}
    <Link style={{ color: "var(--main-color)" }}>
      Privacy Policy
    </Link>
  </p>
</div>

            <Button name="Sign up" />
            <p className="text-center backto__btn">
              Already have an account? <Link to={"/login"}>Log in</Link>
            </p>
          </form>
        </LoginPattern>
      )}

      {/* PATIENT PAGE */}
      {signPatient && (
        <LoginPattern head="Sign Up">
          <form className="signup__doctor__form" onSubmit={OnSubmit}>
            <div className="d-flex justify-content-between">
              <InputField
                value={name}
                className="col-lg-5"
                label="Name"
                onChange={onChangeName}
                type="text"
              />
              <InputField
                value={email}
                className="col-lg-5"
                type="text"
                label="Email"
                onChange={onChangeEmail}
              />
            </div>
            <div className="d-flex justify-content-between">
              <InputField
                value={firstName}
                className="col-lg-5"
                label="FirstName"
                onChange={onChangeFirstName}
                type="text"
              />
              <InputField
                value={lastName}
                className="col-lg-5"
                type="text"
                onChange={onChangeLastName}
                label="LastName"
              />
            </div>
            <div className="d-flex justify-content-between">
              <InputField
                value={country}
                className="col-lg-5"
                label="Country"
                onChange={onChangeCountry}
                type="text"
              />
              <InputField
                value={phone}
                className="col-lg-5"
                type="text"
                label="Phone Number"
                onChange={onChangePhone}
              />
            </div>
            <div className="d-flex justify-content-between">
              <InputField
                value={password}
                className="col-lg-5"
                label="Password"
                type="password"
                onChange={onChangePassword}
              />
              <InputField
                value={confirmPassword}
                className="col-lg-5"
                type="password"
                label="Confirm Password"
                onChange={onChangeConfirmPassword}
              />
            </div>

            <div className="d-flex ">
              <CheckBox id="remeber" /> <p>Remember me</p>
            </div>
            <div className="d-flex ">
              <CheckBox id="term" />{" "}
              <p>
                I've read and agree with{" "}
                <Link style={{ color: "var(--main-color)" }}>
                  Terms of Service
                </Link>{" "}
                and our{" "}
                <Link style={{ color: "var(--main-color)" }}>
                  Privacy Police
                </Link>
              </p>
            </div>
            <Button name="Sign up"  />
            <p className="text-center backto__btn">
              Already have an account? <Link to={"/login"}>Log in</Link>
            </p>
          </form>
        </LoginPattern>
      )}
      <ToastContainer />
    </>
  );
}
