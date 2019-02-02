import { Artist } from './../models/artist.model';
import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../services/artist.service';
import { TouchSequence } from 'selenium-webdriver';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-artists',
    templateUrl: './artists.component.html',
    styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

    artistList: Artist[];
    subscription: Subscription;

    constructor(private artistsService: ArtistsService,
                private activatedRoute: ActivatedRoute) { }

    ngOnInit() 
    {
        this.artistList = this.activatedRoute.snapshot.data["artists"];
    }
}
