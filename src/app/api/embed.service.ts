import { Injectable } from '@angular/core';
import { Post } from './model/post';
import { DomParserService } from './domparser.service';
import { SafeHtml } from '@angular/platform-browser';
import { EmbeddedFactory } from './model/embedded';

@Injectable()
export class EmbedService {

    private domainsThatHaveVariantsGifsLink = ["i.imgur.com", "gfycat.com"];

    constructor(private domParserService: DomParserService) {}

    getSafeInnerHtml(post: Post): SafeHtml {
        let stuffToDisplay: SafeHtml | string;

        const embeddedElement = EmbeddedFactory.getInstance(post);
        
        if (embeddedElement) {
            try {
                stuffToDisplay = this.domParserService.parse(embeddedElement.getRawHtml());
            }
            catch(error) {
                stuffToDisplay = embeddedElement.getDirectLink();
            }
        }
        return stuffToDisplay;
    }
}