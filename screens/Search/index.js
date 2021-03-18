import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View } from 'react-native';
import TextInput from '../../components';
import isArrayAInArrayB from '../../utils';
import SearchMovieContainer from './SearchMovieContainer';

const Search = ({ movieList }) => {
  const [searchText, onSearchText] = useState('');
  const [movies, setMovies] = useState(movieList);

  const filterMovieList = (splitSearchText) =>
    movieList.filter(
      (checkMovie) =>
        checkMovie.searchReference.includes(searchText) ||
        isArrayAInArrayB(splitSearchText, checkMovie.searchRefTitleGenre),
    );

  useEffect(() => {
    const splitSearchText = searchText
      .split(' ')
      .filter((wordRef) => wordRef !== '');

    const filteredMovieList = filterMovieList(splitSearchText);
    setMovies(filteredMovieList);
  }, [searchText]);

  return (
    <ScrollView>
      <View style={{ margin: 10 }}>
        <TextInput onChangeText={onSearchText} text={searchText} />
        <Text>Movies found: {movies.length}</Text>
      </View>
      {!!movies.length &&
        movies.map(({ title, genres, img }, index) => (
          <SearchMovieContainer
            title={title}
            genres={genres}
            img={img}
            key={index}
          />
        ))}
    </ScrollView>
  );
};

export default Search;
