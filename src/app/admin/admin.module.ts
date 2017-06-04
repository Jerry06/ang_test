import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminHomeComponent} from "./admin_home.component";
import {AdGridComponent} from "./admin_grid.component";
import {AdMenuComponent} from './admin_menu.component';
import {TinymceModule} from "../../angular2-tinymce.module";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SelectModule} from "ng2-select";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {AdminDashboardComponent} from "./admin-dashboard.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SelectModule,
    ReactiveFormsModule,
    RouterModule,
    TinymceModule.withConfig({
      plugins: ['lists', 'code', 'codesample'],
      toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | codesample'
    }),
    CommonModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    AdGridComponent,
    AdMenuComponent,
    AdminDashboardComponent
  ]
})
export class AdminModule {
}
