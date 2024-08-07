import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App d-flex content">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
