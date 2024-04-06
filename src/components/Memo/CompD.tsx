import React, { memo } from "react";
import CompE from "./CompE";

const CompD = memo(() => {
  console.log("comp-d");
  return (
    <div>
      CompD
      <CompE />
    </div>
  );
});

export default CompD;
