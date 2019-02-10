import { AlbumsService } from 'src/app/services/albums.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';

@Injectable({
    providedIn: 'root'
})
export class AlbumResolveService implements Resolve<Album> 
{    
    constructor(private albumsService: AlbumsService) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Album>|Promise<Album>|Album
        {
            return this.albumsService.getAlbumsById(route.params["id"]);
        }
}
