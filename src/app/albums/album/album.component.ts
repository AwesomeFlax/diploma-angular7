import { TracksService } from './track/tracks.service';
import { AlbumsService } from './../albums.service';
import { Component, OnInit, Output, Input } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

    album: Album;

    constructor(
        private albumsService: AlbumsService, 
        private activatedRoute: ActivatedRoute
        ) { }

    ngOnInit() {
        /*this.albumsService.selectedAlbum.subscribe(
            (album: Album) => {
                this.album = album;
            }
        );*/

        const id: number = +this.activatedRoute.snapshot.params['id'];
        this.album = this.albumsService.getAlbumById(id);
    }
}
