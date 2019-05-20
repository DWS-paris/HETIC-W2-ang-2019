/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from "@angular/forms";

  // Definition
  @Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styles: []
  })
//


/* 
Export 
*/
  export class RegisterPageComponent implements OnInit {
    /* 
    Déclaration
    */
      // Variables
      public formData: FormGroup;

      // Injection
      constructor(
        private FormBuilder: FormBuilder
      ) { }
    //

    /* 
    Méthodes
    */
      private resetForm = () => {
        // Définir les valeurs de l'objet formData
        this.formData = this.FormBuilder.group({
          email: [ 'j.noyer@digitalworrkshop.fr', Validators.required ],
          password: [ 'azertyuiop', Validators.required ],
          streetAddress: [ '21 boulevard de la République 13010 Aic en Provence', Validators.required ],
          givenName: [ 'Julien', Validators.required ],
          familyName: [ 'Noyer', Validators.required ]
        })
      } 

      public submitForm = () => {
        console.log(this.formData);
      }
    //
    /* 
    Hooks
    */
      ngOnInit() {
        this.resetForm();
      }
    //

  }
//