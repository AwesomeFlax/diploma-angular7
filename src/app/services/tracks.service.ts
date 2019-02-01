import { Track } from 'src/app/models/track.model';
import { EventEmitter } from '@angular/core';

export class TracksService {

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

    getYoutubeLink(id: number): string
    {
        return 'https://youtu.be/8ACMtDdtH8U'.substr(17);
    }
}