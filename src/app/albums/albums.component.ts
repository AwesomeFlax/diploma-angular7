import { AlbumsService } from '../services/albums.service';
import { Album } from './../models/album.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TracksService } from '../services/tracks.service';
import { Subscription } from 'rxjs';
import { Pager } from '../models/pager.model';
import { Albums } from '../models/albums.model';

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit 
{
    albumsList: Album[];
    subscription: Subscription;
    pager: Pager;

    constructor(
        private albumsService: AlbumsService,
        private trackService: TracksService, 
        private activatedRoute: ActivatedRoute
        ) { }
    
    ngOnInit() {
        let response: Albums = this.activatedRoute.snapshot.data["albums"];
        this.pager = new Pager(response.pageNumber, response.pageSize, response.totalNumberOfPages, response.totalNumberOfRecords);
        this.albumsList = response.results;
    }

    onAlbumSelect(album: Album) 
    {
        this.albumsService.selectedAlbum.emit(album);
        this.trackService.loadSeletedAlbumTracks(album.tracks);
    }

    onNextClick()
    {
        if (this.pager.pageNumber < this.pager.totalNumberOfPages)
        {
            this.subscription = this.albumsService.getAlbums(this.pager.pageNumber += 1).subscribe(
                (data: Albums) => 
                {
                    this.albumsList = data.results;
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
            this.subscription = this.albumsService.getAlbums(this.pager.pageNumber -= 1).subscribe(
                (data: Albums) => 
                {
                    this.albumsList = data.results;
                    this.pager = new Pager(data.pageNumber, data.pageSize, data.totalNumberOfPages, data.totalNumberOfRecords);
                },
                error => console.error(error)
            );
        }
    }
}
