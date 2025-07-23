import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {WebComponent} from './web/web.component';
import {MobComponent} from './mob/mob.component';

export const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent,children:[
      {path:'', redirectTo:'web',pathMatch:'full'},
      {path:'web', component:WebComponent},
      {path:'mob', component:MobComponent},
    ]},
  {path:"contact", component:ContactComponent},
  {path:"**", component:PageNotFoundComponent},
];
