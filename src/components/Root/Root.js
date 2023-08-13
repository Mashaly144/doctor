
import { Outlet } from "react-router-dom";
import NavBar from "../Outlet/NavBar";
import Footer from "../Outlet/Footer";

export default function Root(props) {
  console.log(props)
  return (
    <>
      <NavBar logOut={props.logOut} currentUser={props.currentUser} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
