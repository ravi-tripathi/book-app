import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './reducers/bookReducer';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule , HttpModule, StoreModule.provideStore({ books: bookReducer })],
  declarations: [ AppComponent, UserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
