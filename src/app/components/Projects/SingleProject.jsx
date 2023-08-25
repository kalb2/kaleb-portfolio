"use client"
import React, { useEffect } from "react";
import { useTabContentContext } from "../Tabs/TabContentContext";
import TabNavigation from "../Tabs/TabNavigation";
import ProjectRight from "./ProjectRight";
import WhiteTitleBar from "../TitleBar/WhiteTitleBar";

function SingleProject({ title, children, tabContentData }) {
  const { dispatch } = useTabContentContext();

  useEffect(() => {
    dispatch({ type: "SET_CONTENT_DATA", payload: tabContentData });
  }, [tabContentData, dispatch]);

  return (
    <>
        <WhiteTitleBar text={title} />
        <div className="grid-cols-basic auto-rows-basic grid divide-x border-b ">
          <TabNavigation />
          <ProjectRight />
        </div>
    </>
  );
}

export default SingleProject;

