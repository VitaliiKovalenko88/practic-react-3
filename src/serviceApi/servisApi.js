import axios from "axios";
const API_KEY = "52102081be446c1b62679888583e10e9";
axios.defaults.baseURL = "https://api.themoviedb.org";

export const fetchTrendingMovies = async (page) => {
  const url = `/3/trending/movie/day?api_key=${API_KEY}&page=${page}`;
  const movies = await axios.get(url);

  return movies;
};

export const fetchDetaileMovie = async (id) => {
  const url = `/3/movie/${id}?api_key=${API_KEY}`;
  const film = await axios.get(url);

  return film;
};

export const fetchMovieByQuery = async (query) => {
  const url = `/3/search/movie?api_key=${API_KEY}&query=${query}`;
  const response = await axios.get(url);
  const { data } = response;
  return data;
};

export const fetchMovieCast = async (id) => {
  const url = `/3/movie/${id}/credits?api_key=${API_KEY}`;
  const { data } = await axios.get(url);

  return data;
};

export const fetchReviews = async (id) => {
  const url = `/3/movie/${id}/reviews?api_key=${API_KEY}`;
  const reviews = await axios.get(url);
  const { data } = reviews;
  return data;
};
