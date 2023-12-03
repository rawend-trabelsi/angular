import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private notes: string[] = [];

  addNote(note: string) {
    this.notes.push(note);
  }

  getNotes(): string[] {
    return this.notes;
  }

}

