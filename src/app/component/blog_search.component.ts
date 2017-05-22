import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'blog_search',
  templateUrl: 'blog_search.component.html',
})
export class SearchComponent implements OnInit {

  searchText: string;

  constructor() {
  }

  ngOnInit() {
  }

  search() {
    if (this.searchText.trim()){
      alert(this.searchText);
    }
  }

}
