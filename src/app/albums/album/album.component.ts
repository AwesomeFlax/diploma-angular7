import { Track } from 'src/app/models/track.model';
import { TracksService } from '../../services/tracks.service';
import { AlbumsService } from '../../services/albums.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { CollectionsService } from 'src/app/services/collections.service';
import { Collection } from 'src/app/models/collections.model';

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
    releaseDate: string;

    constructor(
        private tracksService: TracksService, 
        private activatedRoute: ActivatedRoute,
        private sanitizer: DomSanitizer,
        private usersService: UsersService,
        private collectionsService: CollectionsService,
        ) { }

    ngOnInit() {       
        this.album = this.activatedRoute.snapshot.data["album"];
        this.releaseDate = new Date(this.album.releaseDate).toLocaleDateString();
        this.tracks = this.album.tracks;
        this.selectedTrack = this.tracks[0];
        this.makeYoutubeLink();

        this.tracksService.selectedTrack.subscribe(
            (track: Track) => {
                this.selectedTrack = track;
                this.makeYoutubeLink();
            }
        );

        this.TrackStatuses();
    }

    makeYoutubeLink() {
        const linkBegining = 'https://www.youtube-nocookie.com/embed/';
        const linkEnd = '?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1';

        let youtubeVideoId: string;

        this.tracksService.getYoutubeLink(this.selectedTrack.id)
            .subscribe((resp: string) =>
            {
                youtubeVideoId = resp;
                this.youtubeLink = this.sanitizer.bypassSecurityTrustResourceUrl(
                    linkBegining + youtubeVideoId + linkEnd);
            });
    }

    ngOnDestroy(): void 
    {
        if (this.subscription !== undefined) {
            this.subscription.unsubscribe();
        }
    }

    TrackStatuses() {
        if (this.usersService.IsAuthorized()) {
            this.collectionsService.getUserCollections()
            .subscribe(
                (response: Collection[]) => {
                    if (response.length > 0) {
                        response.forEach(element => {
                                this.tracks.forEach(track => {
                                    if (track.id == element.track.id) {
                                        track.isInLibrary = true;
                                    }
                                });
                            }
                        )
                    }
                }
            );
        }
    }
}
