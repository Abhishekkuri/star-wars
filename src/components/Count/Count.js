import React from "react";
import "./Count.css";

/**
 * Count Component to show the total number of characters.
 * @param {*} props has the count
 */
const Count = props => {
  const { count } = props;
  return (
    <>
      <div className="count">Total Characters : {count}</div>
    </>
  );
};

export default Count;
