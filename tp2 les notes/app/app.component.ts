import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp2';
  note: string = '';
  notes: { text: string; color: string }[] = [];

  addNote() {
    if (this.note) {
      const randomColor = this.getRandomColor();
      this.notes.push({ text: this.note, color: randomColor });
      this.note = '';
    }
  }

  deleteNote(index: number) {
    if (index >= 0 && index < this.notes.length) {
      this.notes.splice(index, 1);
    }
  }

  deleteAllNotes() {
    this.notes = [];
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
