import { environment } from 'src/environments/environment';
import { Artist } from "../models/artist.model";
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from "@angular/common/http";

@Injectable()
export class ArtistsService {

    artists: Artist[] = []; 

    constructor(private httpClient: HttpClient) { }

    getArtists(params?: HttpParams)
    {
        return this.httpClient.get<Artist[]>(`${environment.API_URL}artists`);
    }

    getArtistById(id: number, params?: HttpParams)
    {
        return this.httpClient.get<Artist>(`${environment.API_URL}artists/${id}`);
    }
}
