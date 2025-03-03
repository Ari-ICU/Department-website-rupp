import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { MdArrowOutward } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import image1 from "../../assets/img/1.jpg"; // Replace with your actual image paths
import image2 from "../../assets/img/2.jpg";
import image3 from "../../assets/img/123.jpg";

const researchTopics = [
  { title: "Advancing Technology", image: image1 },
  { title: "Innovating Tomorrow", image: image2 },
  { title: "Cybersecurity Research", image: image3 },
];

const Research = () => {
  return (
    <div className="max-w-[1460px] h-[481px] mx-auto bg-red-900 text-white">
      <div className="max-w-[1374px] h-[381px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Right Side - Swiper Slider (First on Mobile, Second on Desktop) */}
        <div className="order-1 md:order-2 w-[817px] h-[339px] gap-[40px] relative justify-end right-0">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1.2} 
            centeredSlides={true} 
            loop={true} 
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true}}
            className="w-[817px] h-[339px]"
          >
            {researchTopics.map((item, index) => (
              <SwiperSlide key={index} className="p-6 rounded-lg ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[339px] h-[266px] mx-auto object-cover rounded-lg mb-4" // Increased image height
                />
                <h3 className="text-xl font-bold mb-2 flex items-center justify-center"> {/* Centered text */}
                  {item.title}
                  <MdArrowOutward className="ml-2" />
                </h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Left Side - Research Text (Second on Mobile, First on Desktop) */}
        <div className="order-2 md:order-1 md:text-left ">
          <h2 className="text-4xl font-bold mb-6">Research</h2>
          <p className="text-sm font-normal leading-relaxed"> {/* Added leading-relaxed for better readability */}
            At the forefront of technological advancement, our research focuses on solving real-world problems. From artificial intelligence to cybersecurity, our faculty and students are driving innovation. Collaborating with industry leaders and academic partners, we push the boundaries of knowledge. Join us in shaping the future of technology through groundbreaking discoveries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Research;