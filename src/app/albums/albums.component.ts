import { AlbumsService } from '../services/albums.service';
import { Album } from './../models/album.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
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
        private router: Router
        ) { }

    ngOnInit() {
        this.subscription = this.albumsService.getAlbums()
            .subscribe(
                (albums: Album[]) => this.albumsList = albums,
                (error: Error) => {
                    console.log(error.message);
                }
            );
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
