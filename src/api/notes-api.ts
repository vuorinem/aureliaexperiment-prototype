import { autoinject } from "aurelia-framework";
import { HttpClient, json } from "aurelia-fetch-client";

@autoinject
export class NotesApi {

    constructor(private httpClient: HttpClient) {
    }

}
