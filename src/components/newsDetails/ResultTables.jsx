import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const ResultTable = () => {
  // Sample Data with Dynamic Subjects
  const data = [
    { id: 1, studentId: "120023", subjects: { SE: 90, MIS: 80, Web: 72, Math: 85 }, result: "pass" },
    { id: 2, studentId: "120024", subjects: { SE: 88, MIS: 75, Web: 70, Math: 90 }, result: "pass" },
    { id: 3, studentId: "120025", subjects: { SE: 78, MIS: 85, Web: 88, Math: 80 }, result: "pass" },
    { id: 4, studentId: "120026", subjects: { SE: 92, MIS: 90, Web: 95, Math: 89 }, result: "pass" },
    { id: 5, studentId: "120027", subjects: { SE: 85, MIS: 80, Web: 78, Math: 82 }, result: "pass" },
    { id: 6, studentId: "120028", subjects: { SE: 80, MIS: 75, Web: 70, Math: 88 }, result: "pass" },
    { id: 7, studentId: "120029", subjects: { SE: 90, MIS: 85, Web: 92, Math: 95 }, result: "pass" },
    { id: 8, studentId: "120030", subjects: { SE: 88, MIS: 78, Web: 80, Math: 86 }, result: "pass" },
    { id: 9, studentId: "120031", subjects: { SE: 75, MIS: 80, Web: 85, Math: 90 }, result: "pass" },
    { id: 10, studentId: "120032", subjects: { SE: 82, MIS: 88, Web: 90, Math: 92 }, result: "pass" },
    { id: 11, studentId: "120033", subjects: { SE: 85, MIS: 87, Web: 79, Math: 89 }, result: "pass" },
    { id: 12, studentId: "120034", subjects: { SE: 80, MIS: 75, Web: 88, Math: 91 }, result: "pass" },
    { id: 13, studentId: "120035", subjects: { SE: 90, MIS: 92, Web: 85, Math: 87 }, result: "pass" },
    { id: 14, studentId: "120036", subjects: { SE: 88, MIS: 80, Web: 78, Math: 84 }, result: "pass" },
    { id: 15, studentId: "120037", subjects: { SE: 75, MIS: 82, Web: 80, Math: 88 }, result: "pass" },
    { id: 16, studentId: "120038", subjects: { SE: 82, MIS: 90, Web: 92, Math: 95 }, result: "pass" },
    { id: 17, studentId: "120039", subjects: { SE: 85, MIS: 78, Web: 80, Math: 86 }, result: "pass" },
    { id: 18, studentId: "120040", subjects: { SE: 90, MIS: 85, Web: 88, Math: 91 }, result: "pass" },  
    { id: 19, studentId: "120041", subjects: { SE: 88, MIS: 80, Web: 75, Math: 84 }, result: "pass" },
    { id: 20, studentId: "120042", subjects: { SE: 80, MIS: 85, Web: 90, Math: 92 }, result: "pass" },
    { id: 21, studentId: "120043", subjects: { SE: 85, MIS: 78, Web: 80, Math: 88 }, result: "pass" },
    { id: 22, studentId: "120044", subjects: { SE: 90, MIS: 82, Web: 85, Math: 91 }, result: "pass" },
    { id: 23, studentId: "120045", subjects: { SE: 88, MIS: 80, Web: 75, Math: 84 }, result: "pass" },
    { id: 24, studentId: "120046", subjects: { SE: 80, MIS: 85, Web: 90, Math: 92 }, result: "pass" },
    { id: 25, studentId: "120047", subjects: { SE: 85, MIS: 78, Web: 80, Math: 88 }, result: "pass" },
    { id: 26, studentId: "120048", subjects: { SE: 90, MIS: 82, Web: 85, Math: 91 }, result: "pass" },
    { id: 27, studentId: "120049", subjects: { SE: 88, MIS: 80, Web: 75, Math: 84 }, result: "pass" },
    { id: 28, studentId: "120050", subjects: { SE: 80, MIS: 85, Web: 90, Math: 92 }, result: "pass" },
    { id: 29, studentId: "120051", subjects: { SE: 85, MIS: 78, Web: 80, Math: 88 }, result: "pass" },
    { id: 30, studentId: "120052", subjects: { SE: 90, MIS: 82, Web: 85, Math: 91 }, result: "pass" },
    { id: 31, studentId: "120053", subjects: { SE: 88, MIS: 80, Web: 75, Math: 84 }, result: "pass" },
    { id: 32, studentId: "120054", subjects: { SE: 80, MIS: 85, Web: 90, Math: 92 }, result: "pass" },
    { id: 33, studentId: "120055", subjects: { SE: 85, MIS: 78, Web: 80, Math: 88 }, result: "pass" },
    { id: 34, studentId: "120056", subjects: { SE: 90, MIS: 82, Web: 85, Math: 91 }, result: "pass" },
    { id: 35, studentId: "120057", subjects: { SE: 88, MIS: 80, Web: 75, Math: 84 }, result: "pass" },
    { id: 36, studentId: "120058", subjects: { SE: 80, MIS: 85, Web: 90, Math: 92 }, result: "pass" },
    { id: 37, studentId: "120059", subjects: { SE: 85, MIS: 78, Web: 80, Math: 88 }, result: "pass" },
    { id: 38, studentId: "120060", subjects: { SE: 90, MIS: 82, Web: 85, Math: 91 }, result: "pass" },
    { id: 39, studentId:"120061", subjects:{SE :90,MIS :80 ,Web :70 ,Math :60},result:"pass"},
    { id :40 ,studentId :"120062",subjects:{SE :90,MIS :80 ,Web :70 ,Math :60},result:"pass"},
  ];

  const subjects = Object.keys(data[0].subjects); // Extract subjects dynamically
  const itemsPerPage = 10; // Show 10 rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const displayedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Calculate page range for pagination
  const paginationRange = () => {
    if (totalPages <= 3) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 2) return [1, 2, 3];
    if (currentPage >= totalPages - 1) return [totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  return (
    <div className="my-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Overall Result</h1>

        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-red-800 text-white text-left">
                <th className="p-3 text-sm md:text-base">NO.</th>
                <th className="p-3 text-sm md:text-base">Student ID</th>
                {subjects.map((subject) => (
                  <th key={subject} className="p-3 text-sm md:text-base">{subject}</th>
                ))}
                <th className="p-3 text-sm md:text-base">Result</th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-red-50 text-gray-700">
                  <td className="p-3 text-sm">{item.id}</td>
                  <td className="p-3 text-sm">{item.studentId}</td>
                  {subjects.map((subject) => (
                    <td key={subject} className="p-3 text-sm">{item.subjects[subject]}</td>
                  ))}
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

          {paginationRange().map((page, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 border rounded-md ${
                currentPage === page ? "bg-red-800 text-white" : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Show Last Page if not displayed */}
          {totalPages > 3 && currentPage < totalPages - 1 && (
            <span className="px-3 py-1 text-gray-700">...</span>
          )}

          {/* Last Page Button */}
          {totalPages > 3 && currentPage < totalPages - 1 && (
            <button
              onClick={() => handlePageChange(totalPages)}
              className={`px-3 py-1 border rounded-md ${
                currentPage === totalPages ? "bg-red-800 text-white" : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {totalPages}
            </button>
          )}

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
