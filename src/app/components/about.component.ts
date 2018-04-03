import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html'
})
export class AboutComponent  {
    header_title: string;

    constructor( private route: ActivatedRoute){
      this.header_title = "This is an about page!"
    }

 }
