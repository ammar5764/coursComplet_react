import React, { useState } from "react";

const Curseur = () => {
  const [rangeValue, setRangeValue] = useState();
  return (
    <div>
      <input
        type="range"
        min="1"
        max="250"
        defaultValue={rangeValue}
        onChange={(e) => setRangeValue(e.target.value)}
      />
    </div>
  );
};

export default Curseur;
