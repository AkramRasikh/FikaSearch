import React, { useState, useEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import SearchInput from './SearchInput';
import SearchMovieContainer from './SearchMovieContainer';

const Landing = ({ movieListWithSearchKey }) => {
  const [searchText, onSearchText] = useState('');
  const [movies, setMovies] = useState(movieListWithSearchKey);

  useEffect(() => {
    const filteredMovieList = movieListWithSearchKey.filter((checkMovie) =>
      checkMovie.searchReference.includes(searchText),
    );
    setMovies(filteredMovieList);
  }, [searchText]);

  return (
    <ScrollView>
      <Text>Movies found: {movies.length}</Text>
      <SearchInput onSearchText={onSearchText} searchText={searchText} />
      {!!movies.length &&
        movies.map(({ title, genres, img }, index) => (
          <SearchMovieContainer
            title={title}
            genres={genres}
            img={img}
            index={index}
          />
        ))}
    </ScrollView>
  );
};

export default Landing;
