import React from "react";

function TabContent({ activeTab }) {
  const tabContents = [
    "Content for Tab 1",
    "Content for Tab 2",
    "Content for Tab 3",
  ];

  return <div>{tabContents[activeTab]}</div>;
}

export default TabContent;
