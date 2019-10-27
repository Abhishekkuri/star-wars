import React from "react";
const film = props => {
  console.log(props.film);
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
