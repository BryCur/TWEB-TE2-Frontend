import { FilmDTO } from "./film.dto";

export class reqResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: FilmDTO[];
}