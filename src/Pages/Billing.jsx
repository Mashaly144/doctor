import React, { useState, useMemo } from "react";
import "./Billing.css";
import LoginPattern from "../UI/LoginPattern";
import Select from "react-select";
import countryList from "react-select-country-list";
import mastercard from "../Assets/Img/mastercard.svg";
import visa from "../Assets/Img/Visa.svg";
import googlePay from "../Assets/Img/GooglePay.svg";
import InputField from "../UI/InputField";
import CheckBox from "../UI/CheckBox";
import { DateSelect } from "react-ymd-date-select/dist/cjs/presets/mui";
import Button from "../UI/Button";
import notify from "../HOOK/useNotifaction";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Billing = () => {
  const [date, setDate] = useState("");

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const navigate = useNavigate()
  const changeHandler = (value) => {
    setValue(value);
  };
  const submit = (e)=>{
    e.preventDefault()
    notify("Paid done" , "success")
    setTimeout(()=>{
      navigate("/")
    },2000)
  }

  return (
    <>
      <LoginPattern>
        <ToastContainer/>
        <form className="billing__form mt-5" style={{scale:'.95'}} onSubmit={submit}>
          <Select
            options={options}
            value={value}
            onChange={changeHandler}
            placeholder="Country"
            className="test"
          />
          <div className="d-flex justify-content-between px-4 my-5">
            <img src={mastercard} alt="" />
            <img src={visa} alt="" />
            <img src={googlePay} alt="" />
          </div>
          <InputField
            type="text"
            label="Cardholder:"
            className="billing-input"
          />
          <InputField
            required={false}
            type="number"
            label="Card number:"
            className="billing-input"
          />
          <div className="d-flex">
            <CheckBox id="remeber" /> <p>Save card details.</p>
          </div>
          <p style={{ color: "rgba(0, 0, 0, 0.63)", fontSize: "17px" }}>
            Expiry date
          </p>
          <div className="d-flex justify-content-between">
            <div className="date-holder">
              <DateSelect
                value={date}
                onChange={setDate}
                hideDay
                firstYear={2023}
                lastYear={2050}
              />
            </div>
            <div className="cvv-holder">
              <InputField type="number" label="cvv" />
            </div>
          </div>
          <Button name="Next" />
        </form>
      </LoginPattern>
    </>
  );
};
