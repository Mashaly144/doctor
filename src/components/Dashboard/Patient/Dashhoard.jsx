import React from "react"
import correctImg from "../../../Assets/Icons/correct.svg"
import wrongImg from "../../../Assets/Icons/wrong.svg"
import downArrow from '../../../Assets/Icons/downarrow.svg'
import pendingImg from '../../../Assets/Icons/pending.png'
import { Link } from "react-router-dom"
const Dashboard = (props) => {
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
        <div className="box p-4 mt-5"> 
        <p style={{fontSize:"26px" , fontWeight:"700", opacity:".8"}}>Doctors diagnosis</p>
        <table className="patient__table">
<thead>
  <tr>
    <th></th>
    <th style={{width:'240px'}}> Dr Name</th>
    <th>Disease</th>
    <th style={{width:"240px"}}>Diagonsis</th>
    <th>Approval</th>
  </tr>
</thead>
<tbody>
  
<tr href="/" className="">
  
    <td><Link to={"/patient-dashboard/reports"}><div><img style={{width:"25px"}} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" /></div></Link></td>
    <td><Link to={"/patient-dashboard/reports"}><div>Dr.Ahmed</div></Link></td>
    <td><Link to={"/patient-dashboard/reports"}><div>Heart Care</div></Link></td>
    <td><Link to={"/patient-dashboard/reports"}><div>Abnormal Heartbeat</div></Link></td>
    <td><Link to={"/patient-dashboard/reports"}><div><img src={correctImg} alt="" /></div></Link></td>
    <td><Link to={"/patient-dashboard/reports"}><div><img src={downArrow} alt="" /></div></Link></td>
    

  </tr>
  <tr className="">
    <td><div><img style={{width:"25px"}} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" /></div></td>
    <td><div>Dr Tarek Mostafa</div></td>
    <td><div>Heart Care</div></td>
    <td><div>Abnormal Heartbeat</div></td>
    <td><div><img style={{width:"25px", height:"25px"}} src={pendingImg} alt="" /></div></td>
    <td><div><img src={downArrow} alt="" /></div></td>

  </tr>
  <tr className="">
    <td><div><img style={{width:"25px"}} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" /></div></td>
    <td><div>Dr Ahmed Ezz</div></td>
    <td><div>Heart Care</div></td>
    <td><div>Abnormal Heartbeat</div></td>
    <td><div><img src={wrongImg} alt="" /></div></td>
    <td><div><img src={downArrow} alt="" /></div></td>
  
  </tr>

</tbody>
</table>


        </div>
        
        <div className="d-flex justify-content-start">
      <button className="btn__handler">
        View Survey
      </button>
       </div>
       </>
  )
};

export default Dashboard;
