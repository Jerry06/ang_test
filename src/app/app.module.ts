import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {routing} from './app.routes';

import {AppComponent}  from './app.component';
import {BlogListComponent} from "./component/blog_list.component";
import {BlogDetailComponent} from "./component/blog_details.component";
import {FooterComponent} from "./component/footer.component";
import {MenuComponent} from "./component/menu.component";
import {WidgetsComponent} from "./component/blog_widgets.component";
import {SearchComponent} from "./component/blog_search.component";
import {BlogCategoryComponent} from "./component/blog_category.component";
import {OtherWidgetComponent} from "./component/blog_other_widget.component";
import {AboutComponent} from "./about/about.component";
import {TinymceModule} from "../angular2-tinymce.module";

@NgModule({
  imports: [BrowserModule, routing, FormsModule, HttpModule, 	BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TinymceModule.withConfig({
      plugins: ['lists', 'code']
    })
  ],
  declarations: [AppComponent, BlogListComponent, FooterComponent, MenuComponent,
    SearchComponent, BlogCategoryComponent, OtherWidgetComponent, WidgetsComponent, BlogDetailComponent,AboutComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
