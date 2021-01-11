import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnlaceComponent } from './enlace/enlace.component';

import {MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
  declarations: [
    AppComponent,
    EnlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
