import React from 'react';
import States from '../../components/Dashboard/Doctor/States';
import DashChartRev from '../../components/Dashboard/Doctor/DashChartRev';
import TodayAppoint from '../../components/Dashboard/Doctor/TodayAppoint';
import PatientRecords from '../../components/Dashboard/Doctor/PatientRecords';
import { useParams,useNavigate , Link } from 'react-router-dom';
import Reports from '../../components/Dashboard/Doctor/Reports';
import DoctorSettings from '../../components/Dashboard/Doctor/DoctorSettings';
import { useState } from 'react';
import { useEffect } from 'react';

const DoctorDashboard = (props) => {
const [name , setName] = useState("")
  const param = useParams();
  const navigate = useNavigate()

  useEffect(()=>{
    setName(props.user?.user.username) 
    
  },[props])
  return (
    <div className='d-flex patient-dashboard h-screen '>
      <div style={{height:`${param.id === "dashboard" ? " 180vh" : `${param.id === "appointment" ? " 170vh" : `${param.id === "reports" ? " 140vh" : ''} `} `} `  }} className="col-3 px-3 py-5 logo__side justify-content-start align-items-center flex-column">
        <div className="avatar__img">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
        </div>
        <p className="text-center my-3" style={{fontSize:"20px",fontWeight:"600",color:"white"}}>{name}</p>
        <hr />
        <ul className="navbar-nav py-3">
        <li className={`nav-item ${param.id === "dashboard" ? "acitve" : ""}`}>
          <Link className="nav-link " to="/doctor-dashboard/dashboard">
            <i className="bi bi-speedometer2"></i> Dashboard
          </Link>
        </li>
        <li className={`nav-item ${param.id === "appointment" ? "acitve" : ""}`}>
          <Link className="nav-link " style={{width:"200px"}} to="/doctor-dashboard/appointment">
            <i className="bi bi-calendar"></i> Appointment
          </Link>
        </li>
        <li className={`nav-item ${param.id === "reports" ? "acitve" : ""}`}>
          <Link className="nav-link" to="/doctor-dashboard/reports">
            <i className="bi bi-file-earmark-bar-graph"></i> Reports
          </Link>
        </li>
        <li className={`nav-item ${param.id === "settings" ? "acitve" : ""}`}>
          <Link className="nav-link" to="/doctor-dashboard/settings">
            <i className="bi bi-gear"></i> Settings
          </Link>
        </li>
        <li className="nav-item" onClick={()=>{
          props.logOut();
          navigate("/")
        }}>
          <a className="nav-link" href="#">
            <i className="bi bi-box-arrow-right"></i> Logout
          </a>
        </li>
      </ul>
      </div>
      <div className='col-9 px-5 py-4'>
        <div className='dashboard-navbar py-3 box d-flex justify-content-between align-items-center'>
          <p className='dashboard__word'>Dashboard</p>
          <form className='seacrh__form d-flex'>
            <i class='bi bi-house'></i>
            <i class='bi bi-bell'></i>

            <input
              className='form-control me-2'
              type='search'
              placeholder='Search...'
              aria-label='Search'
            />
            <img
              style={{ left: '95px' }}
              src='https://cdn-icons-png.flaticon.com/512/3031/3031293.png'
              alt=''
            />
          </form>
        </div>
     
    {param.id === "dashboard" &&   <> <States />
        <DashChartRev />
        <PatientRecords />
        </>}
        {param.id === "appointment" && <TodayAppoint/>}

        {param.id === "reports" && <Reports/>}
        {param.id === "settings" && <DoctorSettings/>}
      </div>
    </div>
  );
};

export default DoctorDashboard;