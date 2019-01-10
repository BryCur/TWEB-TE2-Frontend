import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { reqResponse } from '../models/req-response.dto';
import { FilmDTO } from '../models/film.dto';

@Component({
  selector: 'app-popular-page',
  templateUrl: './popular-page.component.html',
  styleUrls: ['./popular-page.component.css']
})
export class PopularPageComponent implements OnInit {

  imageURL: string = "https://image.tmdb.org/t/p/w500/";
  currentPage: number = 1;
  totalPage: number;
  ok: boolean;
  tabFilm: FilmDTO[] = [];
  favFilms: Array<FilmDTO>[];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.executeRequest()
  }

  /**
   * Execute the get request to gather the popular films
   */
  executeRequest(): void {
    const requestURL = environment.API_URL + "3/movie/popular?page=" + this.currentPage + "&api_key=" + environment.API_KEY;
    // lancement de la requête
    this.http.get(requestURL).toPromise().then(
      (res: reqResponse) => {
        console.log(res);

        this.tabFilm = res.results;
        this.totalPage = res.total_pages;


        console.log(this.tabFilm);
      }, err => {
        console.log('that is no good buddy....');
        console.log(err);
      }
    )
  }

  addToFav(f: FilmDTO): void {
    //TODO
  }

}
