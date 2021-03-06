import { environment } from 'src/environments/environment';
import { Artist } from "../models/artist.model";
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Pager } from '../models/pager.model';
import { Artists } from '../models/artists.model';
import { Track } from '../models/track.model';

@Injectable({providedIn: 'root'})
export class ArtistsService 
{
    constructor(private httpClient: HttpClient) { }

    getArtists(pageNumber?: number)
    {
        if (pageNumber == null)
        {
            pageNumber = 1;
        }

        return this.httpClient.get<Artists>(`${environment.API_URL}artists?page=${pageNumber}`);
    }

    getArtistById(id: number, params?: HttpParams)
    {
        return this.httpClient.get<Artist>(`${environment.API_URL}artists/${id}`);
    }

    getTopTracks(id: number)
    {
        return this.httpClient.get<Track[]>(`${environment.API_URL}artists/${id}/toptracks`);
    }
}
