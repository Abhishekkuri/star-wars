import React from "react";

/**
 * Error Component to show the error message from Backend
 * @param {*} props contains error body
 */
const error = props => {
  const { message } = props.error;
  return (
    <>
      <div>Error : {message}</div>
    </>
  );
};

export default error;
