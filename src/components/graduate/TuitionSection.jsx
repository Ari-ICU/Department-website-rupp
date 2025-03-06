import React from 'react';
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import g from '../../assets/graduate1.png';

const TuitionSection = () => {
    return (
        <div className="bg-gray-100 my-16 "> {/* Added padding for smaller screens */}
            <div className='container mx-auto px-4 '>
                <div className='flex flex-col xl:flex-row items-center justify-between space-y-4 xl:space-y-0'> {/* Removed vertical spacing on larger screens */}
                    <div className='xl:order-2 order-1 w-full xl:w-1/2'> {/* Added width for responsiveness */}
                        <div className="relative flex justify-center items-center w-full h-full">
                            <div className="bg-red-900 h-[200px] w-[300px] rounded-[150px] xl:h-[250px] xl:w-[450px]"> {/* Adjusted size for larger screens */}
                            </div>
                            <div className="absolute inset-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] xl:w-[400px] xl:h-[500px] rounded-full overflow-hidden"> {/* Adjusted size for larger screens */}
                                <img
                                    src={g}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="xl:order-1 order-2 w-full xl:w-1/2 text-center xl:text-left"> {/* Added width and text alignment */}
                        <h2 className="text-2xl xl:text-3xl font-semibold mb-4">Tuition Fee & Payment Methods</h2> {/* Adjusted font size */}
                        <div className="max-w-2xl mx-auto xl:mx-0"> {/* Removed margin on larger screens */}
                            <p className="text-base xl:text-lg text-gray-600 mb-6"> {/* Adjusted font size */}
                                The tuition fee for the Computer Science program is $500 per year, with an additional $5 exam fee.
                            </p>
                            <p className="text-base xl:text-lg text-gray-600 mb-8"> {/* Adjusted font size */}
                                We accept all types of payments, including cash (hand-to-hand payment) and online transfers via bank for convenience.
                            </p>
                            <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start font-bold text-red-600 mb-4 gap-5"> {/* Adjusted flex direction and justification */}
                                <div className='p-2 bg-red-900 rounded-2xl'>
                                    <HiOutlineCurrencyDollar size={50} className='text-white' />
                                </div>
                                <p className='text-2xl xl:text-3xl'>500$/<span className='text-sm'>year</span></p> {/* Adjusted font size */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TuitionSection;