export class Pager 
{
    pageNumber: number;
    pageSize: number;
    totalNumberOfPages: number;
    totalNumberOfRecords: number;

    constructor(pageNumber: number, pageSize: number, totalNumberOfPages: number, totalNumberOfRecords: number)
    {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.totalNumberOfPages = totalNumberOfPages;
        this.totalNumberOfRecords = totalNumberOfRecords;
    }
}