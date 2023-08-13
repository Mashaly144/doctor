import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Assets/Img/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";

import "./NavBar.css";
const NavBar = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
 
  console.log(props.currentUser)

  const data = [
    { name: "Home", href: "home" },
    { name: "AboutUs", href: "aboutus" },
    { name: "Services", href: "services" },
    { name: "Doctors", href: "doctors" },
    { name: "Partners", href: "partners" },
  ];
  return (
    <nav>
      <Container className="d-flex justify-content-between align-items-center">
        <Link to="/">
          <img className="main__logo" src={logo} alt="logo" />
        </Link>
        <div class="burger__list">
          <GiHamburgerMenu />
        </div>
        <ul className="nav__Links d-flex">
          {data.map((nav) => {
            return (
              <li className="nav__link">
                <a href={`/#${nav.href}`}>{nav.name}</a>
              </li>
            );
          })}
        </ul>


        {!props.currentUser && <div className="signs__btns__holder d-flex">
          <a href="/login" className="login__btn">
            Sign In
          </a>
          <a href="/signup" className="signup__btn">
            Sign Up
          </a>
        </div>}

        {props.currentUser && <div className="search__holder d-flex" style={{marginRight:"0 !important", width:"fit-content"}}>
        <form className="seacrh__form">
          <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
    <img src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png" alt="" />
        </form>
  
        <ul className="navbar-nav ml-auto d-flex flex-row">
          <li className="nav-item">
            {props.currentUser.user.username}
          </li>
          <li className="nav-item">
          <div  className="dropdown">
            <div style={{padding:"20px ", width:"40px" , height:"40px",}}  onClick={toggleDropdown}  >
         <img style={{width:"100%" , cursor:"pointer"}} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
      </div>
     
        <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`} >
          <li>
            <a href={props.currentUser.redirect_to + "dashboard"} className="dropdown-item ">Dashboard</a>
          </li>
          <li>
            <a href="#" className="dropdown-item " onClick={props.logOut}>Logout</a>
          </li>
        </ul>
      
    </div>
          </li>
        </ul>
      </div>}
      </Container>
    </nav>
  );
};
export default NavBar;
