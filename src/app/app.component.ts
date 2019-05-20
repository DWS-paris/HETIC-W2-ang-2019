/* 
Configuration
*/
  // NodeJS
  import { Component, OnInit } from '@angular/core';

  // Déclaration
  @Component({
    selector: 'app-root',
    template: `
      <header>
        <app-header></app-header>
      </header>

      <main>
        <router-outlet></router-outlet>
      </main>

      <footer>
        <p>Under WTFPL - Julien Noyer 2019</p>
      </footer>
    `,
    styles : [`
      .highSalary{ color: red }
    `]
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
      public dataCollection: Array<any>;

      // Class injection
      constructor(){
        this.title = `Hello Angular`;
        this.dataCollection = [
          {
            _id: "1493",
            employee_name: "Julien",
            employee_salary: "0",
            employee_age: "39"
            },
            {
            _id: "1494",
            employee_name: "AL",
            employee_salary: "2200",
            employee_age: "25"
            },
            {
            _id: "1496",
            employee_name: "Eminem",
            employee_salary: "2323",
            employee_age: "34"
            },
            {
            _id: "1497",
            employee_name: "Adam 5",
            employee_salary: "1111",
            employee_age: "35"
            },
            {
            _id: "1500",
            employee_name: "Adam 8",
            employee_salary: "1111",
            employee_age: "35"
            }
          ]
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
