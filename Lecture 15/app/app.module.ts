import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import {SimpleFormService} from './services/simple-form.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SimpleFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
