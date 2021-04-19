import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/sidebar.css";

class Sidebar extends Component {
  state = {
    showsidebar: false,
  };
  sidenavClose = (e) => {
    this.setState({
      showsidebar: false,
    });
  };
  sidenavOpen = (e) => {
    this.setState({
      showsidebar: true,
    });
  };
  render() {
    if (this.state.showsidebar) {
      return (
        <div className="sidenavopen">
          <a onClick={this.sidenavClose}>
            <i className="fas fa-times"></i>
          </a>
          <NavLink to="/home">
            <i className="fas fa-home"></i> DashBoard
          </NavLink>
          <NavLink to="/inventory">
            <i className="fas fa-boxes"></i>Inventory
          </NavLink>
          <NavLink to="/orders/1">
            <i className="fas fa-shopping-cart"></i>Orders
          </NavLink>
          <NavLink to="/contacts/1">
            <i className="fas fa-phone-alt"></i>Contact
          </NavLink>
          <NavLink to="/profile/1">
            <i className="fas fa-id-card"></i> Profile
          </NavLink>
          <NavLink
            to="/SignOut"
            className="nav-link bg-danger btn text-light my-5"
          >
            Sign Out
          </NavLink>
        </div>
      );
    } else {
      return (
        <div className="sidenavclose">
          <div onClick={this.sidenavOpen}>
            <i className="fas fa-bars"></i>
          </div>
          <NavLink to="/home">
            <i className="fas fa-home"></i>
          </NavLink>
          <NavLink to="/inventory">
            <i className="fas fa-boxes"></i>
          </NavLink>
          <NavLink to="/orders/1">
            <i className="fas fa-shopping-cart"></i>
          </NavLink>
          <NavLink to="/contacts/1">
            <i className="fas fa-phone-alt"></i>
          </NavLink>
          <NavLink to="/profile/1">
            <i className="fas fa-id-card"></i>
          </NavLink>
        </div>
      );
    }
  }
}

export default Sidebar;
