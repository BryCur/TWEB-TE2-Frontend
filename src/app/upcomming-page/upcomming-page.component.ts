import { Component, OnInit } from '@angular/core';
import { FilmDTO } from '../models/film.dto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { reqResponse } from '../models/req-response.dto';

@Component({
  selector: 'app-upcomming-page',
  templateUrl: './upcomming-page.component.html',
  styleUrls: ['./upcomming-page.component.css']
})
export class UpcommingPageComponent implements OnInit {

  imageURL: string = "https://image.tmdb.org/t/p/w500/";
  currentPage: number = 1;
  totalPage: number;
  ok: boolean;
  tabFilm: FilmDTO[] = [];
  favFilms: FilmDTO[] = [];
  favGenres: Set<number> = new Set<number>();


  constructor(private http: HttpClient) { }

  ngOnInit() {
    // favorite retrieving 
    this.favFilms = JSON.parse(sessionStorage.getItem('favorites'));

    if (this.favFilms) {
      for (let i = 0; i < this.favFilms.length; ++i) {
        this.favFilms[i].genre_ids.forEach(id => this.favGenres.add(id));
      }
    }

    console.log(this.favGenres);

    this.executeRequest()

  }

  /**
   * Execute the get request to gather the upcomming films
   */
  async executeRequest() {
    // TODO affiner la recherche
    for (let i = 1; i <= 5; ++i) {
      const requestURL = environment.API_URL + "3/movie/upcoming?page=" + i + "&api_key=" + environment.API_KEY;
      // lancement de la requête
      await this.http.get(requestURL).toPromise().then(
        (res: reqResponse) => {
          res.results.forEach(f => this.tabFilm.push(f));
          this.totalPage = res.total_pages;
        }, err => {
          console.log('that is no good buddy....');
          console.log(err);
        }
      )
    }

    if (this.favGenres.size > 0) {
      this.tabFilm = this.tabFilm.filter(elem => {
        for (let i = 0; i < elem.genre_ids.length; ++i) {
          if (this.favGenres.has(elem.genre_ids[i])) {
            return true;
          }
        }
        return false;
      });
    }
  }

}
