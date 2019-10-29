import React from "react";

/**
 * Count Component to show the total number of characters.
 * @param {*} props has the count
 */
const Count = props => {
  const { count } = props;
  return (
    <>
      <div>Total Characters : {count}</div>
    </>
  );
};

export default Count;
