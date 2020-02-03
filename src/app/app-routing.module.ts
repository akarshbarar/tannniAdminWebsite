import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdmincorporateComponent } from './admincorporate/admincorporate.component';
import { AdminresidentialComponent } from './adminresidential/adminresidential.component';
import { AdmincommercialComponent } from './adminenterprise/admincommercial.component';


const routes: Routes = [
  {
     path: '',
      component: HomeComponent,
   },
  {
    path: 'about',
     component: AboutComponent
  },
  {
    path: 'contact',
     component: ContactComponent
   },
  {
    path: 'login',
    component: LoginComponent
   },
  {
    path: 'admin',
    component: AdminComponent,
    children:[
      {
        path: 'dashboard',
        component: AdmindashboardComponent
       },
       {
        path: 'Commercial',
        component: AdmincommercialComponent
       },
       {
        path: 'corporate',
        component: AdmincorporateComponent
       },
       {
        path: 'residential',
        component: AdminresidentialComponent
       },
    ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
