import React from 'react';
import p1 from '../../assets/uni/1.png'
import p2 from '../../assets/uni/2.png'

const BackgroundSection = () => {
    const backgrounds = [
        {
            university: " Ateneo de Manila University (Philippines)",
            imageUrl: p1, // Replace with the actual path
        },
        {
            university: "khon kaen university (thailand)",
            imageUrl: p2, // Replace with the actual path
            
        },
    ];
    return (
       <div className="my-16">
         <div className="bg-white rounded-xl shadow-md p-6 m-5">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                Background
            </h2>

            {backgrounds.map((bg, index) => (
                <div key={index} className="flex items-center mb-4">
                    <img src={bg.imageUrl} alt={bg.university} className="w-12 h-12 mr-4 rounded-full" />
                    <div>
                        <p className="text-gray-700">Studied at {bg.university} </p>
                    </div>
                </div>
            ))}
        </div>
       </div>
    );
};

export default BackgroundSection;