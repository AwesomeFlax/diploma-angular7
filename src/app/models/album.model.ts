import { Artist } from './artist.model';
import { Track } from './track.model';

export class Album 
{
    id: number;
    name: string; 
    genre: string;
    releaseDate: string; 
    description: string; 
    albumCover: string;
    tracks: Track[];
    artist: Artist;

    constructor(id: number, name: string, genre: string, releaseDate: string, description: string, albumCover: string, tracks: Track[], artist: Artist) 
    {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.releaseDate = releaseDate;
        this.description = description;
        this.albumCover = albumCover;
        this.tracks = tracks;
        this.artist = artist;
    }
}