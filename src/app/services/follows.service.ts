import { Follow } from '../models/follow.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Follows } from '../models/follows.model';

@Injectable({providedIn: 'root'})
export class FollowsService 
{
    constructor(private httpClient: HttpClient) { }

    followArtist(artistID: number)
    {
        const data = {
            artist: {
                id: artistID
            },
            user: {
                id: localStorage.getItem('userId')
            }
        }

        return this.httpClient.post(`${environment.API_URL}follows/add`, data);
    }

    unfollowArtist(artistID: number)
    {
        const data = {
            artist: {
                id: artistID
            },
            user: {
                id: localStorage.getItem('userId')
            }
        }

        return this.httpClient.request('delete', `${environment.API_URL}follows/delete`, { body: data });
    }

    getFollowedArtists(pageNumber?: number)
    {
        if (pageNumber == null)
        {
            pageNumber = 1;
        }
        
        const userId = localStorage.getItem('userId');
        return this.httpClient.get<Follows>(`${environment.API_URL}follows/${userId}?page=${pageNumber}`);
    }
}