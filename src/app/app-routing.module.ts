import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConnectComponent } from './connect/connect.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { path: '' , pathMatch: 'full', redirectTo: "/home"},
  { path: 'home' , component: HomeComponent},
  { path: 'student-create' , component: StudentCreateComponent},
  { path: 'student-list' , component: StudentListComponent},
  { path: 'connect' , component: ConnectComponent},
  { path: 'about' , component: AboutComponent},
  { path: 'login' , component: LoginComponent},
  //{ path: 'home' , component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
