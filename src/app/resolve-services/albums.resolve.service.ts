import { AlbumsService } from 'src/app/services/albums.service';
import { Injectable, OnInit } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Album } from 'src/app/models/album.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AlbumsResolveService implements Resolve<Album[]> {

    constructor(private albumsService: AlbumsService) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Album[]>|Promise<Album[]>|Album[] 
        {
            this.albumsService.setUpPager()
            .subscribe(resp => 
                {
                    this.albumsService.pagination = JSON.parse(resp.headers.get('Paging-Headers'));
                });

            return this.albumsService.getAlbums();
        }
}
