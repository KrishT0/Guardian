import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PreFooter from "./components/Home/links/PreFooter"
import Footer from "./components/Footer/footer";

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <PreFooter />
      <Footer />
    </>
  );
}

export default Root;
