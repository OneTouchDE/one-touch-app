import Attendance from "./components/attendance/Attendance";
import Dashboard from "./components/dashboard/Dashboard";
import Youths from "./components/youths/Youths";
import Report from "./components/reports/Report";
import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./components/login/Login";
import Home from "./components/layout/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/youths" element={<Youths />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/report" element={<Report />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
