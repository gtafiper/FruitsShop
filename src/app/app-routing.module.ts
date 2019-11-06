import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {CustomersListComponent} from './customers/customers-list/customers-list.component';
import {CommonModule} from '@angular/common';
import {CustomerDetailsComponent} from './customers/customer-details/customer-details.component';
import {CustomerAddComponent} from './customers/customer-add/customer-add.component';
import {CustomerUpdateComponent} from './customers/customer-update/customer-update.component';
import {AuthGuard} from '../app/guards/guards.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: WelcomeComponent, canActivate: [AuthGuard] },
  {path: 'customers/:id', component: CustomerDetailsComponent, canActivate: [AuthGuard] },
  {path: 'customers', component: CustomersListComponent, canActivate: [AuthGuard] },
  {path: 'customer-add', component: CustomerAddComponent, canActivate: [AuthGuard] },
  {path: 'customer-update/:id', component: CustomerUpdateComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []

})
export class AppRoutingModule { }
