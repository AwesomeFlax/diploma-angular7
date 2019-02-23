import { EventEmitter } from '@angular/core';
import { Follow } from './../../models/follows.model';
import { FollowsService } from './../../services/follows.service';
import { Subscription } from 'rxjs';
import { Album } from 'src/app/models/album.model';
import { ArtistsService } from '../../services/artist.service';
import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

    artist: Artist;
    follows: Follow[];
    albums: Album[];
    subscription: Subscription;

    birthDate: string;
    deathDate: string;
    careerBeginDate: string;
    careerEndDate: string;
    followAction = "Follow";

    constructor(private followsService: FollowsService, 
                private activatedRoute: ActivatedRoute) 
            { }

    ngOnInit() 
    {
        this.artist = this.activatedRoute.snapshot.data["artist"];        
        this.follows = this.activatedRoute.snapshot.data["follows"];        
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
        
        this.follows.forEach(element => {
            if (element.artist.id == this.artist.id) {
                this.followAction = "Unfollow";
            }
        });
    }

    followArtist()
    {
        if (this.followAction == "Follow")
        {
            this.followsService.followArtist(this.artist.id)
                .subscribe(
                    (response) => {
                        console.log(response)
                        this.followAction = "Unfollow";
                    },
                    (error: Error) => {
                        console.log(error.message)
                        this.followAction = "Unfollow";
                    }
                );
        }
        else
        {
            this.followsService.unfollowArtist(this.artist.id)
                .subscribe(
                    (response) => {
                        console.log(response)
                        this.followAction = "Follow";
                    },
                    (error: Error) => {
                        console.log(error.message)
                        this.followAction = "Follow";
                    }
                );
        }
    }
}
