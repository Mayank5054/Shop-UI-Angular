import { Routes } from "@angular/router";
import { Home } from "src/Home/home.component";
import { AboutComponent } from "src/about/about.component";
import { GeneralComponent } from "src/general/general.component";
import { ShopComponent } from "src/shop/shop.component";
import { StoreComponent } from "src/store/store.component";

export const appRoutes: Routes = [
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
    path:"general",
    component:GeneralComponent
},
{
    path:"store",
    component:StoreComponent
},
{
    path:"store",
    component:StoreComponent
},

]