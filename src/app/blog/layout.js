import React from "react";
import TitleBar from "../components/TitleBar";

const BlogLayout = ({ children }) => {
  return (
    <main>
      <TitleBar text="Blog" />
      {children}
    </main>
  );
};

export default BlogLayout;