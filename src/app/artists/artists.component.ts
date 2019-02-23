import { Artists } from './../models/artists.model';
import { Artist } from './../models/artist.model';
import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../services/artist.service';
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
        let response: Artists = this.activatedRoute.snapshot.data["artists"];
        this.pager = new Pager(response.pageNumber, response.pageSize, response.totalNumberOfPages, response.totalNumberOfRecords);
        this.artistList = response.results;
    }

    onNextClick()
    {
        if (this.pager.pageNumber < this.pager.totalNumberOfPages)
        {
            this.subscription = this.artistsService.getArtists(this.pager.pageNumber += 1).subscribe(
                (data: Artists) => 
                {
                    this.artistList = data.results;
                    this.pager = new Pager(data.pageNumber, data.pageSize, data.totalNumberOfPages, data.totalNumberOfRecords);
                },
                error => console.error(error)
            );           
        }
    }

    onPrevClick()
    {
        if (this.pager.pageNumber > 1)
        {
            this.subscription = this.artistsService.getArtists(this.pager.pageNumber -= 1).subscribe(
                (data: Artists) => 
                {
                    this.artistList = data.results;
                    this.pager = new Pager(data.pageNumber, data.pageSize, data.totalNumberOfPages, data.totalNumberOfRecords);

                },
                error => console.error(error)
            );
        }
    }
}
