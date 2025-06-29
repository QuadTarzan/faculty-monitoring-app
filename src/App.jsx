import React, { useState, useEffect } from "react";
import Header from "./Header";
import { saveStatus, loadStatus } from "./storage";
import "./App.css";
import { facultyList as initialFacultyList } from "./FacultyData.js";

const App = () => {
  const [facultyList, setFacultyList] = useState(() => {
  return loadStatus() || initialFacultyList;
});


  useEffect(() => {
    saveStatus(facultyList);
  }, [facultyList]);

  const handleStatusChange = (id, newStatus) => {
    const updated = facultyList.map((f) =>
      f.id === id ? { ...f, status: newStatus } : f
    );
    setFacultyList(updated);
  };

  return (
    <>
      <Header />
      <div className="app">
        <h2>Department of Architecture</h2>
        <p className="header">Faculty Status Monitor</p>

        <div className="grid">
          
          {facultyList.map((f) => (
            
            <div key={f.id} className="faculty-card">
             <img src='/blank.png' alt={f.name} />

              <h3>{f.name}</h3>
              <p className={`status-${f.status.replace(/\s+/g, '-')}`}>{f.status}</p>

              <select
                value={f.status}
                onChange={(e) => handleStatusChange(f.id, e.target.value)}
              >
                <option value="Available">Available</option>
                <option value="In a Meeting">In a Meeting</option>
                <option value="On a Break">On a Break</option>
                <option value="In Class">In Class</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
