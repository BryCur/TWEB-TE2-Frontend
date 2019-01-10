import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-popular-page',
  templateUrl: './popular-page.component.html',
  styleUrls: ['./popular-page.component.css']
})
export class PopularPageComponent implements OnInit {

  imageURL: string = "https://image.tmdb.org/t/p/w500/";
  noPage: number = 1;



  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.executeRequest
  }

  /**
   * Execute the get request to gather the popular films
   */
  executeRequest(): void {
    const requestURL = environment.API_URL + "3/movie/popular?page=" + this.noPage + "&api_key=" + environment.API_KEY;
    // lancement de la requête
    this.http.get(requestURL).toPromise().then(
      res => {
        console.log(res);

      }, err => {
        console.log('that is no good buddy....');
        console.log(err);
      }
    )
  }

}
