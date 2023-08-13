import "./App.css";
import { createBrowserRouter, Navigate, RouterProvider, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Root from "./components/Root/Root";
import ErrorPage from "./components/Root/ErrorPage";
import Home from "./Pages/Home";
import Health from "./Pages/Health";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Survey from "./Pages/Survey";
import DoctorsPage from "./Pages/DoctorsPage";
import DoctorDetailsPage from "./Pages/DoctorDetailsPage";
import { Billing } from "./Pages/Billing";
import Diagnsis from "./Pages/Diagnsis";
import Centers from "./Pages/Centers";
import HospitalDetails from "./Pages/HospitalDetails";
import { useEffect, useState } from "react";
import AuthService from "./HOOK/auth.service";
import PatientDashboard from "./Pages/Dashboard/PatientDashboard";
import DoctorDashboard from "./Pages/Dashboard/DoctorDashboard";


function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  const logOut = () => {
    console.log("test")
    AuthService.logout();
    setCurrentUser(undefined);
    
  }; 
console.log(currentUser)
  useEffect(()=>{
const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  },[])
  console.log(currentUser?.redirect_to === "/patient-dashboard/")
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root logOut={logOut} currentUser={currentUser} />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/health", element: <Health /> },
        { path: "/survey", element: <Survey /> },
        { path: "/doctors", element: <DoctorsPage /> },
        { path: "/doctordetails", element: <DoctorDetailsPage /> },
        { path: "/digansis", element: <Diagnsis /> },
        { path: "/centers", element: <Centers /> },
        { path: "/hospitaldetails", element: <HospitalDetails /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/billing", element: <Billing /> },
    { path: "/patient-dashboard/:id", element: <PatientDashboard user={currentUser} logOut={logOut} /> },
    { path: "/doctor-dashboard/:id", element:  <DoctorDashboard user={currentUser} logOut={logOut} /> },
    
  ]);
  console.log(currentUser?.redirect_to === "/patient-dashboard/")

  return <RouterProvider router={router} />;
}

export default App;
