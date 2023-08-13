import React from 'react';
import avater1 from '../../../Assets/Img/appointment-1.png';
import avater2 from '../../../Assets/Img/appointment-2.png';
import avater3 from '../../../Assets/Img/appointment-3.png';
import avater4 from '../../../Assets/Img/appointment-4.png';
import { Calendar } from "primereact/calendar";
import correctImg from "../../../Assets/Icons/correct.svg"
import wrongImg from "../../../Assets/Icons/wrong.svg"
import downArrow from '../../../Assets/Icons/downarrow.svg'

import './todayAppoint.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const apointementUsers = [
  {
    img: avater1,
    name: 'Rachel Greene',
    state: true,
  },
  {
    img: avater2,
    name: 'John Doe',
    state: true,
  },
  {
    img: avater3,
    name: 'Ben Affleck',
    state: true,
  },
  {
    img: avater4,
    name: 'Karina',
    state: true,
  },
];

const TodayAppoint = () => {
  const navigate = useNavigate()
  const rejectHandler =(e)=>{
   const tr = e.target.closest(".req__from__patient")
   tr.style.display = "none"
  }
const acceptHandler =(e)=>{
  navigate("/doctor-dashboard/reports")
}
  const [date, setDate] = useState();
  return (
    <>
    <div className='d-flex justify-content-between'>
    <div className='box Appointment col-6 my-4  p-4'>
      <div>
        {/* text */}
        <div className='Appointment-text'>
          <h1>Today’s appointments</h1>
          <a href='#vi'>View All</a>
        </div>
        {/* all items */}
        <div>
          {apointementUsers.map((user, index) => {
            return (
              <div key={index} className='Appointment-users '>
                {/* item */}
                <div className='Appointment-details'>
                  <img src={user.img} alt={user.name} />
                  <h4>{user.name}</h4>
                </div>
                <span></span>
              </div>
            );
          })}
        </div>
      </div>
      </div>
      <div className='col-6 px-3 my-4 '>
      <Calendar
            className="cale cale__app"
            value={date}
          
            onChange={(e) => setDate(e.value)}
            inline
          />
          </div>
    </div>
    <div className="box p-4 mt-3"> 
        <p style={{fontSize:"26px" , fontWeight:"700", opacity:".8"}}>Patient Requests</p>
        <table className="patient__table">
<thead>
  <tr>
    <th></th>
    <th> Dr Name</th>
    <th className='table-disease' >Disease</th>
    <th >Date</th>
    <th>Approval</th>
  </tr>
</thead>
<tbody>
  
<tr className="req__from__patient">
    <td><div><img style={{width:"25px"}} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" /></div></td>
    <td><div >Ezz-Eldin</div></td>
    <td><div style={{fontSize:"17px"}} >Cardiovascular failure</div></td>
    <td ><div>23/6</div></td>
    <td><div style={{cursor:"pointer"}}><img onClick={()=>{
      acceptHandler()
    }} src={correctImg} alt="" /> <img src={wrongImg} alt=""  onClick={(e)=>{
      rejectHandler(e)
    }}/></div></td>
    <td><div><img  style={{visibility:"hidden"}} src={downArrow} alt="" /></div></td>

  </tr>
  {/* <tr className="req__from__patient">
    <td><div><img style={{width:"25px"}} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" /></div></td>
    <td><div>Ezz-Eldin</div></td>
    <td><div style={{fontSize:"17px"}}>Cardiovascular failure</div></td>
    <td><div>7/4</div></td>
    <td><div style={{cursor:"pointer"}}><img onClick={()=>{
      acceptHandler()
    }} src={correctImg} alt="" /> <img src={wrongImg} alt=""  onClick={(e)=>{
      rejectHandler(e)
    }}/></div></td>
    <td><div><img  style={{visibility:"hidden"}} src={downArrow} alt="" /></div></td>

  </tr>
  <tr className="req__from__patient">
    <td><div><img style={{width:"25px"}} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" /></div></td>
    <td><div>Ezz-Eldin</div></td>
    <td><div style={{fontSize:"17px"}}>Cardiovascular failure</div></td>
    <td><div>10/4</div></td>
    <td><div style={{cursor:"pointer"}}><img onClick={()=>{
      acceptHandler()
    }} src={correctImg} alt="" /> <img src={wrongImg} alt=""  onClick={(e)=>{
      rejectHandler(e)
    }}/></div></td>
    <td><div><img  style={{visibility:"hidden"}} src={downArrow} alt="" /></div></td>
  
  </tr> */}

</tbody>
</table>


        </div>
        
            </>
  );
};

export default TodayAppoint;
