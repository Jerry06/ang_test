import {Component} from '@angular/core';
import {PeopleService} from './people.service';
import {BlogService} from './service/blog.service';
import {HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'my-app',
  template: `
  <router-outlet></router-outlet>
  `,
  providers: [PeopleService, BlogService, HighlightJsService]
})
export class AppComponent {
}
