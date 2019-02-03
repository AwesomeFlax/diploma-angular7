import { Album } from '../models/album.model';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ArtistsService } from './artist.service';
import { Pager } from '../models/pager.model';

@Injectable()
export class AlbumsService {
    
    selectedAlbum = new EventEmitter<Album>();
    albums: Album[] = [];
    pagination: Pager = new Pager();

    constructor(private httpClient: HttpClient) {}
    
    getAlbums()
    {
        return this.httpClient.get<Album[]>(`${environment.API_URL}albums?pagenumber=${this.pagination.CurrentPage}`);
    }

    getAlbumsByArtist(artistId: number)
    {
        return this.httpClient.get<Album[]>(`${environment.API_URL}albums/${artistId}/for-artist`);
    }

    getAlbumsById(albumId: number)
    {
        return this.httpClient.get<Album>(`${environment.API_URL}albums/${albumId}`);
    }

    setUpPager()
    {
        return this.httpClient.get<Album[]>(`${environment.API_URL}albums`, { observe: 'response' } );
    }
}