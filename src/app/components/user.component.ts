import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
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
		<button type="submit" [disabled]="OnOff()">Submit</button>
    </form>
    <hr />
    <h3>List of Books</h3>
    <div *ngFor ="let post of posts;">
		<h3>{{post.volumeInfo.title}}</h3>
		<h5 class="center-align black-text"> By: {{post.volumeInfo.authors}}</h5>
		<img class="aligning card z-depth-5" id="dynamic" src="{{post.volumeInfo.imageLinks.thumbnail}}"><br>
		<a href="{{post.volumeInfo.infoLink}}"><button id="imagebutton" class="btn red aligning">Read More</button></a>
    </div>
  `,
  providers: [PostsService]
})
export class UserComponent  {
	name : string;
	posts: any;
	queryParam: string;
	readQuery: any;
	OnOff: any;
	OnOff: function (){
		//console.dir(f.form.value.name);
    	if(this.name == ''){
			return true;
		}else{
			return true;
		}
	}
	onSubmit(f: NgForm) {
		console.dir(f.form.value.name);
    	if(this.queryParam == ''){
			alert("Please Enter Something");
		}else{
			this.queryParam= f.form.value.name;
		}
    	
	}
	constructor(private postsService: PostsService, private store: Store<AppState>){
		console.log('constructor ran');
		this.posts = [];
		console.dir(document.getElementById('searchField'));
		this.postsService.getPosts(this.queryParam).subscribe(posts =>{
			console.dir(posts);
			this.posts = posts.items;
			console.dir(this.posts);
			console.log(this.posts[0].volumeInfo.title);
			console.log(this.posts[0].volumeInfo.authors);
			console.log(this.posts[0].volumeInfo.infoLink);
		});
	}


}
