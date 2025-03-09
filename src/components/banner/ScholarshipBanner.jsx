import React from "react";
import admission from "../../assets/banner/admission.png";

const ScholarshipBanner = () => {
  const title = "Scholarship Opportunity";
  const subtitle =
    "Find the right scholarship for you—whether based on academic achievement, financial need, or location.";
  const backgroundImage = admission;

  return (
    <div
      className="relative w-full h-[464px] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Fixed Overlay using RGBA */}
      <divx
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // 50% opacity
      ></divx>

      <div className="relative z-10 max-w-5xl px-6">
        <h1 className="text-3xl sm:text-4xl font-bold drop-shadow-md">{title}</h1>
        <p className="mt-4 text-lg sm:text-xl drop-shadow-md">{subtitle}</p>
      </div>
    </div>
  );
};

export default ScholarshipBanner;
