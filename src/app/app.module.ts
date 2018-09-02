import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenericElementsModule } from 'generic-elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GenericElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
