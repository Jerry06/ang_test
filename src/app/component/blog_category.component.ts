import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'blog_category',
    template:
    `
<div class="well">
  <h4>Blog Categories</h4>
  <div class="row">
    <div class="col-lg-6">
      <ul class="list-unstyled">
        <li><a href="#">Category Name</a>
        </li>
        <li><a href="#">Category Name</a>
        </li>
        <li><a href="#">Category Name</a>
        </li>
        <li><a href="#">Category Name</a>
        </li>
      </ul>
    </div>
    <!-- /.col-lg-6 -->
    <div class="col-lg-6">
      <ul class="list-unstyled">
        <li><a href="#">Category Name</a>
        </li>
        <li><a href="#">Category Name</a>
        </li>
        <li><a href="#">Category Name</a>
        </li>
        <li><a href="#">Category Name</a>
        </li>
      </ul>
    </div>
    <!-- /.col-lg-6 -->
  </div>
  <!-- /.row -->
</div>


`
})
export class BlogCategoryComponent implements OnInit {
    constructor() { }

    ngOnInit() { }


}
