import React from 'react';
import { Text, View, Image } from 'react-native';
import SearchMovieGenreInfo from './SearchMovieGenreInfo';

const SearchMovieInfoContainer = ({ title, genres, img, index }) => (
  <View key={index} style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>
    <Image
      source={{ uri: img }}
      style={{ width: 40, height: 40, marginRight: 10 }}
    />
    <View>
      <Text>{title}</Text>
      {genres && <SearchMovieGenreInfo genres={genres} />}
    </View>
  </View>
);

export default SearchMovieInfoContainer;
