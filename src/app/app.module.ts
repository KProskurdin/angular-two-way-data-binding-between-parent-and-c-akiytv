import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent, ChildComponent, MiddleChildComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ChildComponent, MiddleChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
