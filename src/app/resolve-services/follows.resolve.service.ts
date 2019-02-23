import { FollowsService } from './../services/follows.service';
import { Follow } from './../models/follows.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FollowsResolveService implements Resolve<Follow> {
    constructor(private followsService: FollowsService) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Follow>|Promise<Follow>|Follow 
        {
            return this.followsService.getFollowedArtists();
        }
}
