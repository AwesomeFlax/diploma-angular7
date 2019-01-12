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

    constructor(id: number, name: string, genre: string, releaseDate: string, description: string, albumCover: string, tracks: Track[]) 
    {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.releaseDate = releaseDate;
        this.description = description;
        this.albumCover = albumCover;
        this.tracks = tracks;
    }
}