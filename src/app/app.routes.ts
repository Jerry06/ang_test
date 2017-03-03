import {Routes, RouterModule} from '@angular/router';

import {BlogListComponent} from "./component/blog_list.component";
import {BlogDetailComponent} from "./component/blog_details.component";
import {AboutComponent} from "./about/about.component";

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'blog',
    component: BlogListComponent,
  },

  {
    path: 'about',
    component: AboutComponent,
  },
  // // map '/persons/:id' to person details component
  {
    path: 'blog/:id',
    component: BlogDetailComponent
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/blog',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
