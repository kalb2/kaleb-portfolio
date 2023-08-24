"use client";
import React, { useState } from "react";

function TabNavigation() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div className="flex border-b">
        <div
          className={`flex-1 cursor-pointer px-4 py-2 ${
            activeTab === 0
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabClick(0)}
        >
          Tab 1
        </div>
        <div
          className={`flex-1 cursor-pointer px-4 py-2 ${
            activeTab === 1
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Tab 2
        </div>
        <div
          className={`flex-1 cursor-pointer  px-4 py-2 ${
            activeTab === 2
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Tab 3
        </div>
      </div>
      <div className="p-4">
        {activeTab === 0 && <div>Content for Tab 1</div>}
        {activeTab === 1 && <div>Content for Tab 2</div>}
        {activeTab === 2 && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
}

export default TabNavigation;
