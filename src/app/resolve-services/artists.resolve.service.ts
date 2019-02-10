import { Artist } from 'src/app/models/artist.model';
import { ArtistsService } from '../services/artist.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Artists } from '../models/artists.model';

@Injectable({
    providedIn: 'root'
})
export class ArtistsResolveService implements Resolve<Artists> {
    constructor(private artistsService: ArtistsService) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Artists>|Promise<Artists>|Artists 
        {
            return this.artistsService.getArtists();
        }
}
