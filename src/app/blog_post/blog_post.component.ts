import {Component, ViewEncapsulation, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'about',
  template: `
	<app-tinymce [(ngModel)]='content'></app-tinymce>
	<pre>{{content}}</pre>
`,
  encapsulation: ViewEncapsulation.None
})

export class BlogPostComponent {
  @Input() content: string = 'viet';
//   public @Input content: string = '<h1>Hello, world!</h1>';
//   public contentControl: FormControl = new FormControl(
//     `<h2>Advantages</h2>
// <ul>
// 	<li>Works nice with both ngModel and formControl</li>
// 	<li>Updates on change and keyup</li>
// 	<li>More features in future</li>
// </ul>`);

  constructor() {
  }

}
