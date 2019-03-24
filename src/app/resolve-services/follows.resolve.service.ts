import { FollowsService } from './../services/follows.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Follows } from '../models/follows.model';
import { UsersService } from '../services/users.service';

@Injectable({
    providedIn: 'root'
})
export class FollowsResolveService implements Resolve<Follows> {
    constructor(private followsService: FollowsService,
                private usersService: UsersService,
                private router: Router) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Follows>|Promise<Follows>|Follows
        {
            if (this.usersService.IsAuthorized())
            {
                return this.followsService.getFollowedArtists();
            }
            else
            {
                this.usersService.SuggestAuth();
                // this.router.navigateByUrl('authorization');
            }
        }
}
