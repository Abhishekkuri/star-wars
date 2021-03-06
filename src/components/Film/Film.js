import React from "react";

/**
 * film  component to show the films of a character
 * @param {*} props  the films
 */
const film = props => {
  return (
    <>
      <div>
        <a href="{props.film}" className="card-link">
          {props.film}
        </a>
      </div>
    </>
  );
};

export default film;
