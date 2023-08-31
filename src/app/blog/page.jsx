"use client"
import React from "react";
import TitleBar from "../components/TitleBar/TitleBar";
import BlogLayout from "./layout";
import CardRow from "../components/Card/CardRow";
import Card from "../components/Card/Card";
import { H1, H2, H3, H4, P } from "../styles/components";
import Modal from "../components/Modal/Modal";
import { useState } from 'react';
import { theme } from "../styles/theme";

export default function BlogPage() {
  return (
    <>
    
      {/* <CardRow>
        <Card text="hello" title="Title" href="/" />
        <Card text="hello" title="Title" href="/" />
        <Card text="hello" title="Title" href="/" />
      </CardRow> */}
      <div>
        <H1 >This is a large heading</H1>
        <H2 >This is a large subheading</H2>
        <H3>This is a medium heading</H3>
        <H4>This is a small heading</H4>
        <P>This is a paragraph.</P>
      </div>
      {/* <div>
        <H1 large lines>This is a large heading</H1>
        <H2 large lines>This is a large subheading</H2>
        <H3 large lines>This is a medium heading</H3>
        <H4 large lines>This is a small heading</H4>
        <P >This is a paragraph.</P>
      </div> */}
      

    </>
  );
}
