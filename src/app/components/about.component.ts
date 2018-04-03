import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { currentBookService } from '../services/currentBook.service';



@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html'
})
export class AboutComponent  {
    header_title: string;
    selectedBook: any;

    constructor( private route: ActivatedRoute, private currentBook: currentBookService){
      this.header_title = "This is an about page!";
      this.selectedBook = currentBook.getCurrentBook();
      console.log('ho', this.selectedBook);
    }

 }
