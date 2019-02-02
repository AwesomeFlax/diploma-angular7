import { Album } from '../models/album.model';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ArtistsService } from './artist.service';
import { Pager } from '../models/pager.model';

@Injectable()
export class AlbumsService {
    
    selectedAlbum = new EventEmitter<Album>();
    albums: Album[] = [];
    pagination: Pager;

    constructor(private httpClient: HttpClient) {}
    
    getAlbums()
    {
        let pager = new HttpParams();
        
        if (this.pagination != undefined)
        {
            pager.set('pagenumber', this.pagination.CurrentPage.toString());
        }
        else
        {
            this.httpClient.get<Album[]>(`${environment.API_URL}albums`, { observe: 'response' } )
            .subscribe(resp => 
                {
                    this.pagination = JSON.parse(resp.headers.get('Paging-Headers'));
                });
            
            pager.set('pagenumber', '1');
        }

        return this.httpClient.get<Album[]>(`${environment.API_URL}albums?pagenumber=${this.pagination.CurrentPage}`, );
    }

    getAlbumsByArtist(artistId: number)
    {
        return this.httpClient.get<Album[]>(`${environment.API_URL}albums/${artistId}/for-artist`);
    }

    getAlbumsById(albumId: number)
    {
        return this.httpClient.get<Album>(`${environment.API_URL}albums/${albumId}`);
    }
}