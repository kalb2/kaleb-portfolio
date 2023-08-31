import React from "react";
import TitleBar from "../components/TitleBar/TitleBar";
import BlogLayout from "./layout";
import CardRow from "../components/Card/CardRow";
import Card from "../components/Card/Card";
import { H1, H2, H3, H4, P } from '../styles/components'


export default function BlogPage() {
  return (
    <>
      {/* <CardRow>
        <Card text="hello" title="Title" href="/" />
        <Card text="hello" title="Title" href="/" />
        <Card text="hello" title="Title" href="/" />
      </CardRow> */}
              <div>
      <H1 lines large>This is a large heading</H1>
      <H2 lines large>This is a large subheading</H2>
      <H3 lines>This is a medium heading</H3>
      <H4>This is a small heading</H4>
      <P>This is a paragraph.</P>
    </div>
    </>
  );
}
