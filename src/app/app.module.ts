import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AlbumsService } from './services/albums.service';
import { TracksService } from './services/tracks.service';
import { ArtistsService } from './services/artist.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './albums/album/album.component';
import { TrackComponent } from './albums/album/track/track.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artists/artist/artist.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material';

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
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [AlbumsService, TracksService, ArtistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
