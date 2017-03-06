///<reference path="../../../node_modules/@angular/http/src/interfaces.d.ts"/>
import {Component, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Response} from '@angular/http';

import {Blog} from '../model/blog';
import {BlogService} from '../service/blog.service';
import { RequestOptions,
  RequestMethod,
  RequestOptionsArgs,
  Http,
  Headers} from "@angular/http";

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

  blog: Blog = new Blog();
  title: string;
  content: string;
  errorMessage: String;
  isLoading: boolean = true;

  constructor(private blogService: BlogService,
              private route: ActivatedRoute,
              private router: Router,
              private http: Http) {
  }

  ngOnInit(): void {
    //alert('oninit');
    // this.route.params.subscribe(params => {
    //   this.blogService
    //     .get(params['id'])
    //     .subscribe(
    //       p => this.blog = p,
    //       e => this.errorMessage = e,
    //       () => this.isLoading = false);
    // });
  }

  savePersonDetails() {
    console.debug("savePersonDetails");
    this.blog.content = 'content1';
    this.blog.title = 'title1';
    let str = JSON.stringify(this.blog);
    this.blogService
      .save(this.blog)
      .subscribe(
        (r: Response) => {
          console.log('success');
        }
      );
  }

  save123() {
    console.debug("save123");
    this.blog.content = 'content1';
    this.blog.title = 'title1';
    let str = JSON.stringify(this.blog);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    // url?: string;
    // method?: string | RequestMethod;
    // search?: string | URLSearchParams;
    // headers?: Headers;
    // body?: any;
    // withCredentials?: boolean;
    // responseType?: ResponseContentType;

    let requestOptions = {
      headers: headers,
    };

    this.blogService
      .save(this.blog)
      .subscribe(
        data => console.log(data),
        err => console.log(err.json().message),
        () => console.log('Post Complete')
      );

    // this.http
    //   .post(`http://localhost:8080/blog/`, str, requestOptions)
    //   .subscribe(
    //     data => console.log(data),
    //     err => console.log(err.json().message),
    //     () => console.log('Post Complete')
    //   );
    return "ok;"
  }

  private getHeaders(): Headers {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}

