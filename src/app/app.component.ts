/* 
Configuration
*/
  // NodeJS
  import { Component, OnInit } from '@angular/core';

  // Déclaration
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
  })
//

/* 
Export
*/
  export class AppComponent implements OnInit {
    /* 
    Declaration
    */
      public title: string;

      // Class injection
      constructor(){
        this.title = `Hello Angular`;
      }
    //

    /* 
    Méthodes
    */
        public sayHello = ( name: string ) => {
          this.title = `Hello ${name}`
        }
    //

    /* 
    Hooks
    */
      // eq. DOMContentLoaded
      ngOnInit(): void { 
        console.log('Component is fully loaded');
      }
    //
  }
//
