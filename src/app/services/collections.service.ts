import { Collection } from './../models/collections.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class CollectionsService 
{
    constructor(private httpClient: HttpClient) { }

    getUserCollections()
    {
        const userId = localStorage.getItem('userId');
        return this.httpClient.get<Collection[]>(`${environment.API_URL}collections/${userId}`);
    }

    addTrackInCollection(trackId: number)
    {
        const data = {
            user: {
                id: localStorage.getItem('userId')
            },
            track: {
                id: trackId
            }
        }
        return this.httpClient.post(`${environment.API_URL}collections/add`, data);
    }

    removeTrackFromCollection(trackId: number)
    {
        const data = {
            user: {
                id: localStorage.getItem('userId')
            },
            track: {
                id: trackId
            }
        }
        return this.httpClient.request('delete', `${environment.API_URL}collections/delete`, { body: data } );
    }
}