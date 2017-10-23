import { Injectable } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class DomParserService {
    private parser: DOMParser;

    constructor(private sanitizer: DomSanitizer) {
        this.parser = new DOMParser();
     }

    parse(rawHtml: string): SafeHtml {
        const dom = this.parser.parseFromString(rawHtml, 'text/html');
        return this.sanitizer.bypassSecurityTrustHtml(dom.body.textContent);
    }
}