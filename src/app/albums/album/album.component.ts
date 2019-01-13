import { Track } from './../../models/track.model';
import { TracksService } from './track/tracks.service';
import { AlbumsService } from './../albums.service';
import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
    
    album: Album;
    selectedTrack: Track;
    youtubeLink: SafeResourceUrl;

    constructor(
        private albumsService: AlbumsService, 
        private tracksService: TracksService, 
        private activatedRoute: ActivatedRoute,
        private sanitizer: DomSanitizer
        ) { }

    ngOnInit() {
        
        const id: number = +this.activatedRoute.snapshot.params['id'];
        this.album = this.albumsService.getAlbumById(id);
        this.makeYoutubeLink(this.album.tracks[0]);

        this.tracksService.selectedTrack.subscribe(
            (track: Track) => {
                this.makeYoutubeLink(track);
            }
        )
    }

    makeYoutubeLink(track: Track)
    {
        this.selectedTrack = track;
        const linkBegining = 'https://www.youtube-nocookie.com/embed/';
        const linkEnd = '?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1';

        this.youtubeLink = this.sanitizer.bypassSecurityTrustResourceUrl(
            linkBegining + this.tracksService.getYoutubeLink(this.selectedTrack.id) + linkEnd);
    }
}
