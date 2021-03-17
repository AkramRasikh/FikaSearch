import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const SearchMovieInfoContainer = ({ title, genres, img, index }) => (
  <View key={index} style={{ display: 'flex' }}>
    <Text>{title}</Text>
    <View>
      <Text>Genres: </Text>
      {genres.map((genreID, genreIndex) => (
        <Text key={genreIndex}>{genreID} </Text>
      ))}
    </View>
    <View>
      <Image source={{ uri: img }} style={{ width: 40, height: 40 }} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20,
  },
});

export default SearchMovieInfoContainer;
