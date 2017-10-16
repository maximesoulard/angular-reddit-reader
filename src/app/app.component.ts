import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
        <div class="">
            <div class="container">
            <h1 class="title">
                My very own reddit client
            </h1>
            </div>
        </div>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  title = 'app';
}
