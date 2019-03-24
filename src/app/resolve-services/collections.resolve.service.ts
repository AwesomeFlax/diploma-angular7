import { UsersService } from './../services/users.service';
import { Collection } from './../models/collections.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CollectionsService } from '../services/collections.service';

@Injectable({
    providedIn: 'root'
})
export class CollectionsResolveService implements Resolve<Collection[]> {
    constructor(private collectionsService: CollectionsService,
                private usersService: UsersService,
                private router: Router) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Collection[]>|Promise<Collection[]>|Collection[]
        {
            if (this.usersService.IsAuthorized())
            {
                return this.collectionsService.getUserCollections();
            }
        }
}
