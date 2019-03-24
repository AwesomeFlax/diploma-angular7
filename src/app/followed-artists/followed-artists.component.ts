import { UsersService } from './../services/users.service';
import { Follow } from '../models/follow.model';
import { FollowsService } from './../services/follows.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from '../services/artist.service';
import { Artists } from '../models/artists.model';
import { Pager } from '../models/pager.model';
import { Artist } from '../models/artist.model';
import { Subscription } from 'rxjs';
import { Follows } from '../models/follows.model';
import { element } from '@angular/core/src/render3';

@Component({
    selector: 'app-followed-artists',
    templateUrl: './followed-artists.component.html',
    styleUrls: ['./followed-artists.component.css']
})
export class FollowedArtistsComponent implements OnInit {

    artistList: Artist[] = [];
    subscription: Subscription;
    pager: Pager;
    
    constructor(private activatedRoute: ActivatedRoute,
                private artistsService: ArtistsService,
                private usersService: UsersService,
                private followsService: FollowsService
                ) { }

    ngOnInit() 
    {
        let response: Follows = this.activatedRoute.snapshot.data["follows"];
        this.pager = new Pager(response.pageNumber, response.pageSize, response.totalNumberOfPages, response.totalNumberOfRecords);
        let result: Follow[] = response.results;
        result.forEach(element => {
            this.artistList.push(element.artist);
        })
    }

    onNextClick()
    {
        if (this.pager.pageNumber < this.pager.totalNumberOfPages)
        {
            this.subscription = this.followsService.getFollowedArtists(this.pager.pageNumber += 1).subscribe(
                (data: Follows) => 
                {
                    let result: Follow[] = data.results;
                    result.forEach(element => {
                        this.artistList.push(element.artist);
                    })
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
            this.subscription = this.followsService.getFollowedArtists(this.pager.pageNumber += 1).subscribe(
                (data: Follows) => 
                {
                    let result: Follow[] = data.results;
                    result.forEach(element => {
                        this.artistList.push(element.artist);
                    })
                    this.pager = new Pager(data.pageNumber, data.pageSize, data.totalNumberOfPages, data.totalNumberOfRecords);

                },
                error => console.error(error)
            );
        }
    }
}
