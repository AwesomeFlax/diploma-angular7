import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AlbumsService } from './albums/albums.service';
import { TracksService } from './albums/album/track/tracks.service';
import { ArtistsService } from './artists/artitst.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './albums/album/album.component';
import { TrackComponent } from './albums/album/track/track.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artists/artist/artist.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumComponent,
    TrackComponent,
    ArtistsComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AlbumsService, TracksService, ArtistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
