import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.handleAddMovie = this.handleAddMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  //   handleAddMovie({ target }) {
  // }


  render() {
    const { movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText="oaaa"
          onSearchTextChange={() => {}}
          bookmarkedOnly
          onBookmarkedChange={() => {}}
          selectedGenre="thirller"
          onSelectedGenreChange={() => {}}
        />
        <MovieList movies={movies} />
        <AddMovie />

      </div>
    );
  }
}

export default MovieLibrary;
