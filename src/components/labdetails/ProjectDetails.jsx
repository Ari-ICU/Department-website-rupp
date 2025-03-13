import React from 'react';
import { FaCheck } from 'react-icons/fa'; // Import the checkmark icon
import { Link } from 'react-router-dom';

const ProjectDetails = () => {
  const projectData = {
    description:
      'This project focuses on creating a smart home system controlled via a mobile application, allowing users to manage various aspects of their home from anywhere. The mobile app integrates with IoT-enabled devices, enabling users to control lighting, appliances, security systems, and more, all from the convenience of their smartphones.',
    teamMembers: ['Holy David', 'Heng Kakada', 'Heng BunLeang', 'Ho Daneng'],
    sourceCodeLinks: [
      { label: 'Deep Learning', url: 'https://github.com/Heng-Kakada/Facial' },
      { label: 'Arduino and Raspberry pi 4', url: 'https://github.com/Heng-Kakada/Smart-...' },
      { label: 'Smart Home App', url: 'https://github.com/HB-Leang/IoT-Smart...' },
      { label: 'App apk', url: 'https://drive.google.com/drive/folder...' },
    ],
    deepLearning: [
      { label: 'Dataset Link', url: 'https://www.kaggle.com/datasets/hengk...' },
      { label: 'Training Facial Verification Link', url: 'https://www.kaggle.com/code/hengkakad...' },
    ],
    resources: [
      { label: 'Paper', url: 'https://www.cs.cmu.edu/~rsalakhu/pape...' },
      { label: 'Tensorflow Docs', url: 'https://www.tensorflow.org/api_docs/p...' },
      { label: 'Keras Docs', url: 'https://keras.io/api/' },
      { label: 'Firebase', url: 'https://firebase.google.com' },
      { label: 'Flutter', url: 'https://flutter.dev/' },
    ],
  };
  return (
    <div className="my-16">
      <div className="container mx-auto px-4">
        {/* Project Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
          <p className="text-gray-700">{projectData.description}</p>
          <div className="flex space-x-4 mt-4">
            <span className="bg-red-200 px-3 py-1 rounded-full text-sm font-medium">IoT</span>
            <span className="bg-red-200 px-3 py-1 rounded-full text-sm font-medium">AI</span>
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Team Members</h3>
          <ul className="list-none space-y-2">
            {projectData.teamMembers.map((member, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className='w-8 h-8 rounded-full bg-red-300 flex items-center justify-center '>
                  <FaCheck className="text-red-500 text-sm " />

                </div>
                <span>{member}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Source Code Links */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Source Code Link</h3>
          <ul className="list-none space-y-2">
            {projectData.sourceCodeLinks.map((link, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className='w-8 h-8 rounded-full bg-red-300 flex items-center justify-center '>
                  <FaCheck className="text-red-500 text-sm " />

                </div>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Deep Learning */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Deep Learning</h3>
          <ul className="list-none space-y-2">
            {projectData.deepLearning.map((link, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className='w-8 h-8 rounded-full bg-red-300 flex items-center justify-center '>
                  <FaCheck className="text-red-500 text-sm " />

                </div>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <ul className="list-none space-y-2">
            {projectData.resources.map((link, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className='w-8 h-8 rounded-full bg-red-300 flex items-center justify-center '>
                  <FaCheck className="text-red-500 text-sm " />

                </div>
                <Link

                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;