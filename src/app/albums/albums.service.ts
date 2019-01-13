import { Artist } from './../models/artist.model';
import { ArtistsService } from './../artists/artitst.service';
import { Album } from './../models/album.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Track } from '../models/track.model';

@Injectable()
export class AlbumsService 
{
    eminem: Artist = this.artistsService.getArtistsById(1);
    NF: Artist = this.artistsService.getArtistsById(2);
    adele: Artist = this.artistsService.getArtistsById(3);

    selectedAlbum = new EventEmitter<Album>();
    albums: Album[] = [
        new Album(0, "Mansion", "Hip-Hop", "2014-9-15", "desc0", "https://ecsmedia.pl/c/mansion-w-iext46383085.jpg", 
        [ new Track (1, 'Outcast'), new Track (2, 'Destiny')], this.NF),
        new Album(1, "Perception", "Hip-Hop", "2015-9-15", "desc1", "https://i2.cdn.hhv.de/catalog/475x475/00565/565327.jpg", 
        [ new Track (3, 'Notepad'), new Track (4, 'Turn The Music Up') ], this.NF),
        new Album(2, "Kamikaze", "Rap", "2016-9-15", "desc2", "https://www.picclickimg.com/d/l400/pict/163235028390_/Eminem-Kamikaze-Album-Poster-2018-Music-Art-Cover.jpg",
        [ new Track (5, 'Venom'), new Track (6, 'Stepping Stone') ], this.eminem),
        new Album(3, "Revival", "Rap", "2017-9-15", "desc3", "https://upload.wikimedia.org/wikipedia/ru/thumb/6/6f/Eminem_Revival.jpg/270px-Eminem_Revival.jpg",
        [ new Track (7, 'Walk On Water'), new Track (8, 'Bad Husband') ], this.eminem),
        new Album(4, "25", "Soul", "2018-9-15", "desc4", "https://upload.wikimedia.org/wikipedia/ru/thumb/a/aa/Adele_25.jpg/270px-Adele_25.jpg", 
        [ new Track (9, 'Hello'), new Track (10, 'Send My Love') ], this.adele),
        new Album(5, "21", "Soul", "2019-9-15", "desc5", "https://images.store.hmv.com/app_/responsive/HMVStore/media/product/763088/01-763088.jpg?w=500",
        [ new Track (11, 'Rolling In The Deep'), new Track (12, 'Set Fire To The Rain') ], this.adele)
    ]

    constructor(private artistsService: ArtistsService) {}
    
    getAlbums(): Album[]
    {
        return this.albums.slice();
    }

    addNewAlbum(newAlbum: Album)
    {
        this.albums.push(newAlbum);
    }

    getAlbumById(id: number): Album
    {
        return this.albums.filter(x => x.id == id)[0];
    }

    getAlbumsByArtist(id: number): Album[]
    {
        return this.albums.filter(x => x.artist.id === id);
    }
}