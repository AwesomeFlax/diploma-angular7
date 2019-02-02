import { AlbumsService } from '../services/albums.service';
import { Album } from './../models/album.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TracksService } from '../services/tracks.service';
import { Subscription } from 'rxjs';
import { Pager } from '../models/pager.model';
import { AlbumsResolveService } from '../resolve-services/albums.resolve.service';

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnDestroy {

    albumsList: Album[];
    subscription: Subscription;
    pager: Pager;

    constructor(
        private albumsService: AlbumsService,
        private trackService: TracksService, 
        private activatedRoute: ActivatedRoute
        ) { }
    
    ngOnInit() {
        this.albumsList = this.activatedRoute.snapshot.data["albums"];
        this.pager = this.albumsService.pagination;
    }

    onAlbumSelect(album: Album) {
        this.albumsService.selectedAlbum.emit(album);
        this.trackService.loadSeletedAlbumTracks(album.tracks);
    }

    ngOnDestroy() {
        if (this.subscription !== undefined) {
            this.subscription.unsubscribe();
        }
    }

    onNextClick()
    {
        if (this.pager.CurrentPage < this.pager.TotalPages)
        {
            this.pager.CurrentPage += 1;
            this.subscription = this.albumsService.getAlbums().subscribe(
                (data: Album[]) => 
                {
                    this.albumsList = data;
                },
                error => console.error(error)
            );           
        }
    }

    onPrevClick()
    {
        if (this.pager.CurrentPage != 1)
        {
            this.pager.CurrentPage -= 1;
            this.subscription = this.albumsService.getAlbums().subscribe(
                (data: Album[]) => 
                {
                    this.albumsList = data;
                },
                error => console.error(error)
            );
        }
    }
}
