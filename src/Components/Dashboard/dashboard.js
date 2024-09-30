import React from 'react';
import './dashboard.css'; // We'll style the component here
import Eviden from '../../assets/Eviden.jpg'
import application  from '../../assets/application.jpg'
import dashboard from '../../assets/dashboard.jpg'
import admin from '../../assets/admin.jpg'
import inventory from '../../assets/inventory.jpg'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Logo */}
        <div className="logo">
          <img src={Eviden} alt="Logo" />
        </div>

        {/* Navigation Options */}
        <nav className="nav-options">
          <ul>
            <li>
            <img src={dashboard} alt="Logo" className='nav-logo' />
                <a href="/dashboard">Dashboard</a></li>
            <li>
            <img src={admin} alt="Logo" className='nav-logo'/>
                <a href="/admin">Admin</a></li>
            <li>
            <img src={inventory} alt="Logo" className='nav-logo'/>
            
                <a href="/inventory">Inventory</a></li>
            <li>
            <img src={dashboard} alt="Logo" className='nav-logo'/>
                <a href="/company">Company</a></li>
            <li>
            <img src={dashboard} alt="Logo"className='nav-logo' />
                <a href="/audit-tools">Audit Tools</a></li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
   
        <div className="top-navbar">
          <div className="app-name">
          <img src={application} alt="Logo" className="app-logo"/>
            <h2>Carbon Emission Calculator</h2>
          </div>
          <div className="user-info">
         
            <select className="language-selector">
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
            </select>
            <span className="user-name">John Doe</span>
          </div>
        </div>

        {/* Main Dashboard Content */}
       
      </div>
    </div>
      
    
  );
};

export default Dashboard;
