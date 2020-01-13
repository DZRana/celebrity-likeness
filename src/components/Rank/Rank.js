import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className="ma4 mt0">
      <div className="color: #FFFF00 f3">{`${name.toUpperCase()}, your total number of photos tried is...`}</div>
      <div className="color: #FFFF00 f1">{entries}</div>
    </div>
  );
};

export default Rank;
