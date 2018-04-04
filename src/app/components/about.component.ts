import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { currentBookService } from '../services/currentBook.service';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';


interface AppState {
  books: any;
  currentBook: any;
}

@Component({
  moduleId: module.id,
  selector: 'about',
  //templateUrl: 'about.component.html',
  template: 'Hello',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AboutComponent  {
    header_title: string;
    selectedBook: Observable<any>;
    // description: any;
    // imageThumbnailUrl: any;
    // authors: any;

    constructor( private route: ActivatedRoute, private currentBook: currentBookService, private store: Store<AppState>){
      this.header_title = "This is an about page!";
      //this.selectedBook = currentBook.getCurrentBook();
      //this.selectedBook = store.select('currentBook');
      store.select('currentBook').subscribe((d)=>{
        this.selectedBook = d;
        // this.header_title = this.selectedBook.volumeInfo.title;
        // this.description = this.selectedBook.volumeInfo.description;
        // this.imageThumbnailUrl =this.selectedBook.volumeInfo.imageLinks.thumbnail;
        // this.authors = this.selectedBook.volumeInfo.authors;
      })
      console.log('ho', this.selectedBook);
    }

 }
