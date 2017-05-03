import {AfterViewInit, Component, ElementRef, Inject, OnInit, Renderer2, Type} from '@angular/core';
import {DOCUMENT} from "@angular/platform-browser";


declare const FB: any;
@Component({
  templateUrl: './fb_comments.component.html'
})

export class FacebookCommentsComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef, private _renderer2: Renderer2, @Inject(DOCUMENT) private _document) {

  }

  public ngOnInit() {

    // (function (d, s, id) {
    //   alert("oo");
    //   var js, fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) return;
    //   js = d.createElement(s);
    //   js.id = id;
    //   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9";
    //   fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'facebook-jssdk'));
    // let s = this._renderer2.createElement('script');
    // s.type = `application/ld+json`;
    // s.text = `
    //         {
    //             alert('123');
    //         }
    //     `;
    //
    // this._renderer2.appendChild(this._document.body, s);
  }

  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.text = `    
    FB = null;
  (function (d, s, id) {    
    var js, fjs = d.getElementsByTagName(s)[0];    
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'))
    `;
    this.elementRef.nativeElement.appendChild(s);

    // var s = document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "http://somedomain.com/somescript";
    // this.elementRef.nativeElement.appendChild(s);
  }
}
