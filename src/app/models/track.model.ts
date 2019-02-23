import { Album } from 'src/app/models/album.model';

export class Track 
{
    id: number;
    name: string;
    album?: Album;
    isInLibrary: boolean = false;

    constructor(id: number, name: string) 
    {
        this.id = id;
        this.name = name;
    }
}