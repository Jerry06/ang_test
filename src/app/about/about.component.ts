import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'about',
  template:`
<div class="container">
	<h1>Using ngModel</h1>
	<app-tinymce [(ngModel)]='content'></app-tinymce>
	<pre>{{content}}</pre>


	<h1>Using formControl</h1>
	<app-tinymce [formControl]='contentControl'></app-tinymce>
	<pre>{{contentControl.value}}</pre>
</div>
`,
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent {
  public content: string = '<h1>Hello, world!</h1>';
  public contentControl: FormControl = new FormControl(
    `<h2>Advantages</h2>
<ul>
	<li>Works nice with both ngModel and formControl</li>
	<li>Updates on change and keyup</li>
	<li>More features in future</li>
</ul>`);
  constructor() { }

}

// import {
//   Component,
//   OnInit
// } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
//
// @Component({
//   selector: 'about',
//   styles: [`
//   `],
//   template: `
//     <h1>About</h1>
//     <div>
//       For hot module reloading run
//       <pre>npm run start:hmr</pre>
//     </div>
//     <div>
//       <h3>
//         patrick@AngularClass.com
//       </h3>
//     </div>
//     <pre>this.localState = {{ localState | json }}</pre>
//   `
// })
// export class AboutComponent implements OnInit {
//
//   public localState: any;
//   constructor(
//     public route: ActivatedRoute
//   ) {}
//
//   public ngOnInit() {
//     this.route
//       .data
//       .subscribe((data: any) => {
//         // your resolved data from route
//         this.localState = data.yourData;
//       });
//
//     console.log('hello `About` component');
//     // static data that is bundled
//     // var mockData = require('assets/mock-data/mock-data.json');
//     // console.log('mockData', mockData);
//     // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
//     this.asyncDataWithWebpack();
//   }
//   private asyncDataWithWebpack() {
//     // you can also async load mock data with 'es6-promise-loader'
//     // you would do this if you don't want the mock-data bundled
//     // remember that 'es6-promise-loader' is a promise
//     setTimeout(() => {
//
//       System.import('../../assets/mock-data/mock-data.json')
//         .then((json) => {
//           console.log('async mockData', json);
//           this.localState = json;
//         });
//
//     });
//   }
//
// }
