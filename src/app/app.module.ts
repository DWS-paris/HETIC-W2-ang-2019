/*
Imports
*/
  // Angular
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { RouterModule } from '@angular/router';

  //=> Requête HTTP
  import { HttpClientModule } from '@angular/common/http';

  // Inner
  import { AppComponent } from './app.component';
  import { MainRouter } from "./app.router";
  import { HeaderComponent } from "./components/header/header.component";
//


/* 
Definition
*/
  @NgModule({
    declarations: [
      AppComponent,
      HeaderComponent
    ],
    imports: [
      BrowserModule,

      // Configuration du router
      RouterModule.forRoot( MainRouter, { onSameUrlNavigation: 'reload' } ),
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
//