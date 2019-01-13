import { Album } from 'src/app/models/album.model';
import { ArtistsService } from './../artitst.service';
import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/albums/albums.service';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

    artist: Artist;
    albums: Album[];

    constructor(private artistsService: ArtistsService, 
                private albumsService: AlbumsService,
                private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        const id: number = +this.activatedRoute.snapshot.params['id'];
        this.artist = this.artistsService.getArtistsById(id);
        this.albums = this.albumsService.getAlbumsByArtist(id);
    }
}
