import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { currentBookService } from '../services/currentBook.service';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

interface myBook {
  title: string,
  description: string,
  thumbnail: string
}

interface AppState {
  books: any;
  currentBook: myBook;
}



@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AboutComponent  {

  selectedBook: Observable<myBook>;
  currentBook: myBook;

  constructor( private route: ActivatedRoute, private store: Store<AppState>){

    this.selectedBook = store.select('currentBook');
    this.selectedBook.subscribe((d) => {
      this.currentBook = d;
    });


  }

}
