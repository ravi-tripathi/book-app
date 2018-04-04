import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { currentBookService } from '../services/currentBook.service'
import { POST_BOOKS , CURRENT_BOOK} from '../reducers/bookReducer';
import {PostsService} from '../services/posts.service';
import {Observable} from 'rxjs/Observable';

interface AppState {
  books: any;
  currentBook: any;
}

@Component({
  selector: 'user',
  template:
  `
  	<h1> Book Search Application </h1>
  	
	<form #f="ngForm" (ngSubmit)="onSubmit(f)">
        <label>Search Books </label><br />
		<input id="searchField" type="text" name="name" [(ngModel)]="name" /><br />
		<button type="submit" [disabled]="!name">Submit</button>
    </form>
    <hr />
    <h3>List of Books</h3>
    <div *ngFor ="let post of posts;">
		  <h3>{{post.volumeInfo.title}}</h3>
		  <h5 class="center-align black-text"> By: {{post.volumeInfo.authors}}</h5>
		  <img class="aligning card z-depth-5" id="dynamic" src="{{post.volumeInfo.imageLinks.thumbnail}}"><br>
		  <button id="imagebutton" class="btn red aligning" (click)="goToBook(post)">>Read More</button>
    </div>
  `,
  providers: [PostsService],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class UserComponent  {
	name : string;
	posts: Observable<any>;
	queryParam: string;
	readQuery: any;

  constructor(private postsService: PostsService, private store: Store<AppState>, private route: Router, private currentBook: currentBookService
  ){
    console.log('constructor ran');
    //this.posts = store.select('books');
    store.select('books').subscribe((d)=>{
      this.posts = d;
    })


  }

	onSubmit(f: NgForm) {
    	if(this.queryParam == ''){
			alert("Please Enter Something");
		}else{
			this.queryParam= f.form.value.name;
			//this.posts = [];
			this.postsService.getPosts(this.queryParam).subscribe(posts =>{
				//this.posts = posts.items;
				this.store.dispatch({type: POST_BOOKS, payload: posts.items});
			});
		}

	}

  goToBook(post: any) {
    //this.currentBook.seCurrentBook(post);
    this.store.dispatch({type: CURRENT_BOOK, payload: post});
    this.route.navigate(['book', post.id]);
  }


}
