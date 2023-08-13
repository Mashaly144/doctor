import React, { useEffect, useState } from "react"
import "./PatientDashboard.css"
import Dashboard from "../../components/Dashboard/Patient/Dashhoard";
import { Link, useNavigate, useParams } from "react-router-dom";
import PatientReport from "../../components/Dashboard/Patient/PatientReport";
import PatientSettings from "../../components/Dashboard/Patient/PatientSettings";

const PatientDashboard = (props) => {
  const [name , setName] = useState("")

  const param = useParams();
  useEffect(()=>{
    setName(props.user?.user.username) 
    
  },[props])
  const navigate = useNavigate()
  return (
    <div className="d-flex patient-dashboard " >
      <div style={{height:`${param.id === "reports" ? " 190vh" : ''} `}} className="col-3 px-3 py-5 logo__side justify-content-start align-items-center flex-column">
        <div className="avatar__img">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
        </div>
        <p className="text-center my-3" style={{fontSize:"20px",fontWeight:"600",color:"white"}}>{name}</p>
        <hr />
        <ul className="navbar-nav py-3">
        <li className={`nav-item ${param.id === "dashboard" ? "acitve" : ""}`}>
          <Link className="nav-link " to="/patient-dashboard/dashboard">
            <i className="bi bi-speedometer2"></i> Dashboard
          </Link>
        </li>
        <li className={`nav-item ${param.id === "reports" ? "acitve" : ""}`}>
          <Link className="nav-link" to="/patient-dashboard/reports">
            <i className="bi bi-file-earmark-bar-graph"></i> Reports
          </Link>
        </li>
        <li className={`nav-item ${param.id === "settings" ? "acitve" : ""}`}>
          <Link className="nav-link" to="/patient-dashboard/settings">
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
      <div className="col-9 px-5 py-4">
       {param.id === "dashboard" && <Dashboard/>}
       {param.id === "reports" && <PatientReport/>}
       {param.id === "settings" && <PatientSettings/>}

      </div>
    </div>
  )
};

export default PatientDashboard;
