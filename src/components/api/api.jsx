import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = 'api_key=abcc14051ec92b4ea953107c3446d1d4';
const error = error => console.log('Error', error.message);
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrendTitles() {
  const response = await axios
    .get(`/trending/movie/week?${API_KEY}`)
    .catch(error);
  return response.data.results;
}

export async function fetchMovieId(movieId) {
  const response = await axios.get(`/movie/${movieId}?${API_KEY}`).catch(error);
  return response.data;
}
export async function fetchCast(movieId) {
  const response = await axios
    .get(`/movie/${movieId}/credits?${API_KEY}`)
    .catch(error);
  return response.data;
}

export async function fetchReviews(movieId) {
  const response = await axios
    .get(`/movie/${movieId}/reviews?${API_KEY}`)
    .catch(error);
  return response.data.results;
}

export async function fetchMovie(movie) {
  const response = await axios
    .get(
      `/search/movie?${API_KEY}&language=en-US&query=${movie}&page=1&include_adult=false`
    )
    .catch(error);
  return response.data.results;
}

fetchMovieId.propTypes = {
  movieId: PropTypes.number.isRequired,
};

fetchCast.propTypes = {
  movieId: PropTypes.number.isRequired,
};
fetchReviews.propTypes = {
  movieId: PropTypes.number.isRequired,
};
fetchMovie.propTypes = {
  movieId: PropTypes.string.isRequired,
};
