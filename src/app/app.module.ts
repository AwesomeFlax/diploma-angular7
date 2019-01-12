import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AlbumsService } from './albums/albums.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './albums/album/album.component';
import { TrackComponent } from './albums/album/track/track.component';
import { TracksService } from './albums/album/track/tracks.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AlbumsService, TracksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
