import {Routes, RouterModule} from '@angular/router';

import {BlogListComponent} from "./component/blog_list.component";
import {BlogDetailComponent} from "./component/blog_details.component";
import {BlogPostComponent} from "./blog_post/blog_post.component";
import {AdminHomeComponent} from "./admin/admin_home.component";
import {AdGridComponent} from "./admin/admin_grid.component";

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'blog',
    component: BlogListComponent,
  },

  {
    path: 'blogpost',
    component: BlogPostComponent,
  },
  {
    path: 'admin',
    component: AdminHomeComponent,
  },
  {
    path: 'grid',
    component: AdGridComponent,
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
