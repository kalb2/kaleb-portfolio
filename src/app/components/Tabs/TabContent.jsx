import React from "react";

function TabContent({ activeTab, tabs }) {
  return <div>{tabs[`tab${activeTab + 1}`]}</div>;
}

export default TabContent;
