import React from "react"
import Button from "../../../UI/Button";

const PatientReport = (props) => {
  return (
    <>
    <div className="dashboard-navbar py-3 box d-flex justify-content-between align-items-center">
        <p className="dashboard__word">Dashboard</p>
        <form className="seacrh__form d-flex">

        <i class="bi bi-house"></i>
        <i class="bi bi-bell"></i>

          <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
    <img style={{left:"95px"}} src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png" alt="" />
        </form>
        </div>
        <p style={{fontSize:'20px',fontWeight:"600",marginTop :"20px"}}>Suitable report</p>
        <div className="box p-4 mt-2"> 
        <p style={{fontSize:"20px" , fontWeight:"600", color:"var(--main-color)"}}>Dr.Ahmed’s Report:</p>
        <p style={{fontSize:"17px" , fontWeight:"400", lineHeight:"29px"}}>Description: Heart Trends is a diagnostic test for early detection o f myocardial ischemia in individuals without known coronary artery disease. This clinically proven test analyzes 20 minutes of heart rate data without any stressful maneuvers or heart strain. It is intended for screening patients without known coronary artery disease (CAD) who present with CAD risk factors or with atypical chest pain, offering an independent, new cardiac risk factor for enhanced patient diagnosis.</p>
        <div>
          <p style={{fontSize:"20px" ,marginTop :"20px", fontWeight:"600", color:"#B51B1B"}}>Warning</p>
          <ul className="px-5" style={{listStyle:"disc"}}>
            <li>Limit Salt</li>
            <li>Limit Sugar</li>
            <li>Limit processed carbohydrates</li>
            <li>Limit saturated fats</li>
          </ul>
          </div>
          <div>
          <p style={{fontSize:"20px" ,marginTop :"20px", fontWeight:"600", color:"#B51B1B"}}>Pharmaceutical:</p>
          <ul className="px-5" style={{listStyle:"disc"}}>
            <li>Inderal 10 mg (2 times at a day )</li>
            <li>Lanoxin (1 capsule in the morning )</li>
            <li>Corlanor ( 1 capsule in the evening)</li>
          
          </ul>
          </div>
          <p style={{fontSize:"20px" , fontWeight:"600", marginTop:"30px",color:"var(--main-color)"}}>Dr Ahmed Shared to write this report</p>
        </div>
        
        <div className="d-flex justify-content-end mb-3">
      <a href="/doctors" className="btn__handler" style={{cursor:"pointer"}}>
        Find another doctor
      </a>
      
       </div>
       <hr className="my-3 d-block" style={{width:"100%",height:"2px", backgroundColor:"black"}}/>
       <p style={{fontSize:'20px',fontWeight:"600",marginTop :"20px"}}>Feedback</p>
       <div className="box px-5 py-4">
        <textarea style={{width:"96%",border:"none",backgroundColor:"white"}} name="" id="" cols="30" rows="7" placeholder="Write your feedback about doctor"></textarea>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <p className="mx-2">Rate the doctor:</p>
            <div class='feedback-section'>
        <div class='rating'>
          <input type='radio' id='s1star5' name='s1rating' value='5' />
          <label for='s1star5'></label>
          <input type='radio' id='s1star4' name='s1rating' value='4' />
          <label for='s1star4'></label>
          <input type='radio' id='s1star3' name='s1rating' value='3' />
          <label for='s1star3'></label>
          <input type='radio' id='s1star2' name='s1rating' value='2' />
          <label for='s1star2'></label>
          <input type='radio' id='s1star1' name='s1rating' value='1' />
          <label for='s1star1'></label>
        </div>
      </div>
          </div>
          <div className="d-flex justify-content-end mb-3">
      <button className="btn__handler" style={{fontSize:"18px" , scale:".8"}}>
       Send
      </button>
      
       </div>
           </div>
       </div>
       </>
  )
};

export default PatientReport;
