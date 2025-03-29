import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight, HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const ResultTable = () => {
  const data = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    studentId: "120023",
    SE: 90,
    MIS: 80,
    Web: 72,
    result: "pass",
  }));

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const displayedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="my-16">
      <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Overall Result</h1>
      <p className="text-gray-600 mb-6">
        Engage in insightful discussions, network with industry experts, and explore career
        opportunities through our upcoming academic and professional events.
      </p>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-red-800 text-white text-left">
              <th className="p-3 text-sm md:text-base">NO.</th>
              <th className="p-3 text-sm md:text-base">Student ID</th>
              <th className="p-3 text-sm md:text-base">SE</th>
              <th className="p-3 text-sm md:text-base">MIS</th>
              <th className="p-3 text-sm md:text-base">Web</th>
              <th className="p-3 text-sm md:text-base">Result</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((item, index) => (
              <tr key={index} className="odd:bg-white even:bg-red-50 text-gray-700">
                <td className="p-3 text-sm">{item.id}</td>
                <td className="p-3 text-sm">{item.studentId}</td>
                <td className="p-3 text-sm">{item.SE}</td>
                <td className="p-3 text-sm">{item.MIS}</td>
                <td className="p-3 text-sm">{item.Web}</td>
                <td className="p-3 text-sm">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {item.result}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-200 ${
            currentPage === 1 && "opacity-50 cursor-not-allowed"
          }`}
        >
          <HiChevronLeft size={18} />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .slice(
            Math.max(0, currentPage - 2),
            Math.min(totalPages, currentPage + 1)
          )
          .map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 border rounded-md ${
                currentPage === page
                  ? "bg-red-800 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}

        {currentPage < totalPages - 1 && <span className="px-3 py-1">...</span>}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-200 ${
            currentPage === totalPages && "opacity-50 cursor-not-allowed"
          }`}
        >
          <HiChevronRight size={18} />
        </button>
        
      </div>
    </div>
    </div>
  );
};

export default ResultTable;
