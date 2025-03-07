import React from 'react';
import model from '../../assets/model/web-sample-4_3_-removebg-preview.png.png'

const ComputerScienceDegreeBenefits = () => {
    return (
        <div className=" my-12">
            <div className="container mx-auto py-12 px-4 ">
               <div className='grid grid-cols-1 xl:grid-cols-3 justify-center items-center gap-10'>
               <div className='w-full'>
                    <h2 className="text-3xl font-semibold mb-8">Unlock Your Future with a Computer Science Degree</h2>
                    <p className="text-lg text-gray-700">
                        Gain in-demand skills, high-paying jobs, and career flexibility in tech. Whether in AI, cybersecurity, or software development, a Computer Science degree opens doors to innovation, entrepreneurship, and long-term success.
                    </p>
                </div>
                <div className='xl:w-[415px] w-full xl:h-[530px] h-full'>
                    <img src={model} alt="" className='w-full h-full object-cover'/>
                </div>

                <div className="">
                    {/* In-Demand Skills & Job */}
                    <div className="text-left">
                        <h3 className="text-2xl font-semibold mb-4">In-Demand Skills & Job</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Graduates gain expertise in programming and problem-solving, leading to stable, high-paying tech careers.
                        </p>

                    </div>

                    {/* Innovation & Impact */}
                    <div className="text-left">
                        <h3 className="text-2xl font-semibold mb-4">Innovation & Impact</h3>
                        <p className="text-lg text-gray-700">
                            With AI and emerging tech skills, graduates drive digital transformation and create advanced solutions.
                        </p>
                    </div>

                    {/* Career Growth & Flexibility */}
                    <div className="text-left">
                        <h3 className="text-2xl font-semibold mb-4">Career Growth & Flexibility</h3>
                        <p className="text-lg text-gray-700">
                            The degree offers diverse career paths, entrepreneurship opportunities, and continuous advancement.
                        </p>
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default ComputerScienceDegreeBenefits;