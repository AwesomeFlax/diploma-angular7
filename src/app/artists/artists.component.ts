import { Artist } from './../models/artist.model';
import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../services/artitst.service';
import { TouchSequence } from 'selenium-webdriver';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-artists',
    templateUrl: './artists.component.html',
    styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

    artistList: Artist[];
    subscription: Subscription;

    constructor(private artistsService: ArtistsService) { }

    ngOnInit() 
    {
        this.subscription = this.artistsService.getArtists()
            .subscribe(
                (artist: Artist[]) => this.artistList = artist,
                (error: Error) => {
                    console.log(error.message);
                }
            );
    }
}
