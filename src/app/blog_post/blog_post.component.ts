import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'about',
  template: `
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

export class BlogPostComponent {
  public content: string = '<h1>Hello, world!</h1>';
  public contentControl: FormControl = new FormControl(
    `<h2>Advantages</h2>
<ul>
	<li>Works nice with both ngModel and formControl</li>
	<li>Updates on change and keyup</li>
	<li>More features in future</li>
</ul>`);

  constructor() {
  }

}
