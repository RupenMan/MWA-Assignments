import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StringListComponent } from './string-list/string-list.component';
import { UpperDirective } from './upper.directive';
import { MyvisibilityDirective } from './myvisibility.directive';
import { MyColorDirective } from './my-color.directive';


@NgModule({
  declarations: [
    AppComponent,
    StringListComponent,
    UpperDirective,
    MyvisibilityDirective,
    MyColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
