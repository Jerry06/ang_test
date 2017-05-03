// import {
//   Component, OnInit, OnDestroy, AfterViewInit, ElementRef, AfterViewChecked,
//   AfterContentChecked, ViewChild, ComponentFactoryResolver
// } from '@angular/core';
// import {Blog} from '../model/blog';
// import {BlogService} from '../service/blog.service';
// import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";
// import {Subscription} from 'rxjs/Rx'
// import {HighlightJsService} from "angular2-highlight-js";
// import {FacebookCommentsComponent} from "./fb_comments.component";
// import {FacebookCommentsDirective} from "./fb_comments_directive.component";
//
// @Component({
//   selector: 'blog-details',
//   // templateUrl: 'blog_details.component.html',
//   template: `
//     <div>
//       <h3>Advertisements</h3>
//       <ng-template my-fb-comments></ng-template>
//     </div>
//   `
//
// })
//
// export class BlogDetailComponent implements OnInit, AfterViewInit, OnDestroy {
//
//   @ViewChild(FacebookCommentsDirective) adFbComments: FacebookCommentsDirective;
//   blog: Blog;
//   errorMessage: String;
//   isLoading: boolean = true;
//   sampleContent: String = "";
//   subscription: any;
//   interval: any;
//   constructor(private blogService: BlogService,
//               private route: ActivatedRoute,
//               private router: Router,
//               private el: ElementRef,
//               private service: HighlightJsService,
//               private _componentFactoryResolver: ComponentFactoryResolver) {
//   }
//
//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.blogService
//         .get(params['id'])
//         .subscribe(
//           p => (
//             this.blog = p
//           ),
//           e => this.errorMessage = e,
//           () => this.isLoading = false);
//     });
//   }
//
//
//   getAds() {
//     this.interval = setInterval(() => {
//       this.loadComponent();
//     }, 3000);
//   }
//
//   loadComponent() {
//     let componentFactory = this._componentFactoryResolver.resolveComponentFactory(FacebookCommentsComponent);
//     console.info("componentFactory " + componentFactory);
//     console.info("componentFactory " + componentFactory.componentType);
//     console.info("componentFactory " + componentFactory.selector);
//     let viewContainerRef = this.adFbComments.viewContainerRef;
//     console.info("viewContainerRef " + viewContainerRef);
//     viewContainerRef.clear();
//     let componentRef = viewContainerRef.createComponent(componentFactory);
//     console.info("componentRef instance" + componentRef.instance);
//   }
//
//   ngOnDestroy() {
//     clearInterval(this.interval);
//   }
//
//   initFBComments() {
//
//
//     // (function (d, s, id) {
//     //   var js, fjs = d.getElementsByTagName(s)[0];
//     //   if (d.getElementById(id)) return;
//     //   js = d.createElement(s);
//     //   js.id = id;
//     //   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=379843209043251";
//     //   fjs.parentNode.insertBefore(js, fjs);
//     // }(document, 'script', 'facebook-jssdk'));
//   }
//
//   ngAfterViewInit() {
//     this.loadComponent();
//     // this.getAds();
//   }
//
// }
