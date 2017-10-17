import { Injectable } from '@angular/core';

@Injectable()
export class ApiConstantes {

    baseUrl = "https://www.reddit.com";
    modeNew = 'new';
    modeHot = 'hot';
    apiExtension = '.json';
    slashRSlash = "/r/";
    subredditBaseUrl = `${this.baseUrl}${this.slashRSlash}`;
    rAll = `${this.baseUrl}${this.slashRSlash}all/${this.modeHot}${this.apiExtension}`;

    constructor() { }
}