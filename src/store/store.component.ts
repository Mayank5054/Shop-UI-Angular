import { Component } from "@angular/core";
import { ProductComponent } from "src/product/product.component";

@Component({
    selector:"<store></store>",
    standalone:true,
    imports:[ProductComponent],
    styleUrls:["./store.css"],
    templateUrl:'./store.html'
})
export class StoreComponent{

}