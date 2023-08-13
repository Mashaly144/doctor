import React from 'react';
import './report.css';
import Button from '../../../UI/Button';
import img from '../../../Assets/Img/appointment-1.png';
import { useState } from 'react';
import SurveyShow from '../Patient/SurveyShow';
import { useNavigate } from 'react-router-dom';
import notify from '../../../HOOK/useNotifaction';
import { ToastContainer } from "react-toastify";

const Reports = () => {
  const[showSurvey,setshowSurvey]=useState(false)
  const navigate = useNavigate()
  const showSurveyHandler = ()=>{
    setshowSurvey(!showSurvey)
  }
  const  closeHandler = ()=>{
    setshowSurvey(!showSurvey)
  }
  return (
    <div className='report-section'>
      {showSurvey &&  <SurveyShow closeHandler = {closeHandler}/>}
      {/* about */}
      <div className='report-user-card box'>
        {/* text */}
        <div className='report-user'>
          <div className='report-user-name'>
            <img src={img} alt='userImage' />
            <h3>Ezz-Eldin’s Details</h3>
          </div>
          <span>request accepted :26/11</span>
        </div>
        <Button onClick={showSurveyHandler} name={'View Survey'} />
      </div>
      {/* select input  */}
    
      <select className='box' name='Select  Diagnosis' id='Select  Diagnosis'>
        <option value='volvo'>Normal</option>
        <option value='saab'>Myocardial Infarction</option>
        <option value='mercedes'>History of MI</option>
        <option value='audi'>Abnormal Heartbeat</option>
      </select>

      {/* report input */}
      <form className='report-from box'>
        <div className='report-card'>
         
          <div className="box px-2 py-4">
          <p>Report :</p>
        <textarea style={{width:"96%",border:"none",backgroundColor:"white"}} name="" id="" cols="30" rows="7" placeholder="Write your feedback about doctor"></textarea>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
           
          </div>
         
           </div>
       </div>
       
        </div>
        
      </form>
      <div className="d-flex justify-content-end mb-3">
      <button className="btn__handler" onClick={()=>{
        notify("Report Sent", "success")
        setTimeout(()=>{ navigate("/")},2000)
     
      }} style={{fontSize:"18px" , scale:".8"}}>
       Send
      </button>
      
       </div>
       <ToastContainer/>
    </div>
  );
};

export default Reports;