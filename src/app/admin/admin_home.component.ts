///<reference path="../../../node_modules/@angular/http/src/interfaces.d.ts"/>
import {Component, OnInit, OnDestroy, ViewEncapsulation, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Response} from '@angular/http';

import {Blog, Category, Tag} from '../model/blog';
import {BlogService} from '../service/blog.service';
import {
  RequestOptions,
  RequestMethod,
  RequestOptionsArgs,
  Http,
  Headers
} from "@angular/http";
import {BlogPostComponent} from "../blog_post/blog_post.component";

@Component({
  selector: 'my-admin',
  styleUrls: ['./metisMenu.css',
    './sb-admin-2.css',
    './morris.css',
    './font-awesome/css/font-awesome.min.css'
  ],
  templateUrl: './admin_home.component.html',
  encapsulation: ViewEncapsulation.None
})


export class AdminHomeComponent implements OnInit {
  cats: Category[];
  tags: Tag[];
  selectedValue: string;
  blog: Blog = {

  };
  // title: string;
  //@Input() content: string = '^_^';
  errorMessage: String;
  isLoading: boolean = true;

  constructor(private blogService: BlogService,
              private route: ActivatedRoute,
              private router: Router,
              private http: Http) {
  }

  ngOnInit(): void {
    this.selectedValue = 'Java';
    this.blogService.getCats().subscribe(
      p => this.cats = p,
      e => this.errorMessage = e,
      () => this.isLoading = false);

    this.blogService.getTags().subscribe(
      p => this.tags = p,
      e => this.errorMessage = e,
      () => this.isLoading = false);

    this.route.params.subscribe(params => {
      this.blogService
        .get(params['id'])
        .subscribe(
          p => {
            this.blog = p;
            //this.content = this.blog.content;
          },
          e => this.errorMessage = e,
          () => this.isLoading = false);
    });
  }

  save123() {
    // this.blog.content = this.content;
    this.blogService
      .save(this.blog)
      .subscribe(
        data => console.log(data),
        err => console.log(err.json().message),
        () => console.log('Post Complete')
      );
  }
}

