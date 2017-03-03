import {Component} from '@angular/core';
import {PeopleService} from './people.service';
import {BlogService} from "./service/blog.service";

@Component({
  selector: 'my-app',
  template: `
  <router-outlet>
  `,
  providers: [PeopleService, BlogService]
})
export class AppComponent {
}
