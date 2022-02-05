import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { GuardGuard } from './guard.guard';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent,canActivate:[GuardGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'events',component:EventsComponent},
  {path:'table',component:TableComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
