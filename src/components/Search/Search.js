import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import CharacterDetail from "../CharacterDetail/CharacterDetail";
import Error from "../Error/Error";

class Search extends Component {
  state = {
    characters: [],
    count: 0,
    isLoading: true,
    error: null,
    charactersToShow: []
  };

  handleSearch = event => {
    event.preventDefault();
    let CHARACTER_NAME = event.target.elements.character.value;
    axios
      .get("https://swapi.co/api/people/?search=" + CHARACTER_NAME)
      .then(response => {
        console.log(response.data.results);
        const result = _.values(response.data.results);
        this.setState({
          characters: result,
          count: result.length,
          isLoading: false,
          charactersToShow: result.slice(0, 5)
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false,
          error: error
        });
      });
  };

  count = () => {
    if (this.state.count !== 0) {
      return <div>Total Characters : {this.state.count}</div>;
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSearch}>
          <div className="form-group">
            <div className="row">
              <div className="col-md-2" />
              <input
                type="text"
                className="form-control col-md-5"
                placeholder="Character's name"
                name="character"
              />
              <button type="submit" className="btn btn-primary col-md-3">
                <span
                  className="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                />
                Search
              </button>
            </div>
          </div>
        </form>

        <br />

        <div>{this.count()}</div>

        <br />

        {this.state.charactersToShow.map(character => {
          return <CharacterDetail character={character} key={character.name} />;
        })}
      </>
    );
  }
}

export default Search;
