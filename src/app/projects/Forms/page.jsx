import Card from "@/app/components/Card/Card";
import CardRow from "@/app/components/Card/CardRow";
import TitleBar from "@/app/components/TitleBar/TitleBar";
import React from "react";

export default function FormsPage() {
  return (
    <>
      <TitleBar text="Forms" />
      <CardRow>
        <Card text="001" title="useRef Form" href="/projects/Forms/useRef" />
        <Card text="002" title="useState Form" href="/projects/Forms/useState" />
      </CardRow>
    </>
  );
}
