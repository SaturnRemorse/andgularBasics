import { Component } from "@angular/core";


@Component({
    selector:'about-component',
    standalone:false,
    // template:'<h1>thisis about</h1>',
    // styles:['h1{color:red;}']
    templateUrl:'./about.component.html',
    styleUrls:['./about.component.css'],
})
export class AboutComponent{}