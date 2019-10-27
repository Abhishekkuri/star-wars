import React from "react";
import _ from "lodash";
import "./CharacterDetail.css";
import Film from "../Film/Film";

const CharacterDetail = characterDetail => {
  const character = characterDetail.character;
  const {
    birth_year,
    eye_color,
    films,
    gender,
    hair_color,
    height,
    homeworld,
    mass,
    name,
    skin_color,
    species,
    starships,
    url,
    vehicles
  } = character;
  const filmsToShow = [...films];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="d-flex align-items-center justify-content-Start h1 block">
              {name}
            </div>
            <div>Birth Year : {birth_year}</div>
            <div className="d-flex align-items-center justify-content-start block">
              <div>
                <h3>Films</h3>
                {filmsToShow.map(film => {
                  return <Film film={film} key={film} />;
                })}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-8">
            <div className="d-flex align-items-center justify-content-end block">
              <div>Species : {species}</div>
            </div>
            <div className="d-flex align-items-center justify-content-end block">
              <div>Gender : {gender}</div>
            </div>
            <div className="d-flex align-items-center justify-content-end block">
              <div>Height : {height}</div>
            </div>
            <div className="d-flex align-items-center justify-content-end block">
              <div>Eye Color : {eye_color}</div>
            </div>
            <div className="d-flex align-items-center justify-content-end block">
              <div>Hair Color : {hair_color}</div>
            </div>
            <div className="d-flex align-items-center justify-content-end block">
              <div>Skin Color : {skin_color}</div>
            </div>
            <div className="d-flex align-items-center justify-content-end block">
              <div>Mass : {mass}</div>
            </div>
            <div className="d-flex align-items-center justify-content-end block">
              <div>HomeWorld : {homeworld}</div>
            </div>
          </div>
          {/* <div className="col-12 col-xl-4 order-3 order-xl-4">
            <div className="d-flex align-items-center justify-content-start block">
              <div>
                <h3>Films</h3>
                {filmsToShow.map(film => {
                  return <Film film={film} key={film} />;
                })}
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <br />
    </>
  );
};

export default CharacterDetail;
