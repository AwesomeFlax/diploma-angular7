import { AlbumsService } from './albums.service';
import { Album } from './../models/album.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TracksService } from './album/track/tracks.service';

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

    albumsList: Album[];

    constructor(
        private albumsService: AlbumsService,
        private trackService: TracksService, 
        private router: Router
        ) { }

    ngOnInit() {
        this.albumsList = this.albumsService.getAlbums();
    }

    onAlbumSelect(album: Album) {
        this.albumsService.selectedAlbum.emit(album);
        this.trackService.loadSeletedAlbumTracks(album.tracks);
        //console.log(album);
    }
}
