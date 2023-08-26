"use client";
import React, { useState } from "react";
import TabContent from "./TabContent";

function TabNavigation({tabs}) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="border-b sm:border-0">
      <div className="flex divide-x border-b">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`flex-1 cursor-pointer px-4 py-2 ${
              activeTab === index
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => handleTabClick(index)}
          >
            Tab {index + 1}
          </div>
        ))}
      </div>
      <div className="p-4">
        <TabContent activeTab={activeTab} tabs={tabs} />
      </div>
    </div>
  );
}

export default TabNavigation;
