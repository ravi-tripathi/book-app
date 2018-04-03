import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class currentBookService {
   currentBook: any;

    seCurrentBook(book: any){
        this.currentBook = book;
    }

    getCurrentBook () {
      return this.currentBook;
    }
}
