import { Component, Input } from "@angular/core";

@Component({
    selector:"<product></product>",
    standalone:true,
    imports:[],
    styleUrls:['./product.css'],
    templateUrl:'./product.html'
})

export class ProductComponent{
    @Input() name!:string;
}