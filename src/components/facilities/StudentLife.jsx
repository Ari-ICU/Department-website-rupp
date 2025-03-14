import React from 'react';
import p1 from '../../assets/student-life/p3.png';
import p2 from '../../assets/student-life/p4.png';
import p3 from '../../assets/student-life/p5.png';
import p4 from '../../assets/student-life/p6.png';
import p5 from '../../assets/student-life/p7.png';

// Replace with actual image paths
const images = [p1,  p2,  p3,p5, p4];

const StudentLife = () => {
    return (
        <div className="my-16">
            <div className="container mx-auto px-4">
                {/* Title & Description */}
                <div className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4">Student Life & Recreation</h2>
                    <p className="text-lg text-gray-800">
                        With sports facilities, dormitories, cafeterias, and lounges, students enjoy a balanced lifestyle in a supportive environment.
                    </p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* First row with 3 images */}
                    {images.slice(0, 3).map((img, index) => (
                        <div key={index} className="overflow-hidden rounded-xl shadow-lg">
                            <img 
                                src={img} 
                                alt={`Student Life ${index + 1}`} 
                                className="w-full object-cover rounded-xl h-full"
                            />
                        </div>
                    ))}
                </div>

                {/* Second row with 2 images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    {images.slice(3, 5).map((img, index) => (
                        <div key={index + 3} className="overflow-hidden rounded-xl shadow-lg">
                            <img 
                                src={img} 
                                alt={`Student Life ${index + 4}`} 
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