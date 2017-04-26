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
import {SelectModule} from 'ng2-select';

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
  tags: Tag[]= [{name : 'a'}];
  selectedTags: String[] = ['java'];
  blog: Blog = {};
  // title: string;
  //@Input() content: string = '^_^';
  errorMessage: String;
  isLoading: boolean = true;
  public items: String[] = ['Java'];

  // public items:Array<any> = [{id: 54, text: 'Vienna'}, {id: 54, text: 'A'}, {id: 54, text: 'B'}];

  private value: any = ['Athens'];
  private _disabledV: string = '0';
  private disabled: boolean = false;

  private get disabledV(): string {
    return this._disabledV;
  }

  private set disabledV(value: string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value: any): void {
    this.blog.tags.push(value);
    console.log('Selected value is: ', value);
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
  }

  public itemsToString(value: Array<any> = []): string {
    return value
      .map((item: any) => {
        return item.text;
      }).join(',');
  }

  constructor(private blogService: BlogService,
              private route: ActivatedRoute,
              private router: Router,
              private http: Http) {
  }

  ngOnInit(): void {
    // this.selectedValue = 'Java';
    this.blogService.getCats().subscribe(
      p => this.cats = p,
      e => this.errorMessage = e,
      () => this.isLoading = false);

    this.blogService.getTagsStr().subscribe(
      p => this.items = p,
      e => this.errorMessage = e,
      () => this.isLoading = false);

    this.route.params.subscribe(params => {
      this.blogService
        .get(params['id'])
        .subscribe(
          p => {
            this.blog = p;
            this.selectedTags = p.tags.map((t) => t.name);
            //this.content = this.blog.content;
          },
          e => this.errorMessage = e,
          () => this.isLoading = false);
    });
  }

  save123() {
    this.blog.tags = this.selectedTags.map((t) => <Tag>({ name: t }));
    this.blogService
      .save(this.blog)
      .subscribe(
        data => console.log(data),
        err => console.log(err.json().message),
        () => console.log('Post Complete1')
      );
  }
  login() {
    this.blogService
      .login1()
      .subscribe(
        data => console.log(data),
        err => console.log(err.json().message),
        () => console.log('Login Complete1')
      );
  }
}

