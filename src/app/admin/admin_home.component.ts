import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import {Blog} from '../model/blog';
import {BlogService} from '../service/blog.service';
import {Headers, Http} from "@angular/http";

@Component({
  selector: 'my-admin',
  styleUrls: ['./metisMenu.css',
    './sb-admin-2.css',
    './morris.css',
    './font-awesome/css/font-awesome.min.css'
  ],
  templateUrl: './admin_home.component.html'
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
              private http : Http){
  }

  ngOnInit(): void {
    alert('oninit');
    // this.route.params.subscribe(params => {
    //   this.blogService
    //     .get(params['id'])
    //     .subscribe(
    //       p => this.blog = p,
    //       e => this.errorMessage = e,
    //       () => this.isLoading = false);
    // });
  }
  savePersonDetails(){
    console.debug("savePersonDetails");
    this.blogService
      .save(this.blog)
      .subscribe(
        (r: Response) => {console.log('success');}
      );
  }

  save123() {
    console.debug("save123");
    this.blog.content = 'content1';
    this.blog.title = 'title1';
    this.http
      .post(`http://localhost:8080/blog/`, JSON.stringify(this.blog), {headers: this.getHeaders()});
    return "ok;"
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
