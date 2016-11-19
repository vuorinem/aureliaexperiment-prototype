import { autoinject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import environment from '../environment';

@autoinject
export class NotesApi {

    constructor(private httpClient: HttpClient) {
        this.httpClient.configure(config => config
            .withBaseUrl(environment.apiUrl)
            .withDefaults({
                headers: {
                    'Accept': 'application/json',
                }
            })
        );
    }

    public getNotes(): Promise<Array<any>> {
        return this.httpClient.fetch('/notes')
            .then(response => response.json())
    }

}
