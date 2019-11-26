import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateComponent } from './pages/authenticate/authenticate.component';

const routes: Routes = [
  { path: 'auth', component: AuthenticateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
