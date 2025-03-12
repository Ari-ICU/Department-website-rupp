import React from 'react';
import { jsPDF } from 'jspdf';
import p1 from '../../assets/new/1.png';

const LatestNews = () => {
  const newsItems = [
    {
      title: 'Re-exam schedule for 1st, 2nd students',
      description: 'Student office has a new announcement regarding re-exam...',
      imageUrl: p1,
      tag: 'News',
    },
    {
      title: 'Semester Break & Holiday Notices',
      description: 'A new semester break for 4th year students will be hosted on 21 Jun...',
      imageUrl: p1,
      tag: 'News',
    },
    {
      title: 'Re-exam schedule for 1st, 2nd students',
      description: 'Student office has a new announcement regarding re-exam...',
      imageUrl: p1,
      tag: 'News',
    },
    {
      title: 'Semester Break & Holiday Notices',
      description: 'A new semester break for 4th year students will be hosted on 21 Jun...',
      imageUrl: p1,
      tag: 'News',
    }
  ];

  const viewPdf = (imageUrl) => {
    const doc = new jsPDF();
    doc.addImage(imageUrl, 'PNG', 10, 10, 180, 120); // Properly scales image
    const pdfBlob = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="my-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8">Latest News & Announcements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg flex flex-col xl:flex-row shadow-md overflow-hidden"
            >
              {/* Image Section */}
              <div className="p-3 w-full xl:w-[313px] h-auto xl:h-[221px]">
                <img
                  src={item.imageUrl}
                  alt="News"
                  className="w-full h-full object-cover cursor-pointer rounded-lg"
                  onClick={() => viewPdf(item.imageUrl)}
                />
              </div>

              {/* Text Content */}
              <div className="p-2 flex flex-col justify-center">
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold self-start">
                  {item.tag}
                </span>
                <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
