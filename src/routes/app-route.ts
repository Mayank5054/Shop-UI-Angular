import { Routes } from "@angular/router";
import { Home } from "src/Home/home.component";

export const routes: Routes = [
{
    path:"home",
    component:Home
},
{
    path:"**",
    redirectTo:"/home"
}
]