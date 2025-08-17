import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
// Add other components as needed

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  {path:'about' ,component:AboutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Optional default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
