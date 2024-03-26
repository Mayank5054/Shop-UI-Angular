import { Component, Input, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:"<product></product>",
    standalone:true,
    imports:[],
    styleUrls:['./product.css'],
    templateUrl:'./product.html'
})

export class ProductComponent{
    @Input() data!:any;
    userName:String = "Mayank's Angular"
    routes:ActivatedRoute = inject(ActivatedRoute);
    constructor(){
        console.log(this.routes.snapshot.params);
    }
   handleClick(){
console.log("Button Clicked");
    }
}