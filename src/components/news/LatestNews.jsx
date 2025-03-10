import React from 'react';
import p1 from '../../assets/new/1.png'

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

  return (
    <div className="my-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8">Latest News & Announcements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg flex p-4 shadow-md overflow-hidden"
            >
              <img
                src={item.imageUrl}
                alt="News"
                className="w-full h-70 object-cover"
              />
              <div className="p-6">
                <div className=" justify-between mb-4">
                <span className="bg-pink-100 text-pink-800 px-3 py-1  rounded-full text-sm font-semibold">
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