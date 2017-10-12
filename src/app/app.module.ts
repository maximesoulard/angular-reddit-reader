import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { PostComponent } from './post/post.component';

import { SubredditService } from './api/subreddit.service'

import { HttpClientModule } from "@angular/common/http";

import { MatExpansionModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [
    SubredditService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
