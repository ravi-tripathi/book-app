import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { currentBookService } from '../services/currentBook.service'
import { POST_BOOKS , CURRENT_BOOK} from '../reducers/bookReducer';
import {PostsService} from '../services/posts.service';
import {Observable} from 'rxjs/Observable';

interface AppState {
  books: postList;
  currentBook: any;
}

interface postList {
  items: any
}

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl:'user.component.html',
  providers: [PostsService],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class UserComponent  {
  name : string;
  posts: Observable<postList>;
  queryParam: string;
  readQuery: any;
  postList: postList;

  constructor(private postsService: PostsService, private store: Store<AppState>, private route: Router
  ){
    console.log('constructor ran');
    this.posts = store.select('books');
    this.posts.subscribe((d)=>{
      this.postList = d;
    })


  }

  onSubmit(f: NgForm) {
    if(this.queryParam == ''){
      alert("Please Enter Something");
    }else{
      this.queryParam= f.form.value.name;
      this.postsService.getPosts(this.queryParam).subscribe(posts =>{
        this.store.dispatch({type: POST_BOOKS, payload: { items:posts.items }});
      });
    }

  }

  goToBook(post: any) {
    this.store.dispatch({type: CURRENT_BOOK, payload: {
        title: post.title,
        description: post.description,
        thumbnail: post.imageLinks.thumbnail

      }
    });
    this.route.navigate(['book', post.id]);
  }


}
