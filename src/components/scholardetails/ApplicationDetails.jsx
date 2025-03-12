import React from 'react';
import { TfiPinAlt } from "react-icons/tfi";
import p1 from '../../assets/bank/app.png';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';


const applicationDetails = [
    {
        title: "Eligible Candidates",
        description: "This scholarship is available for bachelor's degree students who are currently studying at the Royal University of Phnom Penh (RUPP). It is open to 2nd, 3rd, and 4th-year students for the 2024-2025 academic year.",
    },
    {
        title: "How to Apply",
        description: "Applicants must submit their documents in person at the International Relations Office (Room 219A, Building A). The application period runs from the announcement date until March 31, 2025.",
    },
    {
        title: "Documents & Requirements",
        description: "Applicants must provide the required documents as stated in the official announcement. If they do not have an official study certificate, they can use their student ID card as a substitute. For more details, students can contact the International Relations Office via Telegram:",
        link: {
            text: "t.me/iro_rupp",
            url: "https://t.me/iro_rupp"
        }
    }
];


const ApplicationDetails = () => {


      const viewPdf = (imageUrl) => {
        const doc = new jsPDF();
        doc.addImage(imageUrl, 'PNG', 10, 10, 180, 120); // Properly scales image
        const pdfBlob = doc.output('blob');
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank');
      };
    
    return (
        <div className="my-12 rounded-lg"> {/* Added background color and rounded corners */}
            <div className="container mx-auto px-4">
                <div className='flex flex-col xl:flex-row gap-12 items-center'>
                    {/* Image */}
                    <div className=' h-full xl:w-1/2 w-full cursor-pointer' >
                        <img src={p1} 
                        alt="Application"
                        onClick={() => viewPdf(p1)}
                        className="w-full h-full rounded-lg shadow-md" />
                    </div>

                    {/* Details */}
                    <div className='w-full px-6'>
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Application Details</h2>
                        {applicationDetails.map((detail, index) => (
                            <div key={index} className="mb-6 flex">
                                <div className="flex">
                                <div className="rounded-xl h-12 bg-red-900 p-3 mr-3"> 
                                    <TfiPinAlt className="text-gray-50 text-2xl" />
                                </div>
                                    <div className='space-y-4'>
                                        <h3 className="text-xl font-semibold text-gray-700">{detail.title}</h3>
                                        <p className="text-gray-600">
                                            {detail.description}
                                            {detail.link && (
                                                <Link to={detail.link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> {detail.link.text}</Link>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationDetails;