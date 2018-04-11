import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Feature1Component } from './feature-1/feature-1.component';
import { Feature2Component } from './feature-2/feature-2.component';


@NgModule({
  declarations: [
    AppComponent,
    Feature1Component,
    Feature2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
