import React from "react";
import admission from "../../assets/banner/facilites.png";

const FacilitiesBanner = () => {
  const title = "Facilities";
  const subtitle =
    "Our campus provides state-of-the-art classrooms, fully equipped labs, a rich library, and seamless Wi-Fi to support both academic and student life.";
  const backgroundImage = admission;

  return (
    <div
    className="relative w-full xl:h-[530px] h-[300px] flex items-center justify-center text-center text-white bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
      {/* Fixed Overlay using RGBA */}
      <divx
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} 
      ></divx>

      <div className="relative z-10 lg:max-w-5xl max-w-full px-6">
        <h1 className="text-xl sm:text-4xl font-bold drop-shadow-md">{title}</h1>
        <p className="mt-4 text-[12px] sm:text-xl drop-shadow-md">{subtitle}</p>
      </div>
    </div>
  );
};

export default FacilitiesBanner;
