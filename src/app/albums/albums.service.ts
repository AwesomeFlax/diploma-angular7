import { Album } from './../models/album.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Track } from '../models/track.model';

export class AlbumsService {
    
    selectedAlbum = new EventEmitter<Album>();

    albums: Album[] = [
        new Album(0, "name0", "genre0", "2014-9-15", "desc0", "cover0", [ new Track (1, 'track_0_1'), new Track (1, 'track_0_2') ] ),
        new Album(1, "name1", "genre1", "2015-9-15", "desc1", "cover1", [ new Track (1, 'track_1_1'), new Track (1, 'track_1_2') ] ),
        new Album(2, "name2", "genre2", "2016-9-15", "desc2", "cover2", [ new Track (1, 'track_2_1'), new Track (1, 'track_2_2') ] ),
        new Album(3, "name3", "genre3", "2017-9-15", "desc3", "cover3", [ new Track (1, 'track_3_1'), new Track (1, 'track_3_2') ] ),
        new Album(4, "name4", "genre4", "2018-9-15", "desc4", "cover4", [ new Track (1, 'track_4_1'), new Track (1, 'track_4_2') ] ),
        new Album(5, "name5", "genre5", "2019-9-15", "desc5", "cover5", [ new Track (1, 'track_5_1'), new Track (1, 'track_5_2') ] ),
    ]

    getAlbums(): Album[]
    {
        return this.albums.slice();
    }

    addNewAlbum(newAlbum: Album)
    {
        this.albums.push(newAlbum);
    }

    getAlbumById(id: number)
    {
        return this.albums.filter(x => x.id == id)[0];
    }

    getAlbumsByArtist(id: number)
    {
        return this.albums.slice();
    }
}