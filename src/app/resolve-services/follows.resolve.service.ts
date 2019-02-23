import { FollowsService } from './../services/follows.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Follows } from '../models/follows.model';

@Injectable({
    providedIn: 'root'
})
export class FollowsResolveService implements Resolve<Follows> {
    constructor(private followsService: FollowsService) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Follows>|Promise<Follows>|Follows
        {
            return this.followsService.getFollowedArtists();
        }
}
