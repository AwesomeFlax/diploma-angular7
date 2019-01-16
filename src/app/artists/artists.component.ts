import { Artist } from './../models/artist.model';
import { Component, OnInit } from '@angular/core';
import { ArtistsService } from './artitst.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
    selector: 'app-artists',
    templateUrl: './artists.component.html',
    styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

    artistList: Artist[]

    constructor(private artistsService: ArtistsService) { }

    ngOnInit() 
    {
        this.artistList = this.artistsService.getArtists();
    }

    onArtistClick(artist: Artist)
    {
        
    }
}
