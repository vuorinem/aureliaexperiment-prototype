import { autoinject } from 'aurelia-framework';
import { NotesApi } from './api/notes-api';

@autoinject
export class App {

  private notes: Array<string> = [];

  constructor(private notesApi: NotesApi) {
  }

  private attached() {
    this.notesApi.getNotes()
      .then(notes => this.notes.push(...notes));
  }

}
