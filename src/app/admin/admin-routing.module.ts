import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminHomeComponent} from "./admin_home.component";
import {AdGridComponent} from "./admin_grid.component";
import {AdminComponent} from "./admin.component";
import {AdminDashboardComponent} from "./admin-dashboard.component";

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'grid', component: AdGridComponent},
          {path: 'admin', component: AdminHomeComponent},
          {path: '', component: AdminDashboardComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}
