import {Component, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import {Blog} from '../model/blog';
import {BlogService} from '../service/blog.service';
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";
import {Subscription} from 'rxjs/Rx'

@Component({
  selector: 'person-details',
  template:
  `

<menu>Bog loading...</menu>
<div class="container">
  <div class="row">
    <div *ngIf="!blog" class="col-lg-8">Not Found !! Try other blog post !</div>
    <div *ngIf="blog" class="col-lg-8">

      <h1>{{blog.title}}</h1>
      <!-- Date/Time -->
      <p><span class="glyphicon glyphicon-time"></span> Posted on {{blog.createdDate | date : 'short'}}</p>

      <hr>

      <!-- Preview Image -->
      <img class="img-responsive" src="http://placehold.it/900x300" alt="">

      <hr>

      <!-- Post Content -->
      <p class="lead">
        {{blog.content}}
      </p>

      <hr>

      <!-- Blog Comments -->

      <!-- Comments Form -->
      <div class="well">
        <h4>Leave a Comment:</h4>
        <form role="form">
          <div class="form-group">
            <textarea class="form-control" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>

      <hr>

      <!-- Posted Comments -->
      <section *ngFor="let comment of blog?.comments">
        <!-- Comment -->
        <div class="media">
          <a class="pull-left" href="#">
            <img class="media-object" src="http://placehold.it/64x64" alt="">
          </a>
          <div class="media-body">
            <h4 class="media-heading">Start Bootstrap
              <small>August 25, 2014 at 9:30 PM</small>
            </h4>
            {{comment?.content}}
            <!-- Nested Comment -->
            <div *ngFor="let reply of comment?.replies" class="media">
              <a class="pull-left" href="#">
                <img class="media-object" src="http://placehold.it/64x64" alt="">
              </a>
              <div class="media-body">
                <h4 class="media-heading">Nested Start Bootstrap
                  <small>August 25, 2014 at 9:30 PM</small>
                </h4>
                {{reply?.content}}
              </div>
            </div>
            <!-- End Nested Comment -->
          </div>
        </div>

      </section>
      <!-- Comment -->



    </div>

    <!-- Blog Sidebar Widgets Column -->
    <blog_widgets></blog_widgets>
  </div>
  <hr>
  <footer>Bog loading...</footer>
</div>


`,

  encapsulation: ViewEncapsulation.None,

})
export class BlogDetailComponent implements OnInit {
  blog: Blog;
  errorMessage: String;
  isLoading : boolean = true;

  constructor(private blogService: BlogService,
              private route: ActivatedRoute,
              private router: Router) {
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
}
