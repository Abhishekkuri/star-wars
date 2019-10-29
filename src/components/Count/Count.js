import React from "react";

/**
 * Count Component to show the total number of characters.
 */
const Count = props => {
  return (
    <>
      <div>Total Characters : {props.count}</div>
    </>
  );
};

export default Count;
