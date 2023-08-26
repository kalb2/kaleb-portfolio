import React from "react";
import TitleBar from "../components/TitleBar/TitleBar";
import BlogLayout from "./layout";
import CardRow from "../components/Card/CardRow";
import Card from "../components/Card/Card";

export default function BlogPage() {
  return (
    <>
      <CardRow>
        <Card text="hello" title="Title" href="/" />
        <Card text="hello" title="Title" href="/" />
        <Card text="hello" title="Title" href="/" />
      </CardRow>
    </>
  );
}
