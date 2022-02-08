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

export const fetchMovieByQuery = async (query, page) => {
  const url = `/3/movie/?api_key=${API_KEY}&query=${query}$page=${page}`;
  const films = await axios.get(url);

  return films;
};

export const fetchMovieCast = async (id) => {
  const url = `/3/movie/${id}/credits?api_key=${API_KEY}`;
  const theCast = await axios.get(url);

  return theCast;
};

export const fetchReviews = async (id, page) => {
  const url = `/3/movie/${id}/reviews?api_key=${API_KEY}`;
  const rewiews = await axios.get(url);
};
