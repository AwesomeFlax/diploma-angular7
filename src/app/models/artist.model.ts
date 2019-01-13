import { Album } from "./album.model";

export class Artist 
{
    id: number;
    nickName: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    deathDate: Date;
    careerStart: Date;
    careerEnd: Date;
    birthPlace: string;
    gender: string;
    biography: string;
    artistPhoto: string;
    albums: Album[]

    constructor(id: number, nickName: string, firstName: string, lastName: string, birthDate: Date, deathDate: Date, careerStart: Date, careerEnd: Date, birthPlace: string, gender: string, biography: string, artistPhoto: string, albums: Album[]) 
    {
        this.id = id;
        this.nickName = nickName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.deathDate = deathDate;
        this.careerStart = careerStart;
        this.careerEnd = careerEnd;
        this.birthPlace = birthPlace;
        this.gender = gender;
        this.biography = biography;
        this.artistPhoto = artistPhoto;
        this.albums = albums;
    }
}
