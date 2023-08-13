import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import LoginPattern from "../UI/LoginPattern";
import notify from "../HOOK/useNotifaction";
import AuthService from "../HOOK/auth.service";
import { ToastContainer } from "react-toastify";
export default function Login() {
  const navigate = useNavigate();

//states 
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [signin, setSignIn] = useState(true);
  const [forgetPass, setForgetPass] = useState(false);
  const [otpShow, setOtpShow] = useState(false);
  const [resetPass, setResetPass] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading , setLoading] =useState(false)
  const [message , setMessage] = useState("")
// otp validation
  useEffect(() => {
    if (otp.join("") === "000000") {
      otpValid();
    }
  }, [otp]);

  //method to get inputs
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  //show and hide method
  const backToSignIn = () => {
    setSignIn(true);
    setForgetPass(false);
    setOtpShow(false);
    setResetPass(false);
  };
  const forgetPassword = (e) => {
    setSignIn(false);
    setForgetPass(true);
    setOtpShow(false);
    setResetPass(false);
  };
  const accountOtpHandler = (e) => {
    e.preventDefault();
    setSignIn(false);
    setForgetPass(false);
    setOtpShow(true);
    setResetPass(false);
  };
  const otpValid = () => {
    setSignIn(false);
    setForgetPass(false);
    setOtpShow(false);
    setResetPass(true);
  };

 // function to valid all inputs
 const validationValues = () => {
  if (name === "") {
    notify("Please enter username", "error");
    return;
  }
  if (password === "") {
    notify("من فضلك تاكيد من كلمه السر", "error");
    return;
  }
   };
  const OnSubmit = async (e) => {
    e.preventDefault();
    validationValues();
    setLoading(true); 
    try {
      const response = await AuthService.login(
        name,
        password,
      );
      console.log(response)
      if(response.user ){
        
          localStorage.setItem("user", JSON.stringify(response));
        
        notify("Welcome Back ❤" , "success")
        setTimeout(()=>{
          navigate("/")
          window.location.reload();
        },2000)
      }
    } catch (error) {
  console.log(error)
  setMessage(error)
      notify(message.response?.data.username[0], "error");
    }
    
    setLoading(false);
    
  };
 

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <>
      {/* sign in form */}
      {signin && (
        <LoginPattern head="Sign In">
          <form className="signin__form" onSubmit={OnSubmit}>
            <InputField type="text" label="Username" value={name} onChange={onChangeName}/>
            <InputField type="password" label="Password" value={password} onChange={onChangePassword}/>
            <p className="forget__password" onClick={forgetPassword}>
              Forget Password?
            </p>
            <Button name="Sign In" />
            <p className="text-center backto__btn">
              Don't have an account? <Link to={"/signup"}>Sign Up</Link>
            </p>
          </form>
        </LoginPattern>
      )}

      {/* forget password from */}
      {forgetPass && (
        <LoginPattern head="Forgot Password?">
          <form className="forget__password__form">
            <InputField type="text" label="Phone or Email" />
            <Button name="Send" onClick={accountOtpHandler} />
            <p
              className="backto__btn text-center"
              style={{ color: "var(--main-color)", cursor: "pointer" }}
              onClick={backToSignIn}
            >
              Back to Sign In
            </p>
          </form>
        </LoginPattern>
      )}

      {/* otp form */}
      {otpShow && (
        <LoginPattern head="­">
          <form className="otp__form">
            <h2>Enter your code here</h2>
            <h6>We sent code to your phone</h6>
            <div className="otps__holder d-flex justify-content-between">
              {otp.map((data, index) => {
                return (
                  <input
                    className="otp-field"
                    type="text"
                    name="otp"
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={(e) => {
                      handleOtpChange(e.target, index);
                    }}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}
            </div>
            <p className="text-center backto__btn">
              Didn’t receive a code ? <Link to={"#"}>Send again</Link>
            </p>
            <p
              className="backto__btn text-center"
              style={{ color: "var(--main-color)", cursor: "pointer" }}
              onClick={backToSignIn}
            >
              Back to Sign In
            </p>
            <p></p>
          </form>
        </LoginPattern>
      )}

      {/* Resest Password form */}
      {resetPass && (
        <LoginPattern head="­">
          <p className="forget__password">Resest Password</p>
          <form className="reset__password__form">
            <InputField type="text" label="New Password" />
            <InputField type="password" label="Confirm Password" />

            <Button name="Confirm" />
          </form>
        </LoginPattern>
      )}
       <ToastContainer />
    </>
  );
}
