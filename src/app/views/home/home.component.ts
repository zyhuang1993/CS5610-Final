import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../service/movie.client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: [any];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
   this.findNowPlayingMoviesByPages(1);
  }

  findNowPlayingMoviesByPages(page) {
    this.movieService.findNowPlayingMovies(page).subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  findImageForAMovie(movieId) {
    // return this.movieService.findImageByMovieId(movieId).subscribe((data: any))
  }
}
