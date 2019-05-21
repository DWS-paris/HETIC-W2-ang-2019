/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from "@angular/forms";

  // Inner
  import { UserService } from "../../services/user/user.service";

  // Definition
  @Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',

    // Ajouter le(s) service(s) dans la tableau des providers
    providers: [ UserService ]
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
        private FormBuilder: FormBuilder,

        // Injecter le service dans la class
        private UserService: UserService
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
          familyName: [ '', Validators.required ]
        })
      } 

      public submitForm = () => {
        console.log(this.formData);

        // Contater le service
        this.UserService.createItem( this.formData.value )
        .then( bddResponse => console.log(bddResponse) )
        .catch( bddResponse => console.error(bddResponse) )
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