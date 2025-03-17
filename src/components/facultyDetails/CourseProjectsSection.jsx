import React from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

const CourseProjectsSection = () => {
    return (
      <div className="my-16">
          <div className="bg-red-800 rounded-xl p-6 m-5 text-white">
            <h2 className="text-3xl font-semibold mb-6">
                Course Projects, Tools, and Testbeds
            </h2>

            <div className="mb-4">
                <div className="flex gap-4 items-center">
                <div className='bg-gray-50 p-2 rounded-full'>
                    <FaExternalLinkAlt className=" text-red-800" />

                    </div>
                    <Link to="#" className="underline">
                        Click here for complete list of student projects
                    </Link>
                </div>
            </div>

            <div>
                <div className="flex gap-4 items-center">
                    <div className='bg-gray-50 p-2 rounded-full'>
                    <FaExternalLinkAlt className=" text-red-800" />

                    </div>
                    <Link to="#" className="underline">
                        Click here for complete list of how to?
                    </Link>
                </div>
            </div>
        </div>
      </div>
    );
};

export default CourseProjectsSection