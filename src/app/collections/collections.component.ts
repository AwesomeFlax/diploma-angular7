import { Collection } from 'src/app/models/collections.model';
import { AlbumsService } from '../services/albums.service';
import { Album } from './../models/album.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TracksService } from '../services/tracks.service';
import { Subscription } from 'rxjs';
import { Pager } from '../models/pager.model';

@Component({
      selector: 'app-albums',
      templateUrl: './collections.component.html',
      styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit 
{
    albumsList: Album[] = [];
    subscription: Subscription;
    pager: Pager;

    constructor(
        private albumsService: AlbumsService,
        private trackService: TracksService, 
        private activatedRoute: ActivatedRoute
        ) { }
    
    ngOnInit() {
        const result: Album[] = [];
        let response: Collection[] = this.activatedRoute.snapshot.data["collections"];
        response.forEach(element => {
            result.push(element.track.album)
        });

        const map = new Map();
        for (const item of result) {
            if(!map.has(item.id))
            {
                map.set(item.id, true);
                this.albumsList.push(item);
            }
        }
    }

    onAlbumSelect(album: Album) 
    {
        this.albumsService.selectedAlbum.emit(album);
        this.trackService.loadSeletedAlbumTracks(album.tracks);
    }
}
