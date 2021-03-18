import React from 'react';
import { Text, View } from 'react-native';

const SearchMovieGenreInfo = ({ genres }) => (
  <View style={{ flex: 1, flexDirection: 'row' }}>
    <Text>Genres: </Text>
    {genres.map((genreID, genreIndex) => (
      <Text key={genreIndex}>{genreID} </Text>
    ))}
  </View>
);

export default SearchMovieGenreInfo;
