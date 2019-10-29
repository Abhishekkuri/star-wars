import React from "react";

/**
 * Error Component to show the error message from Backend
 * @param {*} props error body
 */
const error = props => {
  return <>Error:{props.error.message}</>;
};

export default error;
