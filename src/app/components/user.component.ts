import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {PostsService} from '../services/posts.service';

interface AppState {
  books: any;
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
		  <button id="imagebutton" class="btn red aligning" (click)="goToBook(post.id)">>Read More</button>
    </div>
  `,
  providers: [PostsService]
})
export class UserComponent  {
	name : string;
	posts: any;
	queryParam: string;
	readQuery: any;

  constructor(private postsService: PostsService, private store: Store<AppState>, private route: Router
  ){
    console.log('constructor ran');


  }

	onSubmit(f: NgForm) {
    	if(this.queryParam == ''){
			alert("Please Enter Something");
		}else{
			this.queryParam= f.form.value.name;
			this.posts = [];
			this.postsService.getPosts(this.queryParam).subscribe(posts =>{
				this.posts = posts.items;
			});
		}

	}


  goToBook(id: any) {
    this.route.navigate(['book', id]);
  }


}
