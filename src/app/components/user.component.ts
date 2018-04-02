import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service'
@Component({
  selector: 'user',
  template: `
  	<h1> {{name}} Application </h1>
  	<p><strong>Address:</strong>{{address.street}}, {{address.city}}, {{address.state}}</p>
  	<button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
  	<div *ngIf ="showHobbies">
	  	<h3>Hobbies</h3>
	  	<ul>
	  		<li *ngFor ="let hobby of hobbies;">
	  			{{hobby}}
	  		</li>
	  	</ul>
	  	<form (submit)="addHobby(hobby.value)">
		  	<label>Add Hobby: </label><br />
	        <input type="text" #hobby><br />
		</form>
	</div>
	<hr />
	<h3>Edit User</h3>
	<form>
        <label>Name: </label><br />
        <input type="text" name="name" [(ngModel)]="name" /><br />
        <label>State: </label><br />
        <input type="text" name="address.state" [(ngModel)]="address.state" /><br />
    </form>
    <hr />
    <h3>List of Books</h3>
    <div *ngFor ="let post of posts;">
    	<h3>{{post.items[0].volumeInfo.title}}</h3>
    </div>


  `,
  providers: [PostsService]
})
export class UserComponent  { 
	name : string;
	email : string;
	address: address;
	hobbies: string[];
	showHobbies: boolean;
	posts: Post[];

	constructor(private postsService: PostsService){
		console.log('constructor ran');
		this.name = 'Google Books Search';
		this.address = {
			street: '10 Baker Street',
			city: 'London',
			state: 'UK'
		};
		this.hobbies =['Music','Cooking', 'Traveling', 'Coding'];
		this.showHobbies = false;

		this.postsService.getPosts().subscribe(posts =>{
			console.dir(posts);
			console.log(posts.items[1].volumeInfo.title);
			console.log(posts.items[1].volumeInfo.authors);
			console.log(posts.items[1].volumeInfo.infoLink);
		});
	}

	toggleHobbies(){
		if(this.showHobbies == false){
			this.showHobbies = true;
		}
		else
		{
			this.showHobbies = false;
		}
	}

	addHobby(hobby){
		console.log(hobby);
		this.hobbies.push(hobby);
	}

	
	interface address {
		street: string;
		city: string;
		state: string;
	}

	interface Post{
		title: string;
		authors: string[];
		infoLink: string;
		thumbnailUrl : string;

	}

}