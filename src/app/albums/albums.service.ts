import { Album } from './../models/album.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Track } from '../models/track.model';

export class AlbumsService {
    
    selectedAlbum = new EventEmitter<Album>();

    albums: Album[] = [
        new Album(0, "Mansion", "Hip-Hop", "2014-9-15", "desc0", "https://ecsmedia.pl/c/mansion-w-iext46383085.jpg", [ new Track (1, 'Outcast'), new Track (1, 'Destiny') ] ),
        new Album(1, "Perception", "Hip-Hop", "2015-9-15", "desc1", "https://i2.cdn.hhv.de/catalog/475x475/00565/565327.jpg", [ new Track (1, 'Notepad'), new Track (1, 'Trun The Music Up') ] ),
        new Album(2, "Kamikaze", "Rap", "2016-9-15", "desc2", "https://upload.wikimedia.org/wikipedia/ru/thumb/1/1c/Eminem-kamikaze.jpg/270px-Eminem-kamikaze.jpg", [ new Track (1, 'Venom'), new Track (1, 'Stepping Stone') ] ),
        new Album(3, "Revival", "Rap", "2017-9-15", "desc3", "https://upload.wikimedia.org/wikipedia/ru/thumb/6/6f/Eminem_Revival.jpg/270px-Eminem_Revival.jpg", [ new Track (1, 'Walk On Water'), new Track (1, 'Bad Husband') ] ),
        new Album(4, "25", "Soul", "2018-9-15", "desc4", "https://upload.wikimedia.org/wikipedia/ru/thumb/a/aa/Adele_25.jpg/270px-Adele_25.jpg", [ new Track (1, 'Hello'), new Track (1, 'Send My Love') ] ),
        new Album(5, "21", "Soul", "2019-9-15", "desc5", "https://images.store.hmv.com/app_/responsive/HMVStore/media/product/763088/01-763088.jpg?w=500", [ new Track (1, 'Rolling In The Deep'), new Track (1, 'Set Fire To The Rain') ] ),
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