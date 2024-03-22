import { Routes } from "@angular/router";
import { Home } from "src/Home/home.component";
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
    path:"*",
    redirectTo:"/home"
}
]