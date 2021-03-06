import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiKey = 'd2d9450a243aa2b04c0ce3439b094b25';
  moviedbUrl = 'https://api.themoviedb.org/3';
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {
  }

  // tmdb
  findNowPlayingMovies(page) {
    const url = this.moviedbUrl + `/movie/now_playing?page=${page}&language=en-US&api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  findMovieDetailsById(movieId) {
    const url = this.moviedbUrl + `/movie/${movieId}?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(url);
  }

  searchMovies(keyword) {
    const url = this.moviedbUrl + `/search/movie?query=${keyword}&page=1&language=en-US&api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getCast(movieId) {
    const url = this.moviedbUrl + `/movie/${movieId}/credits?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  findPopularMoviesByPages(page) {
    const url = this.moviedbUrl + `/movie/popular?page=${page}&language=en-US&api_key=${this.apiKey}`;
    return this.http.get(url);
  }


  // own db
  findMovieByDbId(dbId) {
    const url = this.baseUrl + '/api/movie/' + dbId;
    return this.http.get(url);
  }

  createMovie(movie) {
    const url = this.baseUrl + '/api/movie';
    return this.http.post(url, movie);
  }

  updateReviewUsernameInMovie(userId, username) {
    const url = this.baseUrl + `/api/movie/${userId}`;
    return this.http.put(url, {username});
  }

  deleteUserReviewsInMovie(userId) {
    const url = this.baseUrl + `/api/movie/${userId}`;
    return this.http.delete(url);
  }



}
