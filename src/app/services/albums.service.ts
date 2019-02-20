import { Album } from '../models/album.model';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Albums } from '../models/albums.model';

@Injectable({providedIn: 'root'})
export class AlbumsService {
    
    selectedAlbum = new EventEmitter<Album>();

    constructor(private httpClient: HttpClient) {}
    
    getAlbums(pageNumber?: number)
    {
        if (pageNumber == null)
        {
            pageNumber = 1;
        }

        return this.httpClient.get<Albums>(`${environment.API_URL}albums?page=${pageNumber}`);
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