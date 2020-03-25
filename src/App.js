import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";

import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";
import { MovieList } from "./components/MovieList";

class App extends Component {
  state = { results: [] };

  _handleResults = results => {
    this.setState({ results });
  };

  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.results.length === 0 ? (
          <p>Sin resultados</p>
        ) : (
          <MovieList movies={this.state.results} />
        )}
      </div>
    );
  }
}

export default App;
