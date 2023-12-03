import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/youths">Youths</Link>
      <Link to="/attendance">Attendence</Link>
      <Link to="/report">Report</Link>
    </div>
  );
};

export default NavBar;
