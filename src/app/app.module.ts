import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {routing} from './app.routes';

import {SelectModule} from 'ng2-select';
import {AppComponent}  from './app.component';
import {BlogListComponent} from './component/blog_list.component';
import {BlogDetailComponent} from './component/blog_details.component';
import {FooterComponent} from './component/footer.component';
import {MenuComponent} from './component/menu.component';
import {WidgetsComponent} from './component/blog_widgets.component';
import {SearchComponent} from './component/blog_search.component';
import {TagCategoryComponent} from './component/tag_category.component';
import {OtherWidgetComponent} from './component/blog_other_widget.component';
import {BlogPostComponent} from './blog_post/blog_post.component';
import {MultipleDemoComponent} from './blog_post/multiple-demo';
import {HighlightJsModule, HighlightJsService} from 'angular2-highlight-js';
import {RouterModule} from '@angular/router';
import {AdminModule} from "./admin/admin.module";

@NgModule({
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    SelectModule,
    ReactiveFormsModule,
    HighlightJsModule,
    RouterModule,
    AdminModule
  ],
  providers: [
    HighlightJsService
  ],
  declarations: [
    AppComponent,
    BlogListComponent,
    FooterComponent,
    MenuComponent,
    SearchComponent,
    TagCategoryComponent,
    OtherWidgetComponent,
    WidgetsComponent,
    BlogDetailComponent,
    BlogPostComponent,
    MultipleDemoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
