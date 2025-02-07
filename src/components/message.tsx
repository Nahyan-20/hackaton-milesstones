"use client";

import React, { useState, useEffect } from "react";

const TeacherAlert = () => {
  const [showModal, setShowModal] = useState(false);

  // Show modal when page loads
  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  // If modal is not visible, return nothing
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-80 text-center">
        <h2 className="text-xl font-bold mb-4">Note For The Checker!</h2>
        <p className="mb-4 text-gray-700">
         There is no navigation menu in the header as per the design, so in order to move forward to other pages, Click on buttons , "Rent Now", "Show More Cars".
        </p>
        <button
          onClick={handleClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default TeacherAlert;
