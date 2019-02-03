import { Track } from 'src/app/models/track.model';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class TracksService {

    constructor(private httpClient: HttpClient) {}
    
    selectedTrack = new EventEmitter<Track>();
    selectedAlbumTracks: Track[];

    getThisAlbumTracks(): Track[]
    {
        return this.selectedAlbumTracks.slice();
    }

    loadSeletedAlbumTracks(tracks: Track[])
    {
        this.selectedAlbumTracks = tracks;
    }

    getYoutubeLink(id: number)
    {
        return this.httpClient.get(`${environment.API_URL}songs/${id}/youtube`);
    }
}