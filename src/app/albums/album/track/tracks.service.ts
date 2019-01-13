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
        if (id === 1)
            return 'https://youtu.be/J7MYJ8Kxhwc'.substr(17);

        if (id === 2)
            return 'https://youtu.be/qls3OGpOfwY'.substr(17);

        if (id === 3)
            return 'https://youtu.be/-YAWbuWP4yc'.substr(17);

        if (id === 4)
            return 'https://youtu.be/V2c8zx2G4bs'.substr(17);

        if (id === 5)
            return 'https://youtu.be/8CdcCD5V-d8'.substr(17);

        if (id === 6)
            return 'https://youtu.be/T64_LKQyp0I'.substr(17);

        if (id === 7)
            return 'https://youtu.be/ryr75N0nki0'.substr(17);

        if (id === 8)
            return 'https://youtu.be/8ACMtDdtH8U'.substr(17);
    }
}