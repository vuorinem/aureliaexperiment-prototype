import { bindable } from 'aurelia-framework';

export class Note {

    @bindable private content: string = "Write your note here";

}
