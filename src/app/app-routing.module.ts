import { CollectionsResolveService } from './resolve-services/collections.resolve.service';
import { NgModule } from '@angular/core';
import { AlbumComponent } from './albums/album/album.component';
import { ArtistComponent } from './artists/artist/artist.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumResolveService } from './resolve-services/album.resolve.service';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsResolveService } from './resolve-services/albums.resolve.service';
import { CollectionsComponent } from './collections/collections.component';
import { ArtistResolveService } from './resolve-services/artist.resolve.service';
import { ArtistsResolveService } from './resolve-services/artists.resolve.service';
import { RegistrationComponent } from './user/registration/registration.component';
import { FollowsResolveService } from './resolve-services/follows.resolve.service';
import { AuthorizationComponent } from './user/authorization/authorization.component';
import { FollowedArtistsComponent } from './followed-artists/followed-artists.component';

const routes: Routes = [
    { path: 'albums', component: AlbumsComponent, resolve: { albums: AlbumsResolveService } },
    { path: 'album/:id', component: AlbumComponent, resolve: { album: AlbumResolveService } },
    { path: 'artists', component: ArtistsComponent, resolve: { artists: ArtistsResolveService } },
    { path: 'follows', component: FollowedArtistsComponent, resolve: { follows: FollowsResolveService} },
    { path: 'collections', component: CollectionsComponent, resolve: { collections: CollectionsResolveService } },
    { path: 'artist/:id', component: ArtistComponent, resolve: { artist: ArtistResolveService, follows: FollowsResolveService } },
    { path: 'registration', component: RegistrationComponent },
    { path: 'authorization', component: AuthorizationComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
