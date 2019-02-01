import { Subscription } from 'rxjs';
import { Album } from 'src/app/models/album.model';
import { ArtistsService } from '../../services/artitst.service';
import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

    artist: Artist;
    albums: Album[];
    subscription: Subscription;

    constructor(private artistsService: ArtistsService, 
                private albumsService: AlbumsService,
                private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        const id: number = +this.activatedRoute.snapshot.params['id'];
        
        this.subscription = this.artistsService.getArtistById(id)
            .subscribe(
                (artist: Artist) => {
                    this.artist = artist;
                },
                (error: Error) => {
                    console.log(error.message);
                }
            );
    }
}
