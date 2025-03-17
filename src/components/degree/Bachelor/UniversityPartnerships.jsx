import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Import university logos
import faunaFloraLogo from "../../../assets/partner/fauna-flora-logo.png";
import tsinghuaLogo from "../../../assets/partner/tsinghua-logo.png";
import dongseoLogo from "../../../assets/partner/dongseo-logo.png";
import hongkongPolyLogo from "../../../assets/partner/hongkong-poly-logo.png";
import southernTechLogo from "../../../assets/partner/southern-tech-logo.png";
import monash from "../../../assets/bachelor/4.png";
import uts from "../../../assets/bachelor/p1.png";
import osaka from "../../../assets/bachelor/p2.png";
import { useTranslation } from 'react-i18next';




const universityLogos = [
    { src: faunaFloraLogo, alt: "Fauna & Flora International" },
    { src: tsinghuaLogo, alt: "Tsinghua University" },
    { src: dongseoLogo, alt: "Dongseo University" },
    { src: hongkongPolyLogo, alt: "The Hong Kong Polytechnic University" },
    { src: southernTechLogo, alt: "Southern University of Science and Technology" },
    { src: monash , alt: "Monash University"},
    { src: uts , alt: "UTS University"},
    { src: osaka , alt: "Osaka University"}

];

const UniversityPartnerships = () => {
      const { t, i18n } = useTranslation();
          const currentLanguage = i18n.language;
    return (
        <div className="bg-white my-16">
            <div className="container mx-auto px-4 text-center">
                <h2  className={`text-3xl font-normal mb-4  ${currentLanguage === 'km' ? "font-khmer" : "font-semibold"}`}
              lang={currentLanguage}>Partnerships With Universities</h2>

                {/* Swiper Slider */}
                <Swiper
                    slidesPerView={2}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="w-full"
                >
                    {universityLogos.map((university, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <div className="flex flex-col items-center gap-6">
                                <img src={university.src} alt={university.alt} className=" h-20" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default UniversityPartnerships;
