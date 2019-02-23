import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './albums/album/album.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artists/artist/artist.component';
import { AlbumResolveService } from './resolve-services/album.resolve.service';
import { AlbumsResolveService } from './resolve-services/albums.resolve.service';
import { ArtistResolveService } from './resolve-services/artist.resolve.service';
import { ArtistsResolveService } from './resolve-services/artists.resolve.service';
import { RegistrationComponent } from './user/registration/registration.component';
import { AuthorizationComponent } from './user/authorization/authorization.component';
import { FollowsResolveService } from './resolve-services/follows.resolve.service';

const routes: Routes = [
    { path: 'albums', component: AlbumsComponent, resolve: { albums: AlbumsResolveService } },
    { path: 'album/:id', component: AlbumComponent, resolve: { album: AlbumResolveService } },
    { path: 'artists', component: ArtistsComponent, resolve: { artists: ArtistsResolveService } },
    { path: 'artist/:id', component: ArtistComponent, resolve: { artist: ArtistResolveService, follows: FollowsResolveService } },
    { path: 'registration', component: RegistrationComponent },
    { path: 'authorization', component: AuthorizationComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
