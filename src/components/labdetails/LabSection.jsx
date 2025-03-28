import React, { useState, useEffect } from 'react';

const LabSection = () => {
  const [data, setData] = useState({});

  useEffect(() => {

    setData({
      title: "Smart Home IoT And AI By Group 3",
      description:
        "This Smart Home Control via Mobile App project is designed to provide a seamless and intuitive way for users to manage and monitor their home environment remotely. By leveraging the power of Internet of Things (IoT) technology, the system integrates various smart devices, such as lighting, thermostats, security cameras, and home appliances, all controllable through a single, easy-to-use mobile application.",
      group: "Group 3",
      image: "/smart-home-image.jpg",
      videoUrl: "https://your-video-link.com",
      weatherInfo:
        "One of the standout features of the app is its real-time weather integration. The app pulls live weather data from a weather API, giving users up-to-date information on their local climate. With this data, the system allows users to make informed decisions and automatically adjust their home settings according to changing weather conditions. For example, if the app detects that the outside temperature is rising, it could automatically lower the thermostat to keep the home cool, or if it's about to rain, it can close windows or adjust blinds accordingly.",
      automationInfo:
        "In addition to manual control, the system offers automation capabilities, enabling users to create custom rules or triggers. For instance, users can set up the system to turn off lights when no one is home, activate security cameras when the door is locked, or adjust the temperature when the weather changes. This level of automation not only adds convenience but also enhances energy efficiency and cost savings, as users can minimize energy consumption when devices are not in use.",
      uiInfo:
        "The mobile app's user interface is designed to be intuitive and simple, ensuring that even those who aren’t tech-savvy can operate it with ease. The app provides a centralized control hub where users can see the status of all connected devices, view historical data, and receive notifications about the home’s condition.",
      conclusion:
        "Overall, the Smart Home Control via Mobile App project aims to bring modern, IoT-driven automation and efficiency to the home environment. By allowing users to control their home remotely, respond to weather changes in real-time, and automate routine tasks, this project provides a smarter, more secure, and energy-efficient way of living. With its focus on convenience, sustainability, and security, the system enhances the everyday living experience, offering a modern, connected home at your fingertips.",
    });
  }, []);

  return (
    <div className="my-16">
      <div className="container mx-auto px-4">
        <div>
          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-8">{data.title}</h1>

          {/* Description */}
          <p className="text-gray-700 mb-6">{data.description}</p>

          {/* Group Name */}
          <p className="text-gray-700 font-semibold mb-6">by {data.group}</p>

          {/* Image and Video */}
          <div className="relative mb-8 w-full flex justify-center ">
            <iframe width="700" height="315" src="https://www.youtube.com/embed/8W_vyS95e4U?si=rhOYj9lsJRCHC-wZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          {/* Weather Integration */}
          <p className="text-gray-700 mb-6">{data.weatherInfo}</p>

          {/* Automation Capabilities */}
          <p className="text-gray-700 mb-6">{data.automationInfo}</p>

          {/* User Interface */}
          <p className="text-gray-700 mb-6">{data.uiInfo}</p>

          {/* Conclusion */}
          <p className="text-gray-700">{data.conclusion}</p>
        </div>
      </div>
    </div>
  );
};

export default LabSection;