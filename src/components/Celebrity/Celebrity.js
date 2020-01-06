import React from "react";

const Celebrity = ({ celeb, likeness }) => {
  return (
    <div className="center ma">
      <div className="relative mt2">
        <p>{`Your face resembles ${celeb} with a likeness of ${likeness}%.`}</p>
      </div>
    </div>
  );
};

export default Celebrity;
