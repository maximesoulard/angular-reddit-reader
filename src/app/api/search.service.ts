import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConstantes } from './api.constantes';

@Injectable()
export class SearchService {
    constructor(private httpClient: HttpClient, private apiConstantes: ApiConstantes) { }
    
    searchForASubreddit(q: string, sort: string) {
        sort = sort !== null ? sort : 'relevance';
        return this.httpClient.get(`${this.apiConstantes.search}?q=${q}&sort=${sort}`);
    }
}