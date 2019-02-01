import { Artist } from '../models/artist.model';
import { Album } from '../models/album.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Track } from '../models/track.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ArtistsService } from './artitst.service';

@Injectable()
export class AlbumsService {
    selectedAlbum = new EventEmitter<Album>();
    albums: Album[] = []; 

    constructor(private artistsService: ArtistsService,
                private httpClient: HttpClient) {}
    
    getAlbums()
    {
        return this.httpClient.get<Album[]>(`${environment.API_URL}/albums`);
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