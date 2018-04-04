import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import {currentBookService} from './services/currentBook.service';
import { booksReducer, currentBookReducer } from './reducers/bookReducer';



import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';

import {AboutComponent} from './components/about.component';

const appRoutes: Routes = [
  {
    path:'',
    component: UserComponent
  },
  {
    path: 'book/:id',
    component: AboutComponent
  }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule , HttpModule, StoreModule.provideStore({ books: booksReducer, currentBook: currentBookReducer }), RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  declarations: [ AppComponent, UserComponent, AboutComponent ],
  bootstrap:    [ AppComponent ],
  providers: [currentBookService]
})
export class AppModule { }
