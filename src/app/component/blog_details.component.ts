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
    this.sampleContent = `
         <pre class="java highlight">
        
                class Greeter {
                    constructor(public greeting: string) { }

                    greet() {
                        return "hello world";
                    }
                };
    
        </pre>
        <pre>
            <code class="javascript highlight">
                alert('Hello, World!');
            </code>
        </pre>               
        `;
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

  addContent() {

  }

  ngAfterContentChecked() {


    //
  }
}
