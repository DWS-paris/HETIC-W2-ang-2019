/* 
Configuration
*/
  // Imports
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';

  // Inner
  import { UserModel } from "../../models/user.model";

  // Définition
  @Injectable({
    providedIn: 'root'
  })
//

/* 
Export
*/
  export class UserService {
    /* 
    Déclarration
    */
      constructor(
        private HttpClient: HttpClient
      ) { }
    //

    /* 
    Méthodes
    */
      // CRUD : créer un item
      public createItem = ( userData: UserModel ): Promise<any> => {
        // Set header
        let myHeader = new HttpHeaders();
        myHeader.append('Content-Type', 'application/json');

        // Reqête HTTP POST
        return this.HttpClient.post('https://ldp.dwsapp.io/ang-w2', userData, { headers: myHeader })
        .toPromise().then(this.getData).catch(this.handleError);
      }

      // CRUD : lire le items
      public readAllItems = (): Promise<any> => {
        // Reqête HTTP GET
        return this.HttpClient.get('https://ldp.dwsapp.io/ang-w2/_all_docs?include_docs=true')
        .toPromise().then(this.getData).catch(this.handleError);
      }

      // Get the API response
      private getData(res: any){
        return res || {};
      };

      // Get the API error
      private handleError(err: any){
        return Promise.reject(err.error);
      };
    //
  }
//