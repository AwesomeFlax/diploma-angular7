import { environment } from 'src/environments/environment';
import { Artist } from "../models/artist.model";
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Pager } from '../models/pager.model';

@Injectable()
export class ArtistsService {

    artists: Artist[] = []; 
    pagination: Pager = new Pager();

    constructor(private httpClient: HttpClient) { }

    getArtists()
    {
        return this.httpClient.get<Artist[]>(`${environment.API_URL}artists?pagenumber=${this.pagination.CurrentPage}`);
    }

    getArtistById(id: number, params?: HttpParams)
    {
        return this.httpClient.get<Artist>(`${environment.API_URL}artists/${id}`);
    }

    setUpPager()
    {
        return this.httpClient.get<Artist[]>(`${environment.API_URL}artists`, { observe: 'response' } );
    }
}
