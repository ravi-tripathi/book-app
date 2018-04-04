import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { currentBookService } from '../services/currentBook.service'

import {PostsService} from '../services/posts.service';

interface AppState {
  books: any;
}

@Component({
	moduleId: module.id,
  selector: 'user',
  templateUrl:'user.component.html',
  providers: [PostsService]
})
export class UserComponent  {
	name : string;
	posts: any;
	queryParam: string;
	readQuery: any;

  constructor(private postsService: PostsService, private store: Store<AppState>, private route: Router, private currentBook: currentBookService
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


  goToBook(post: any) {
    this.currentBook.seCurrentBook(post);
    this.route.navigate(['book', post.id]);
  }


}
