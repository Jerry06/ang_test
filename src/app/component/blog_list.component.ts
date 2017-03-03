import {Component, OnInit, OnDestroy} from '@angular/core';
import {Blog} from '../model/blog';
import {BlogService} from '../service/blog.service';
import {PaginationPage} from "../model/pagination";
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'blog-list',
  template:
  `
<menu>Bog loading...</menu>
<div class="container">
  <div class="row">

    <!-- Blog Entries Column -->
    <div class="col-md-8">

      <h1 class="page-header"></h1>
      <!--Page Heading-->
      <!--<small>Secondary Text</small>-->
      <!--</h1>-->
      <div *ngFor="let blog of page?.content">
        <!-- First Blog Post -->
        <h2>
          <a href="#">{{blog.title}}</a>
        </h2>
        <p><span class="glyphicon glyphicon-time"></span> Posted on {{blog.createdDate | date : 'short'}}</p>
        <hr>
        <img class="img-responsive" src="http://placehold.it/900x300" alt="">
        <hr>
        <p>{{blog.content}}</p>
        <a class="btn btn-primary" [routerLink]="['/blog', blog.id]">Read More <span
          class="glyphicon glyphicon-chevron-right"></span></a>

        <hr>
      </div>
      <!-- Pager -->
      <ul class="pager">
        <li *ngIf="page?.first == false" class="previous">
          <!--<a routerLink="/blog"  href="blog?page={{page?.number - 1}}&size={{page?.size}}">&larr; Newer</a>-->
          <!--<a [routerLink]="['blog']" [queryParams]="{ page: page?.number-1, size: page?.size  }">Go to Page 99</a>-->
          <a [routerLink]="['']" [queryParams]="{ page: page?.number-1, size: page?.size  }">&larr; Newer</a>
        </li>
        <li class="next">
          <!--<a href="blog?page={{page?.number + 1}}&size={{page?.size}}">Older &rarr;</a>-->
          <a [routerLink]="['']" [queryParams]="{ page: page?.number+1, size: page?.size  }">Older &rarr;</a>
        </li>
      </ul>


    </div>

    <!-- Blog Sidebar Widgets Column -->
    <blog_widgets></blog_widgets>
  </div>
  <hr>
  <footer>Bog loading...</footer>
</div>

`
})

export class BlogListComponent implements OnInit, OnDestroy {

  routerSubscription: Subscription;
  sub: any;
  page: PaginationPage<Blog>;
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private blogService: BlogService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      let pageNum: number;
      let pageSize: number;
      pageNum = Number.parseInt(params['page']) || 0;
      pageSize = Number.parseInt(params['size']) || 2;
      this.blogService
        .getPage(pageNum, pageSize, null)
        .subscribe(
          p => this.page = p,
          e => this.errorMessage = e,
          () => this.isLoading = false);
    });
    this.routerSubscription = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        document.body.scrollTop = 0;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
