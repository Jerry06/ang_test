import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {routing} from './app.routes';

import { SelectModule } from 'ng2-select';
import {AppComponent}  from './app.component';
import {BlogListComponent} from './component/blog_list.component';
import {BlogDetailComponent} from './component/blog_details.component';
import {FooterComponent} from './component/footer.component';
import {MenuComponent} from './component/menu.component';
import {WidgetsComponent} from './component/blog_widgets.component';
import {SearchComponent} from './component/blog_search.component';
import {BlogCategoryComponent} from './component/blog_category.component';
import {OtherWidgetComponent} from './component/blog_other_widget.component';
import {BlogPostComponent} from './blog_post/blog_post.component';
import {MultipleDemoComponent} from './blog_post/multiple-demo';
import {TinymceModule} from '../angular2-tinymce.module';
import {AdminHomeComponent} from './admin/admin_home.component';
import {AdGridComponent} from './admin/admin_grid.component';
import {AdMenuComponent} from './admin/admin_menu.component';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [BrowserModule, routing, FormsModule, HttpModule, BrowserModule,
    FormsModule,
    SelectModule,
    ReactiveFormsModule,
    HighlightJsModule,
    RouterModule,
    TinymceModule.withConfig({
      plugins: ['lists', 'code', 'codesample'],
      toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | codesample'
    })
  ],
  providers: [
    HighlightJsService
  ],
  declarations: [AppComponent, BlogListComponent, FooterComponent, MenuComponent,
    SearchComponent, BlogCategoryComponent, OtherWidgetComponent,
    WidgetsComponent, BlogDetailComponent, BlogPostComponent, AdminHomeComponent, AdGridComponent
    , AdMenuComponent, MultipleDemoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
