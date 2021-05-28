import React, { Component } from "react";
import ProfitPrevChart from "./homeComponents/profitChart";
import Sidebar from "./Sidebar";
import ProfileClient from "./homeComponents/ProfileClient";
import Stock from "./homeComponents/stock";

class Home extends Component {
  render() {
    return (
      <div className="HomeClient">
        <Sidebar />
        <div className="home container">
          <ProfileClient />
          <ProfitPrevChart />
          <Stock />
        </div>
      </div>
    );
  }
}

export default Home;
