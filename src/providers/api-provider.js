import axios from 'axios';
import {generatePath} from 'react-router-dom';

import {importApiMovie, importApiMovies} from '../converters/movie-converter';
import {exportApiReview, importApiReview, importApiReviews} from '../converters/review-converter';
import {importApiUser} from '../converters/user-converter';

const BASE_URL = `https://6.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

const ApiPath = {
  MOVIES: `/films`,
  MOVIE: `/films/:movieId`,
  PROMO_MOVIE: `/films/promo`,
  MY_LIST: `/favorite`,
  FAVORITE: `/favorite/:movieId/:status`,
  REVIEWS: `/comments/:movieId`,
  REVIEW: `/comments/:movieId`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
};

const Status = {
  UNAUTHORIZED: 401,
};

const createApiClient = (onUnauthorized) => {
  const client = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  client.interceptors.response.use((response) => response, (error) => {
    const {response = {}} = error;
    if (response.status === Status.UNAUTHORIZED) {
      onUnauthorized();
    }
    throw error;
  });

  return client;
};

const importApiMovieFromResponse = (response) => importApiMovie(response.data);
const importApiMoviesFromResponse = (response) => importApiMovies(response.data);
const importApiReviewFromResponse = (response) => importApiReview(response.data);
const importApiReviewsFromResponse = (response) => importApiReviews(response.data);
const importApiUserFromResponse = (response) => importApiUser(response.data);

export default class ApiProvider {
  constructor(onUnauthorized) {
    this._client = createApiClient(onUnauthorized);
  }

  /** @return {Promise<Array<{id:String}>>} */
  async getMovies() {
    return this._client.get(ApiPath.MOVIES)
      .then(importApiMoviesFromResponse);
  }

  /**
   * @param {String} movieId
   * @return {Promise<{id:String}>}
   */
  async getMovie(movieId) {
    const params = {
      movieId,
    };
    return this._client.get(generatePath(ApiPath.MOVIE, params))
      .then(importApiMovieFromResponse);
  }

  /** @return {Promise<{id:String}>} */
  async getPromoMovie() {
    return this._client.get(ApiPath.PROMO_MOVIE)
      .then(importApiMovieFromResponse);
  }

  /** @return {Promise<Array<{id:String}>>} */
  async getMyList() {
    return this._client.get(ApiPath.MY_LIST)
      .then(importApiMoviesFromResponse);
  }

  /**
   * @param {String} movieId
   * @param {Boolean} force
   * @return {Promise<{id:String}>}
   */
  async toggleFavoriteMovie(movieId, force) {
    const url = generatePath(ApiPath.FAVORITE, {
      movieId,
      status: +force,
    });
    return this._client.post(url)
      .then(importApiMovieFromResponse);
  }

  /**
   * @param {String} movieId
   * @return {Promise<{id:String}>}
   */
  async getReviews(movieId) {
    const url = generatePath(ApiPath.REVIEWS, {
      movieId,
    });
    return this._client.get(url)
      .then(importApiReviewsFromResponse);
  }

  /**
   * @param {String} movieId
   * @param {{rating: Number, text: String}} localReview
   * @return {Promise<{id:String}>}
   */
  async postReview(movieId, localReview) {
    const url = generatePath(ApiPath.REVIEWS, {
      movieId,
    });
    return this._client.post(url, exportApiReview(localReview))
      .then(importApiReviewFromResponse);
  }

  /**
   * @param {String} email
   * @param {String} password
   * @return {Promise<{id, email, name, avatar}>}
   */
  async postLogin({email, password}) {
    return this._client.post(ApiPath.LOGIN, {email, password})
      .then(importApiUserFromResponse);
  }

  /** @return {Promise<{id, email, name, avatar}>} */
  async getLogin() {
    return this._client.get(ApiPath.LOGIN)
      .then(importApiUserFromResponse);
  }

  /** @return {Promise} */
  async logout() {
    return this._client.get(ApiPath.LOGOUT);
  }
}
