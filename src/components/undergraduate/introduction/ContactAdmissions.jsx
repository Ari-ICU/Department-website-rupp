import React from 'react';

const ContactAdmissions = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
      <p className="text-lg text-gray-700 mb-4">
        For more details, please visit our admissions page or contact the Computer Science
        Department for further inquiries.
      </p>
      <a
        href="/admissions" // Replace with your actual admissions page URL
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
      >
        Visit Admissions Page
      </a>
    </div>
  );
};

export default ContactAdmissions;