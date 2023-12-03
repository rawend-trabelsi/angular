import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  notes: string[] = [];
  n: string = '';
  contenu: string = '';

  constructor(private dataService: DataService) { }

  Init() {
    this.notes = this.dataService.getNotes();
  }

  addnotes() {
    const noteInputElement = document.getElementById("note") as HTMLInputElement;
    const noteInput = noteInputElement.value;
    this.dataService.addNote(noteInput);
  }
  

  filterNotes() {
    const filterTerm = (document.getElementById("filtre") as HTMLInputElement).value.toLowerCase();

    if (filterTerm) {
      this.notes = this.dataService.getNotes().filter((note) => {
        return note.toLowerCase().includes(filterTerm);
      });
    } else {
  
      this.Init();
    }
  }
}
