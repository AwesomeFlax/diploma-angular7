import { Router } from '@angular/router';
import { Collection } from './../../../models/collections.model';
import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit, Input } from '@angular/core';
import { Track } from 'src/app/models/track.model';
import { TracksService } from '../../../services/tracks.service';
import { CollectionsService } from 'src/app/services/collections.service';
import { element, elementStyleProp } from '@angular/core/src/render3';

@Component({
    selector: 'app-track',
    templateUrl: './track.component.html',
    styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

    @Input() track: Track;
    
    constructor(private tracksService: TracksService,
                private usersService: UsersService,
                private collectionsService: CollectionsService,
                private router: Router) { }

    ngOnInit() 
    {
    }

    onTrackClick(track: Track)
    {
        this.tracksService.selectedTrack.emit(this.track);
    }

    addTrack()
    {
        if (this.usersService.IsAuthorized())
        {
            this.collectionsService.addTrackInCollection(this.track.id)
            .subscribe(
                (response) => {
                    this.track.isInLibrary = !this.track.isInLibrary;
                },
                (error) => {
                    console.log(error);
                    this.track.isInLibrary = !this.track.isInLibrary;
                }
            );
        }
        else
        {
             this.usersService.SuggestAuth();
            // this.router.navigateByUrl('authorization');
        }
    }

    removeTrack()
    {
        if (this.usersService.IsAuthorized())
        {
            this.collectionsService.removeTrackFromCollection(this.track.id)
            .subscribe(
                (response) => {
                    this.track.isInLibrary = !this.track.isInLibrary;                    
                },
                (error) => {
                    console.log(error);
                    this.track.isInLibrary = !this.track.isInLibrary;                    
                }
            );
        }   
        else
        {
             this.usersService.SuggestAuth();
            // this.router.navigateByUrl('authorization');
        }
    }
}
