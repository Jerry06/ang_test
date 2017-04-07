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
  // templateUrl: 'demo.component.html',
  template: `
<div class="container">
  <div class="row">

        
         
    <div *ngIf="!blog" class="col-lg-8">Not Found !! Try other blog post !</div>          
    <div *ngIf="blog" class="col-lg-8">

            
      <h1>{{blog.title}}</h1>
   <pre>
            <code class="java">
                class Greeter {{ '{' }}
                    constructor(public greeting: string) {{ '{' }} {{ '}' }}

                    greet() {{ '{' }}
                        return "hello world";
                    {{ '}' }}
                {{ '}' }};
            </code>
        </pre>
        
           <pre>
            <code class="java">
                class Greeter {{ '{' }}
                    constructor(public greeting: string) {{ '{' }} {{ '}' }}

                    greet() {{ '{' }}
                        return "hello world";
                    {{ '}' }}
                {{ '}' }};
            </code>
        </pre>
      <!-- Date/Time -->
      <p><span class="glyphicon glyphicon-time"></span> Posted on {{blog.createdDate | date : 'short'}}</p>

      <hr>

      <!-- Preview Image -->
      <img class="img-responsive" src="http://placehold.it/900x300" alt="">

  

      <hr>
      <!-- Post Content -->
      <!--<div [innerHTML]=blog.content></div>-->
      <hr>
    </div>
  </div>
</div>
<button (click)="h()" class="btn btn-default">Hhhhhh</button>
`

})
export class BlogDetailComponent implements OnInit, AfterViewInit, AfterViewChecked,  AfterContentChecked {
  blog: Blog;
  errorMessage: String;
  isLoading: boolean = true;

  constructor(private blogService: BlogService,
              private route: ActivatedRoute,
              private router: Router, private el: ElementRef, private service: HighlightJsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.blogService
        .get(params['id'])
        .subscribe(
          p => this.test(p),
          e => this.errorMessage = e,
          () => this.isLoading = false);
    });
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    // while (this.isLoading){
    //
    // }
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");

  }

  test(p: Blog): void {
    this.blog = p;
    console.log("test");
    // this.service.highlight(this.el.nativeElement.querySelector('.java'));
    var millisecondsToWait = 5000;
    setTimeout(function () {
      console.log("test timeout");

      // Whatever you want to do after the wait
    }, millisecondsToWait);

  }

  h(): void {
    this.service.highlight(this.el.nativeElement.querySelector('.java'), true);
  }

  ngAfterContentChecked() {


    //
  }
}
