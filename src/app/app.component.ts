import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<user></user>
  `
})
export class AppComponent  {
	name = 'Book Search';
	email = 'ravitripathi.biz@gmail.com';
	address = {
		street: '10 Baker Street',
		city: 'London',
		state: 'UK'
	};
}
