import React from "react";
import UndergraduateProgramSlider from "../components/undergraduate/UndergraduateProgramSlider";
import Sidebar from "../components/sidebar/Sidebar";
import Introduct from "../components/undergraduate/introduction/Overview";
import { Routes, Route } from "react-router-dom";

const Undergraduate = () => {
  return (
    <div>
      <UndergraduateProgramSlider />
      <div className="py-16">
        <div className=" container mx-auto"> {/* Added flex container */}
          <Sidebar /> {/* Render the Sidebar */}
          <div className="p-4"> 
            <Routes>
              <Route path="/introduct" element={<Introduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Undergraduate;