import { Track } from './../../models/track.model';
import { EventEmitter } from '@angular/core';
import { Follow } from '../../models/follow.model';
import { FollowsService } from './../../services/follows.service';
import { Subscription } from 'rxjs';
import { Album } from 'src/app/models/album.model';
import { ArtistsService } from '../../services/artist.service';
import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { CollectionsService } from 'src/app/services/collections.service';
import { Collection } from 'src/app/models/collections.model';
import { Follows } from 'src/app/models/follows.model';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

    artist: Artist;
    follows: Follows;
    albums: Album[];
    topTracks: Track[];
    subscription: Subscription;

    birthDate: string;
    deathDate: string;
    careerBeginDate: string;
    careerEndDate: string;
    followAction = "Follow";

    constructor(private followsService: FollowsService, 
                private activatedRoute: ActivatedRoute,
                private artistsService: ArtistsService,
                private usersService: UsersService,
                private collectionsService: CollectionsService,) 
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
        
        let data: Follow[] = this.follows.results;
        data.forEach(element => {
            if (element.artist.id == this.artist.id) {
                this.followAction = "Unfollow";
            }
        });

        this.setUpTopTracks();
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

    setUpTopTracks()
    {
        this.artistsService.getTopTracks(this.artist.id)
            .subscribe(
                (response) => {
                    this.topTracks = response;
                    
                    this.TrackStatuses();
                },
                (error) => {
                    console.log(error);
                }
            );   
    }

    TrackStatuses() {
        if (this.usersService.IsAuthorized()) {
            this.collectionsService.getUserCollections()
            .subscribe(
                (response: Collection[]) => {
                    if (response.length > 0) {
                        response.forEach(element => {
                                this.topTracks.forEach(track => {
                                    if (track.id == element.track.id) {
                                        track.isInLibrary = true;
                                    }
                                });
                            }
                        )
                    }
                }
            );
        }
    }
}
