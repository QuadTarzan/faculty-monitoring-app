import React, { useState, useEffect } from "react";
import Header from "./Header";
import { loadStatus } from "./storage";
import "./App.css";



const ViewOnly = () => {
  const [facultyList, setFacultyList] = useState(loadStatus() || defaultFaculty);

  // Watch for storage changes (sync when admin updates)
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "facultyStatus") {
        const updated = JSON.parse(e.newValue);
        if (updated) setFacultyList(updated);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <>
      <Header />
      <div className="app">
        <h2>Department of Architecture</h2>
        <p className="header">Faculty Status Monitor</p>
        <div className="grid">
          {facultyList.map((f) => (
            <div key={f.id} className="faculty-card">
              <img src={f.image} alt={f.name} />
              <h3>{f.name}</h3>
              <p className={`status-${f.status.replace(/\s+/g, '-')}`}>
                {f.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewOnly;
