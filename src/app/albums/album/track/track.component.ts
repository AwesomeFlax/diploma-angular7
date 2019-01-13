import { Component, OnInit, Input } from '@angular/core';
import { Track } from 'src/app/models/track.model';
import { TracksService } from './tracks.service';

@Component({
    selector: 'app-track',
    templateUrl: './track.component.html',
    styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

    @Input() track: Track;
    
    constructor(private tracksService: TracksService) { }

    ngOnInit() {
    }

    onTrackClick(track: Track)
    {
        this.tracksService.selectedTrack.emit(this.track);
    }
}
