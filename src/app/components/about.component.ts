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
    description: any;
    imageThumbnailUrl: any;
    authors: any;

    constructor( private route: ActivatedRoute, private currentBook: currentBookService){
      this.selectedBook = currentBook.getCurrentBook();
      this.header_title = this.selectedBook.volumeInfo.title;
      this.description = this.selectedBook.volumeInfo.description;
      this.imageThumbnailUrl =this.selectedBook.volumeInfo.imageLinks.thumbnail;
      this.authors = this.selectedBook.volumeInfo.authors;
      console.log('ho', this.selectedBook);
    }

 }
