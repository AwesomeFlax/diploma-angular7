import { Follow } from './follow.model';

export class Follows
{
    pageNumber: number;
    pageSize: number;
    totalNumberOfPages: number;
    totalNumberOfRecords: number;
    results: Follow[];
}