import { Artist } from 'src/app/models/artist.model';

export class Artists
{
    pageNumber: number;
    pageSize: number;
    totalNumberOfPages: number;
    totalNumberOfRecords: number;
    results: Artist[];
}