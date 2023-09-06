"use client"
import React, { useState } from "react";
import {DatePicker} from "@/app/components/projectcomponents/DatePicker/DatePicker";

export default function DatePickerPage() {
  const [value, setValue] = useState()

  return (
    <>
      <div className="h-screen w-screen  ">
        <div className="m-0 mt-4 flex justify-center">
          <DatePicker value={value} onChange={setValue}/>
        </div>
      </div>
    </>
  );
}
