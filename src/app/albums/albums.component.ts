import { AlbumsService } from '../services/albums.service';
import { Album } from './../models/album.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TracksService } from '../services/tracks.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnDestroy {

    albumsList: Album[];
    subscription: Subscription;

    constructor(
        private albumsService: AlbumsService,
        private trackService: TracksService, 
        private activatedRoute: ActivatedRoute,
        private router: Router
        ) { }

    ngOnInit() {
        this.albumsList = this.activatedRoute.snapshot.data["albums"];
    }

    onAlbumSelect(album: Album) {
        this.albumsService.selectedAlbum.emit(album);
        this.trackService.loadSeletedAlbumTracks(album.tracks);
    }

    ngOnDestroy() {
        if (this.subscription !== undefined) {
            this.subscription.unsubscribe();
        }
    }
}
