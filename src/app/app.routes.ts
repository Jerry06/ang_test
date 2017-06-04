import {Routes, RouterModule} from '@angular/router';

import {BlogListComponent} from "./component/blog_list.component";
import {BlogDetailComponent} from "./component/blog_details.component";
import {BlogPostComponent} from "./blog_post/blog_post.component";
import {AdminHomeComponent} from "./admin/admin_home.component";
import {AdGridComponent} from "./admin/admin_grid.component";
import {AdMenuComponent} from "./admin/admin_menu.component";
import {MultipleDemoComponent} from "./blog_post/multiple-demo";

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'blog',
    component: BlogListComponent,
    // children:[
    //   {
    //     path: 'cat/:cat',
    //     component: BlogListComponent,
    //   }
    // ]
  },
  {
    path: 'test',
    component: MultipleDemoComponent,
  },
  {
    path: 'blogpost',
    component: BlogPostComponent,
  },
  // {
  //   path: 'admin',
  //   component: AdminHomeComponent,
  //   children: [
  //     {
  //       path: '',
  //       children: [
  //         { path: 'grid', component: AdGridComponent },
  //       ]
  //     }
  //   ]
  // },
  {
    path: 'admin/:id',
    component: AdminHomeComponent,
  },
  // {
  //   path: 'grid',
  //   component: AdGridComponent,
  // },
  {
    path: 'menu',
    component: AdMenuComponent,
  },
  // // map '/persons/:id' to person details component
  {
    path: 'tag/:name',
    component: BlogListComponent
  },
  // // map '/persons/:id' to person details component
  {
    path: 'blog/:id',
    component: BlogDetailComponent
  },
  {
    path: 'abc',
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
