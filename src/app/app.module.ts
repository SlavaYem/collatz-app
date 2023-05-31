import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CollatzService } from './collatz.service';
import { CollatzComponent } from './collatz/collatz.component';
import { CollatzResultsComponent } from './collatz-results/collatz-results.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    CollatzComponent,
    CollatzResultsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CollatzService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
