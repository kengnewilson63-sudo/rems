import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
    },


    
    {
        path: 'list',
        loadComponent: () => import('./list.component/list.component').then(m => m.ListComponent)
    },
    {
        path: 'form',
        loadComponent: () => import('./form.component/form.component').then(m => m.FormComponent)
    }

];
