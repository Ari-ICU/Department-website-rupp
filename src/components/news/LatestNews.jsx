import React from 'react';
import { jsPDF } from 'jspdf'; // Import jsPDF
import html2canvas from 'html2canvas'; // Import html2canvas
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
    // Add more news items as needed
  ];

  const convertToPdf = (imageUrl) => {
    const doc = new jsPDF();

    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      html2canvas(img).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 10, 10);
        doc.save('image.pdf');
      });
    };
  };

  return (
    <div className="my-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8">Latest News & Announcements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg flex p-4 shadow-md overflow-hidden"
            >
              <img
                src={item.imageUrl}
                alt="News"
                className="w-full h-40 object-cover cursor-pointer"
                onClick={() => convertToPdf(item.imageUrl)}
              />
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
