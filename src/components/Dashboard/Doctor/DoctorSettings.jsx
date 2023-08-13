import React from "react"
import Button from "../../../UI/Button";
import accountImg from '../../../Assets/Img/account settings.svg'
import InputField from "../../../UI/InputField";
const DoctorSettings = (props) => {
  return (
    <>
    
      <div className="py-4 px-2 white-box">
       <div><img src={accountImg} alt="" /></div>
       <div style={{margin:"30px 0 0 -50px"}}>
       <div className="d-flex justify-content-around">
              <InputField className="col-lg-4" label="Full Name" type="text" />
              <InputField className="col-lg-4" type="text" label="Email" />
            </div>
            <div className="d-flex justify-content-around">
              <InputField className="col-lg-4" label="Username" type="text" />
              <InputField
                className="col-lg-4"
                type="text"
                label="Phone Number"
              />
            </div>
            </div>
            <div className="d-flex align-items-center">
              <button className="btn__handler">
                Update Profile
              </button>
             <p className="mx-5" style={{fontSize:"20px",marginTop:"14px" , cursor:"pointer"}}> Reset</p>
            </div>
      </div>
       </>
  )
};

export default DoctorSettings;
