import { AlbumsService } from 'src/app/services/albums.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Albums } from '../models/albums.model';

@Injectable({
    providedIn: 'root'
})
export class AlbumsResolveService implements Resolve<Albums> {

    constructor(private albumsService: AlbumsService) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Albums>|Promise<Albums>|Albums
        {
            return this.albumsService.getAlbums();
        }
}
