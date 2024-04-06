import React, { useId } from "react";

const Email = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>Email</label>
      <input type="email" id={id} />
    </div>
  );
};

export default Email;
