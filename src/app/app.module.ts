import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SubredditService } from './api/subreddit.service';
import { WindowService } from './api/window.service';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { PostComponent } from './post/post.component';
import { DetailedPostComponent } from './detailed-post/detailed-post.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    PostComponent,
    DetailedPostComponent,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    SubredditService,
    WindowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
