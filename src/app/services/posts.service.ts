import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    constructor(private http: Http){
        console.log('PostsService Initialized...');
    }

    getPosts(bookName: any){
        return this.http.get('https://www.googleapis.com/books/v1/volumes?q='+bookName+'&key=AIzaSyA5XAF8znBqBlooCr0nKkA72Nai_wGaLbQ')
            .map(res => res.json());
    }
}