import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {WebComponent} from './web/web.component';
import {MobComponent} from './mob/mob.component';
import {ProductsComponent} from './products/products.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {LoginComponent} from './login/login.component';
import {authGuard} from './auth.guard';
import {deactivateGuard} from './deactivate.guard';

export const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:"home", canActivate:[authGuard],canDeactivate:[deactivateGuard], component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"product",canActivate:[authGuard], component:ProductsComponent},
  {path:"productDetails/:id",canActivate:[authGuard], component:ProductDetailsComponent},
  {path:"about",canActivate:[authGuard], component:AboutComponent,children:[
      {path:'', redirectTo:'web',pathMatch:'full'},
      {path:'web', component:WebComponent},
      {path:'mob', component:MobComponent},
    ]},
  {path:"contact",canActivate:[authGuard], component:ContactComponent},
  {path:"**", component:PageNotFoundComponent},
];
