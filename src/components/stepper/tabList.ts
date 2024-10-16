import React from "react";
import Fourth from "../fourth";
import Third from "../third";
import Fifth from "../fifth";


const stepList: { label: string; value: string; component: React.ComponentType<any> }[] = [
  {
    label: "Step 1: Personal Information",
    value: "1",
    component: Fourth,
  },
  {
    label: "Step 2: Third",
    value: "2",
    component: Fifth,
  },
  {
    label: "Step 2: Address Information",
    value: "3",
    component: Third,
  },

];



export default stepList;
