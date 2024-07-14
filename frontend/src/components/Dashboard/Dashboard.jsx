import React, { useState } from "react";

import Comp1 from "./Comp1/Comp1";
import Comp2 from "./Comp2/Comp2";
import Comp4 from "./Comp3/Comp4";
import "./dashboard.css";
import Navbar from "./Navbar/Navbar";


const Dashboard = () => {
    
  return (
    <div className='dashboard-main-page'  >
      <div className="suraj">
        <>
          <Navbar  />
        </>
        <>
          <Comp1 />
        </>

        <>
          <Comp4 />
        </>

        <>
          <Comp2 />
        </>
      </div>
    </div>
  );
};

export default Dashboard;