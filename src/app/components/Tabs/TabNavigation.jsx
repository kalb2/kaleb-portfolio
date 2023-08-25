// "use client";
import React, { useState } from "react";
import { useTabContentContext } from "./TabContentContext";
import TabContent from "./TabContent";

function TabNavigation() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const { tabContentData } = useTabContentContext(); // Use the context hook to access the value

  // if (!tabContentData || tabContentData.length === 0) {
  //   return <div>Loading...</div>; // or another appropriate placeholder
  // }

  return (
    <div className="border-b sm:border-0">
      <div className="flex divide-x border-b">
        {tabContentData.map((data, index) => (
          <div
            key={index}
            className={`flex-1 cursor-pointer px-4 py-2 ${
              activeTab === index ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {data.tabName}
          </div>
        ))}
      </div>
      <div className="p-4">
        <TabContent content={tabContentData[activeTab].content} />
      </div>
    </div>
  );
}

export default TabNavigation;



