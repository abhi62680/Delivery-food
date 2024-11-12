import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import {  NavLink  } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink  to='/Add'className="sidebar-option">
          <img src={assets.add_icon} alt="Add Icon" />
          <p>Add Items</p>
        </NavLink>
        <NavLink  to='./List'className="sidebar-option">
          <img src={assets.order_icon} alt="Add Icon" />
          <p>List Icom</p>
        </NavLink>
        <NavLink to='/Order'className="sidebar-option">
          <img src={assets.order_icon} alt="Add Icon" />
          <p>Order</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
