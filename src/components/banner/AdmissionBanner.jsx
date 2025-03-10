import React from "react";
import admission from "../../assets/banner/admission.png";

const AdmissionBanner = () => {
  const title = "Admission Requirements";
  const subtitle =
    "Apply now and take the first step toward your future. Check out for the important dates, deadlines, requirements, and a set of rules to get into CS.";
  const backgroundImage = admission;

  return (
    <div
      className="relative w-full xl:h-[464px] h-[300px] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Fixed Overlay using RGBA */}
      <divx
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // 50% opacity
      ></divx>

      <div className="relative z-10 max-w-5xl px-6">
        <h1 className="text-xl sm:text-4xl font-bold drop-shadow-md">{title}</h1>
        <p className="mt-4 text-[12px] sm:text-xl drop-shadow-md">{subtitle}</p>
      </div>
    </div>
  );
};

export default AdmissionBanner;
