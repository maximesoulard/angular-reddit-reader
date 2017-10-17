import { Injectable } from '@angular/core';

@Injectable()
export class DomParserService {
    private parser: DOMParser;

    constructor() {
        this.parser = new DOMParser();
     }

    parse(rawHtml: string) {
        const dom = this.parser.parseFromString(rawHtml, 'text/html');
        return dom.body.textContent;
    }
}