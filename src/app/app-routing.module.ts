import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './view/login/login.component';


// import { AuthGuard } from './core/auth/auth.guard';


const routes: Routes = [
  // {
  //   path: 'admin',
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./views/admin/admin.module').then(mod => mod.AdminModule),
  // },
  {
    path: 'login',
    // canActivate: [AuthGuard],
    component: LoginComponent
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}





