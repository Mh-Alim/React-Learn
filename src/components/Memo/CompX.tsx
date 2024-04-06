import React, { memo } from "react";
import CompC from "./CompC";

const CompX = memo(() => {
  console.log("comp-x");
  return (
    <div>
      CompX
      <CompC />
    </div>
  );
});

export default CompX;
