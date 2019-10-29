import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import CharacterDetail from "../CharacterDetail/CharacterDetail";
import Error from "../Error/Error";
import Count from "../Count/Count";

/**
 * Search Component to manage the searching of a character and maintaining the State
 */
class Search extends Component {
  // Default State
  state = {
    characters: [],
    count: 0,
    isLoading: false,
    error: []
  };

  // Search Evenet Handler to fetch the data using axios library
  handleSearch = event => {
    event.preventDefault();
    // Setting the isLoading true for the Spinner
    this.setState({
      isLoading: true
    });
    // Fetching the data with character name using CHARACTER_NAME
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
      // Catching the error  and setting it inside the state
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false,
          error: _.values(error)
        });
      });
  };

  // Function to render the Count Component which shows the number of Characters fetched in the result of fetch query
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

  // Function to render the Spinner inside the button based on isLoading property of state
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

  //Function to render the error Component in case of any error
  error = () => {
    this.state.error.map(error => {
      if (error !== []) {
        return <Error error={error} key={error} />;
      } else {
        return null;
      }
    });
  };

  // Render method to render the JSX of Search body
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
        {/* Rendering the CharacterDetail Component to show the details of a character. Showing only 5 characters in case of the result  */}
        {this.state.characters.slice(0, 5).map(character => {
          return <CharacterDetail character={character} key={character.name} />;
        })}
      </>
    );
  }
}

export default Search;
