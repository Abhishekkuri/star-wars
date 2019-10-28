import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import CharacterDetail from "../CharacterDetail/CharacterDetail";
import Error from "../Error/Error";
import Count from "../Count/Count";

class Search extends Component {
  state = {
    characters: [],
    count: 0,
    isLoading: false,
    error: []
  };

  handleSearch = event => {
    event.preventDefault();
    this.setState({
      isLoading: true
    });
    let CHARACTER_NAME = event.target.elements.character.value;
    axios
      .get("https://swapi.co/api/people/?search=" + CHARACTER_NAME)
      .then(response => {
        console.log(response.data.results);
        const result = _.values(response.data.results);
        this.setState({
          characters: result,
          count: result.length,
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false,
          error: _.values(error)
        });
      });
  };

  count = () => {
    if (this.state.count !== 0) {
      return (
        <>
          <br />
          <Count count={this.state.count} />
        </>
      );
    }
  };

  spinner = () => {
    if (this.state.isLoading) {
      return (
        <span
          className="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        />
      );
    }
  };

  error = () => {
    this.state.error.map(error => {
      if (error !== []) {
        return <Error error={error} key={error} />;
      } else {
        return null;
      }
    });
  };

  render() {
    return (
      <>
        {this.error()}
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
              <div className="col-md-1" />
              <button type="submit" className="btn btn-primary col-md-2">
                {this.spinner()}
                Search
              </button>
            </div>
          </div>
        </form>

        <div>{this.count()}</div>

        {this.state.characters.slice(0, 5).map(character => {
          return <CharacterDetail character={character} key={character.name} />;
        })}
      </>
    );
  }
}

export default Search;
