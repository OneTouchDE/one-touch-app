import Attendance from "./components/attendance/Attendance";
import Dashboard from "./components/dashboard/Dashboard";
import Youths from "./components/youths/Youths";
import Youth from "./components/youths/youth";
import Report from "./components/reports/Report";
import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./components/login/Login";
import Home from "./components/layout/Home";
import { youthdata } from "./components/assets/dummydata";
import { youthType } from "./types";
import { useState } from "react";

function App() {
  const [selectedYouthId, setSelectedYouthId] = useState<number | null>(null);

  const selectedYouth = youthdata?.find(
    (youth: youthType) => youth.number === selectedYouthId
  );

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/youths"
              element={
                <Youths
                  youths={youthdata}
                  selectedYouthId={setSelectedYouthId}
                />
              }
            />
            <Route
              path="/youths/:selectedUserId"
              element={<Youth youth={selectedYouth} />}
            />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/report" element={<Report />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
