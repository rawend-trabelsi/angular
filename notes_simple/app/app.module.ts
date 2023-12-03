import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    
    AppComponent,
  
   
  ],
  imports: [
    BrowserModule,
    FormsModule, 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
 