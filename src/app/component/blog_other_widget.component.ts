import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'blog_other_widget',
  template:
  `
<!-- Side Widget Well -->
<div class="well">
  <h4>Side Widget Well</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis adipisci accusamus
    laudantium odit aliquam repellat tempore quos aspernatur vero.</p>
</div>

`
})
export class OtherWidgetComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
