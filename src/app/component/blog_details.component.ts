import {
  Component, OnInit, OnDestroy, AfterViewInit, ElementRef, AfterViewChecked,
  AfterContentChecked
} from '@angular/core';
import {Blog} from '../model/blog';
import {BlogService} from '../service/blog.service';
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";
import {Subscription} from 'rxjs/Rx'
import {HighlightJsService} from "angular2-highlight-js";

@Component({
  selector: 'blog-details',
  templateUrl: 'blog_details.component.html',

})
export class BlogDetailComponent implements OnInit, AfterViewInit, AfterViewChecked,  AfterContentChecked {
  blog: Blog;
  errorMessage: String;
  isLoading: boolean = true;
  sampleContent: String = "";

  constructor(private blogService: BlogService,
              private route: ActivatedRoute,
              private router: Router, private el: ElementRef, private service: HighlightJsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.blogService
        .get(params['id'])
        .subscribe(
          p => this.blog = p,
          e => this.errorMessage = e,
          () => this.isLoading = false);
    });
  }

  ngAfterViewInit() {
  }

  ngAfterViewChecked() {


  }


  ngAfterContentChecked() {


  }
}
