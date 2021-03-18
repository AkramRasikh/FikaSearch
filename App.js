import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import {
  movieDataAPI,
  movieDataAPISecond,
  movieGenreAPI,
} from './service/api-data';
import Search from './screens/Search';

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const flattenGenreData = (movieGenreData) =>
    movieGenreData.reduce((obj, cur) => {
      const name = cur.name;
      const id = cur.id;
      const keyObj = { [id]: name };
      return { ...obj, ...keyObj };
    }, {});

  const mapMovieData = (movieAPIData, genreKey) =>
    movieAPIData.map((oneMovie) => {
      const genres = oneMovie.genre_ids.map((genreId) => genreKey[genreId]);
      const searchReference = oneMovie.title + ' ' + genres.join(' ');
      return {
        title: oneMovie.title,
        img: 'https://image.tmdb.org/t/p/w500/' + oneMovie.poster_path,
        genres,
        searchReference,
        searchRefTitleGenre: searchReference.split(' '),
      };
    });

  useEffect(() => {
    async function fetchData() {
      const [movieDataOne, movieDataTwo, movieGenreData] = await Promise.all([
        movieDataAPI(),
        movieDataAPISecond(),
        movieGenreAPI(),
      ]);
      const movieAPIData = [...movieDataOne, ...movieDataTwo];
      const genreKey = flattenGenreData(movieGenreData);
      const movieDataMapped = mapMovieData(movieAPIData, genreKey);
      setMovieList(movieDataMapped);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!!movieList.length) setIsLoading(false);
  }, [movieList]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size='large' color='#00ff00' />
      ) : (
        <Search movieList={movieList} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20,
  },
});

export default App;
