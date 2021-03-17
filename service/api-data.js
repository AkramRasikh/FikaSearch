import axios from 'axios';

export const movieDataAPI = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false',
    );
    return response.data.results;
  } catch (error) {
    console.log('error: ', error);
  }
};

export const movieDataAPISecond = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false&query=shrek',
    );
    return response.data.results;
  } catch (error) {
    console.log('error: ', error);
  }
};

export const movieGenreAPI = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US',
    );
    return response.data.genres;
  } catch (error) {
    console.log('error: ', error);
  }
};
