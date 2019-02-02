import { environment } from 'src/environments/environment';
import { Artist } from "../models/artist.model";
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from "@angular/common/http";
import { Pager } from '../models/pager.model';

@Injectable()
export class ArtistsService {

    artists: Artist[] = []; 
    pagination: Pager;

    constructor(private httpClient: HttpClient) { }

    getArtists(params?: HttpParams)
    {
        let pager = new HttpParams();
        
        if (this.pagination != undefined)
        {
            pager.set('pagenumber', this.pagination.CurrentPage.toString());
        }
        else
        {
            this.httpClient.get<Artist[]>(`${environment.API_URL}artists`, { observe: 'response' } )
            .subscribe(resp => 
                {
                    this.pagination = JSON.parse(resp.headers.get('Paging-Headers'));
                });
            
            pager.set('pagenumber', '1');
        }

        return this.httpClient.get<Artist[]>(`${environment.API_URL}artists?pagenumber=${this.pagination.CurrentPage}`, );
    }

    getArtistById(id: number, params?: HttpParams)
    {
        return this.httpClient.get<Artist>(`${environment.API_URL}artists/${id}`);
    }
}
