import React from "react";
import admission from "../../assets/banner/facilites.png";

const NewBanner = () => {
  const title = "News &Events";
  const subtitle =
    "Get the latest updates on academic schedules, registration deadlines, scholarships, events, and other essential university news.";
  const backgroundImage = admission;

  return (
    <div
    className="relative w-full xl:h-[530px] h-full flex items-center justify-center text-center text-white bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
      {/* Fixed Overlay using RGBA */}
      <divx
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} 
      ></divx>

      <div className="relative z-10 lg:max-w-5xl max-w-full px-6">
        <h1 className="text-3xl sm:text-4xl font-bold drop-shadow-md">{title}</h1>
        <p className="mt-4 text-lg sm:text-xl drop-shadow-md">{subtitle}</p>
      </div>
    </div>
  );
};

export default NewBanner;
