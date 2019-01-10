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
  favFilms: Array<FilmDTO>[];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.favFilms = JSON.parse(sessionStorage.getItem('favorites'));
    this.executeRequest()

  }

  /**
   * Execute the get request to gather the popular films
   */
  executeRequest(): void {
    // TODO affiner la recherche
    const requestURL = environment.API_URL + "3/movie/upcoming?page=" + this.currentPage + "&api_key=" + environment.API_KEY;
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

}
