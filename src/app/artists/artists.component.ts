import { Artist } from './../models/artist.model';
import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../services/artist.service';
import { TouchSequence } from 'selenium-webdriver';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Pager } from '../models/pager.model';

@Component({
    selector: 'app-artists',
    templateUrl: './artists.component.html',
    styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

    artistList: Artist[];
    subscription: Subscription;
    pager: Pager;

    constructor(private artistsService: ArtistsService,
                private activatedRoute: ActivatedRoute) { }

    ngOnInit() 
    {
        this.pager = this.artistsService.pagination;
        this.artistList = this.activatedRoute.snapshot.data["artists"];
    }

    onNextClick()
    {
        if (this.pager.TotalPages > this.pager.CurrentPage)

        {
            this.pager.CurrentPage += 1;
            this.subscription = this.artistsService.getArtists().subscribe(
                (data: Artist[]) => 
                {
                    this.artistList = data;
                },
                error => console.error(error)
            );           
        }
    }

    onPrevClick()
    {
        if (this.pager.CurrentPage > 1)
        {
            this.pager.CurrentPage -= 1;
            this.subscription = this.artistsService.getArtists().subscribe(
                (data: Artist[]) => 
                {
                    this.artistList = data;
                },
                error => console.error(error)
            );
        }
    }
}
