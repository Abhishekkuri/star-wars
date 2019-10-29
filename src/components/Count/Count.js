import React from "react";

/**
 * Count Component to show the total number of characters.
 * @param {*} props has the count in state
 */
const Count = props => {
  return (
    <>
      <div>Total Characters : {props.count}</div>
    </>
  );
};

export default Count;
