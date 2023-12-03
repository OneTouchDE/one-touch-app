import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <NavBar />
      <Footer />
    </div>
  );
};

export default Layout;
