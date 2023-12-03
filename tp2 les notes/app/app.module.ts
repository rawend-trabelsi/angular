import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import correct pour FormsModule.

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
   
    FormsModule // Import de FormsModule ici.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
