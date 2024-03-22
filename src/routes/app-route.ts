import { Routes } from "@angular/router";
import { Home } from "src/Home/home.component";
import { AboutComponent } from "src/about/about.component";
import { ShopComponent } from "src/shop/shop.component";

export const routes: Routes = [
{
    path:"home",
    component:Home
},
{
    path:"shop",
    component:ShopComponent
},
{
    path:"about",
    component:AboutComponent
},
{
    path:"**",
    redirectTo:"/home"
}
]