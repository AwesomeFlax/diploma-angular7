import { Album } from 'src/app/models/album.model';
import { Artist } from "../models/artist.model";
import { AlbumsService } from '../albums/albums.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ArtistsService {

    artists: Artist[] = [
        new Artist(1, 'Eminem', 'Mashal', 'Matters', new Date('09-15-1987'), null, new Date('09-15-1997'), null, 'USA', 
        'Male', 'kinda complex', 'https://img2.thejournal.ie/inline/4378295/original/?width=500&version=4378295', null),
        new Artist(2, 'NF', 'Nathan', 'John Feuerstein', new Date('09-15-1956'), null, new Date('09-15-1997'), null, 'USA', 
        'Male', 'same crap', 'https://i1.sndcdn.com/avatars-000333695771-obix8y-t500x500.jpg', null),
        new Artist(3, 'Adele', 'Adele Laurie', 'Blue Adkins', new Date('09-15-1986'), null, new Date('09-15-1997'), null, 'Great Britain', 
        'Female', 'easy breazy', 'https://imgcache.qq.com/music/photo/mid_singer_500/p/x/003CoxJh1zFPpx.jpg', null),
        new Artist(4, 'Imagine Dragons', 'Imagine', 'Dragons', new Date('09-15-1987'), null, new Date('09-15-1997'), null, 'USA', 
        'Band', 'idk', 'https://images-na.ssl-images-amazon.com/images/I/71VTiXv2RsL.jpg', null),
        new Artist(5, 'Ryan Gosling', 'Ryan', 'Gosling', new Date('09-15-1956'), null, new Date('09-15-1997'), null, 'USA', 
        'Male', 'bio', 'http://www.femalefirst.co.uk/image-library/square/500/r/ryan-gosling---wi13-01----resize.jpg', null),
        new Artist(6, 'Marshmello', 'Chris', 'Comstock', new Date('09-15-1986'), null, new Date('09-15-1997'), null, 'Great Britain', 
        'Female', 'placeholder', 'https://images-na.ssl-images-amazon.com/images/I/61tuj9GDbjL.png', null)
    ];

    getArtists(): Artist[] 
    {
        return this.artists.slice();        
    }

    getArtistsById(id: number): Artist 
    {
        return this.artists.filter(x => x.id === id)[0];        
    }
}
