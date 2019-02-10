import { Subscription } from 'rxjs';
import { Album } from 'src/app/models/album.model';
import { ArtistsService } from '../../services/artist.service';
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

    birthDate: string;
    deathDate: string;
    careerBeginDate: string;
    careerEndDate: string;

    constructor(private artistsService: ArtistsService, 
                private albumsService: AlbumsService,
                private activatedRoute: ActivatedRoute) 
            { }

    ngOnInit() {
        this.artist = this.activatedRoute.snapshot.data["artist"];        
        this.albums = this.artist.albums;

        this.birthDate = new Date(this.artist.birthDate).toLocaleDateString();
        
        if (this.artist.deathDate != null)
            this.deathDate = `— ${new Date(this.artist.deathDate).toLocaleDateString()}`;
        else
            this.deathDate = "";
        
        if (this.artist.careerEnd != null)
            this.careerEndDate = `— ${new Date(this.artist.careerEnd).getFullYear().toString()}`;
        else
            this.careerEndDate = "— Nowadays";

        if (this.artist.careerStart != null)
            this.careerBeginDate = new Date(this.artist.careerStart).getFullYear().toString();
        else
            this.careerBeginDate = "Unknown";
    }
}
