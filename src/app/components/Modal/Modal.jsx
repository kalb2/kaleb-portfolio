import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleModalContentClick = (event) => {
    event.stopPropagation();
  };

    const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        className="bg-white p-6 rounded-lg shadow-lg z-10 items-center flex flex-col"
        onClick={handleModalContentClick}
      >
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
