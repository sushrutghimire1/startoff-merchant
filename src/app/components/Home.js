import React, { Component } from "react";
import Sidebar from "./Sidebar";
import ProfileClient from "./homeComponents/ProfileClient";

class Home extends Component {
  render() {
    return (
      <div className="HomeClient">
        <Sidebar />
        <div className="home container">
          <ProfileClient />
        </div>
      </div>
    );
  }
}

export default Home;
