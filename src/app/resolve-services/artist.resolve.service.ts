import { Artist } from 'src/app/models/artist.model';
import { ArtistsService } from '../services/artist.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ArtistResolveService implements Resolve<Artist> {
    
    constructor(private artistsService: ArtistsService) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Artist>|Promise<Artist>|Artist 
        {
            return this.artistsService.getArtistById(route.params["id"]);
        }
}
