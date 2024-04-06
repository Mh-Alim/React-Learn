import React, { memo } from "react";

const CompF = memo(() => {
  console.log("comp - f");
  return <div>CompF</div>;
});

export default CompF;
