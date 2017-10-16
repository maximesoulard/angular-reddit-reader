import { Injectable } from '@angular/core';

@Injectable()
export class WindowService {

    getNativeWindow() {
        return window;
    }

    goTo(url: string) {
        this.getNativeWindow()
            .open(url);
    }
}