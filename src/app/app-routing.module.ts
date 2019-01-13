import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './albums/album/album.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artists/artist/artist.component';

const routes: Routes = [
    { path: 'albums', component: AlbumsComponent},
    { path: 'album/:id', component: AlbumComponent},
    { path: 'artists', component: ArtistsComponent},
    { path: 'artist/:id', component: ArtistComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
