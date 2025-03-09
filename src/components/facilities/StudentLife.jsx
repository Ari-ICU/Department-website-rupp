import React from 'react';
import p1 from '../../assets/student-life/1.png'
import p2 from '../../assets/student-life/2.png'
import p3 from '../../assets/student-life/3.png'
import p4 from '../../assets/student-life/4.png'
import p5 from '../../assets/student-life/5.png'

// Replace with actual image paths
const images = [
    p1,
    p3,
    p5,
    p4,
  
    p2,
];

const StudentLife = () => {
    return (
        <div className="my-16">
            <div className="container mx-auto px-4">
                {/* Title & Description */}
                <div className=" mb-10">
                    <h2 className="text-3xl font-semibold mb-4">Student Life & Recreation</h2>
                    <p className="text-lg text-gray-600 ">
                        With sports facilities, dormitories, cafeterias, and lounges, students enjoy a balanced lifestyle in a supportive environment.
                    </p>
                </div>

                {/* Image Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {images.map((img, index) => (
        <div 
            key={index} 
            className={`overflow-hidden rounded-xl shadow-lg hover:scale-105 transition duration-300 
                ${index === 2 ? "md:col-span-1 md:row-span-2" : ""}`}
        >
            <img 
                src={img} 
                alt={`Student Life ${index + 1}`} 
                className="w-full object-cover rounded-xl h-full"
            />
        </div>
    ))}
</div>


            </div>
        </div>
    );
};

export default StudentLife;
