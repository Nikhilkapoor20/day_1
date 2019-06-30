import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ContactComponent} from './pages/contact-us/contact.component';

const route = [
  {path: '' , redirectTo: '/home' , pathMatch: 'full'}  ,
  {path: 'home' , component: HomeComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'contact' , component: ContactComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
