import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { PostComponent } from './post/post.component';
import { DetailedPostComponent } from './detailed-post/detailed-post.component';

import { SubredditService } from './api/subreddit.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    PostComponent,
    DetailedPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    SubredditService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
