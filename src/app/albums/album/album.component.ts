import { Track } from 'src/app/models/track.model';
import { TracksService } from '../../services/tracks.service';
import { AlbumsService } from '../../services/albums.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit, OnDestroy {
    
    album: Album;
    tracks: Track[];
    selectedTrack: Track;
    youtubeLink: SafeResourceUrl;
    subscription: Subscription;

    constructor(
        private albumsService: AlbumsService, 
        private tracksService: TracksService, 
        private activatedRoute: ActivatedRoute,
        private sanitizer: DomSanitizer,
        ) { }

    ngOnInit() {       
        this.album = this.activatedRoute.snapshot.data["album"];
        this.selectedTrack = this.album.tracks[0];
        this.makeYoutubeLink();

        this.tracksService.selectedTrack.subscribe(
            (track: Track) => {
                this.selectedTrack = track;
                this.makeYoutubeLink();
            }
        );
    }

    makeYoutubeLink() {
        console.log('makeYoutubeLink');
        const linkBegining = 'https://www.youtube-nocookie.com/embed/';
        const linkEnd = '?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1';

        this.youtubeLink = this.sanitizer.bypassSecurityTrustResourceUrl(
            linkBegining + this.tracksService.getYoutubeLink(this.selectedTrack.id) + linkEnd);
    }

    ngOnDestroy(): void {
        if (this.subscription !== undefined) {
            this.subscription.unsubscribe();
        }
    }
}
