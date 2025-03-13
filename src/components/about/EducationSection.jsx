import React from 'react';
import edu from '../../assets/facilities/1.png';

const EducationSection = () => {
    return (
        <div className='my-16'>
            <div className="relative h-[500px] w-full">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${edu})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
                <h2 className="text-lg xl:text-3xl font-bold text-white mb-6">
                    We Believe That Education Is An
                </h2>
                <h2 className="text-lg xl:text-3xl font-bold text-white mb-6">
                    Important Aspect In Every
                </h2>
                <h2 className="text-lg xl:text-3xl font-bold text-white mb-6">
                    Person's Life
                </h2>
                <p className="text-gray-200 xl:text-lg text-[14px]">
                    Education is the key that unlocks the door to endless possibilities and personal growth.
                </p>
            </div>
        </div>
        </div>
    );
};

export default EducationSection;
