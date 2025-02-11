import React from "react";
import Sidebar from "../components/Sidebar";
import DestinationTable from "../components/DestinationTable";
import "../styles/admin.css";

const AdminPanel = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <h2 className="mb-4">Admin Dashboard</h2>
        <DestinationTable />
      </div>
    </div>
  );
};

export default AdminPanel;
