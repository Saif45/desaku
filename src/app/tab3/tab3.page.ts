import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

 public isSearchOpened = false;
  constructor() {}

 onSearch(event){
 console.log(event.target.value);
 }

}
