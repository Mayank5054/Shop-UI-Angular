import { Routes } from "@angular/router";
import { Home } from "src/Home/home.component";

export const defaultRoute:Routes = [
    {
        path:"**",
        component:Home
    }
]