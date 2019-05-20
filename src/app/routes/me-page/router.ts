/* 
Imports 
*/
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { MePageComponent } from "./me-page.component";
//


/* 
Definition 
*/
    const route: Routes = [
        {
            path: '',
            component: MePageComponent
        }
    ];
//


/* 
Export 
*/
    export const Routing: ModuleWithProviders = RouterModule.forChild(route);
//