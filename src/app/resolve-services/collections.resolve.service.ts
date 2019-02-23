import { Collection } from './../models/collections.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CollectionsService } from '../services/collections.service';

@Injectable({
    providedIn: 'root'
})
export class CollectionsResolveService implements Resolve<Collection[]> {
    constructor(private collectionsService: CollectionsService) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Collection[]>|Promise<Collection[]>|Collection[]
        {
            return this.collectionsService.getUserCollections();
        }
}
