import {Component, OnInit} from '@angular/core';
import {BlogService} from "../service/blog.service";
import {Category, Tag} from "../model/blog";

@Component({
  selector: 'blog_category',
  templateUrl: './blog_category.component.html',
})

export class BlogCategoryComponent implements OnInit {

  cats: Category[];
  tags: Tag[];
  errorMessage: String;
  isLoading: boolean = true;

  constructor(private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.blogService.getCats().subscribe(
      p => this.cats = p,
      e => this.errorMessage = e,
      () => this.isLoading = false);
    this.blogService.getTags().subscribe(
      p => this.tags = p,
      e => this.errorMessage = e,
      () => this.isLoading = false);
  }


}
