import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaCalendarAlt,
} from 'react-icons/fa';
import p1 from '../../assets/admission/1.png';
import { Link } from 'react-router-dom';

const ApplySection = () => {
  const steps = [
    'Must be a high school graduate or hold an equivalent qualification.',
    'Successfully pass the admission entrance exam.',
    'Complete the registration process and submit the tuition payment.',
  ];

  const contactInfo = {
    semesterInfo: {
      title: 'New Semester Start Now',
      text: 'Bachelor program is now available. Apply now',
      date: '21 Jan',
    },
    contactDetails: {
      phone: '885 234 876 987',
      email: 'rupp@email.edu.kh',
      socialLinks: [
        { icon: <FaFacebookF />, link: 'https://www.facebook.com/your-page' },
        { icon: <FaTwitter />, link: 'https://twitter.com/your-profile' },
        { icon: <FaInstagram />, link: 'https://www.instagram.com/your-profile' },
        { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/your-profile' },
      ],
    },
  };

  return (
    <div className="my-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-6 items-center justify-between"> {/* Changed md:flex-row to xl:flex-row */}
          {/* Left Side: Steps and Text */}
          <div className="xl:w-1/2 mb-8 xl:mb-0"> {/* Changed md:w-1/2 to xl:w-1/2 */}
            <h2 className="text-4xl font-semibold mb-6">
              Step By Step: How to Apply to Computer Science Department
            </h2>
            <ul className="list-none space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="">
                  <div className="p-6 border rounded-2xl flex items-center justify-between">
                    <span className="xl:text-xl text-md">{step}</span>
                    <FaArrowRight className="ml-2" />
                  </div>
                </li>
              ))}
            </ul>
          
          </div>

          {/* Right Side: New Semester and Contact Info */}
          <div className="flex flex-col-reverse xl:flex-row xl:w-1/2 justify-center items-center"> {/* Changed md:flex-row to xl:flex-row and md:w-1/2 to xl:w-1/2 */}
            <div className="bg-white p-6 rounded-md space-y-10 xl:w-1/2 xl:order-2 order-1"> {/* Changed md:w-1/2 to xl:w-1/2 */}
              <div className="bg-white p-6 rounded-md shadow-md">
                <h2 className="text-xl font-semibold mb-4">{contactInfo.semesterInfo.title}</h2>
                <p className="mb-4">{contactInfo.semesterInfo.text}</p>
                <p className="mb-4 text-center text-lg xl:text-xl">
                  <FaCalendarAlt className="inline-block mr-2" />
                  {contactInfo.semesterInfo.date}
                </p>
              </div>

              <div className="py-6 px-4 bg-red-900 text-white shadow-lg rounded-2xl flex justify-center">
                <div className="space-y-5">
                  <h3 className="text-lg font-semibold">Contact Info</h3>
                  <p className="flex items-center">
                    <FaPhoneAlt className="mr-2" />
                    {contactInfo.contactDetails.phone}
                  </p>
                  <p className="flex items-center">
                    <FaEnvelope className="mr-2" />
                    {contactInfo.contactDetails.email}
                  </p>
                  <div className="flex space-x-4">
                    {contactInfo.contactDetails.socialLinks.map((link, index) => (
                      <Link key={index} to={link.link} target="_blank" rel="noopener noreferrer">
                        <div className="bg-gray-50 p-2 rounded-lg text-red-700">{link.icon}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/2 xl:order-1 order-2"> {/* Changed md:w-1/2 to xl:w-1/2 */}
              <img src={p1} alt="Admission Image" className="rounded-2xl w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplySection;