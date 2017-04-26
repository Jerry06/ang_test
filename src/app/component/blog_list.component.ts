import {Component, OnInit, OnDestroy} from '@angular/core';
import {Blog} from '../model/blog';
import {BlogService} from '../service/blog.service';
import {PaginationPage} from "../model/pagination";
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'blog-list',
  templateUrl : './blog_list.component.html',
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
    let tag: string = 'test';
    this.sub = this.route.queryParams.subscribe(params => {
      let pageNum: number;
      let pageSize: number;
      pageNum = Number.parseInt(params['page']) || 0;
      pageSize = Number.parseInt(params['size']) || 2;
      this.blogService
        .getPage(pageNum, pageSize, tag, null)
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
