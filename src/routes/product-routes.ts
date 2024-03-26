import { Routes } from "@angular/router";
import { ProductComponent } from "src/product/product.component";

export const productRoutes : Routes = [
    {
        path:"product/:id/:authToken",
        component:ProductComponent
    },
    {
        path:"product/:id",
        component:ProductComponent
    },
    {
        path:"product",
        redirectTo:"/store"
    },
   
]