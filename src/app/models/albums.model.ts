import { Album } from "./album.model";

export class Albums
{
    pageNumber: number;
    pageSize: number;
    totalNumberOfPages: number;
    totalNumberOfRecords: number;
    results: Album[];
}