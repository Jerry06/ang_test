import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import {HighlightJsService} from "angular2-highlight-js";

@Component({
  selector: 'demo',
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.component.css']
})

export class BlogDetailComponent implements OnInit, AfterViewInit {
  sampleContent = '';

  constructor(private highlightJsService: HighlightJsService) {

  }

  ngOnInit() { }

  ngAfterViewInit() {
  }

  highlightByService(target: ElementRef) {
    this.highlightJsService.highlight(target);
  }

  addContent() {
    this.sampleContent = `
         <pre>
            <code class="typescript highlight">
                class Greeter {
                    constructor(public greeting: string) { }
                    greet() {
                        return "hello world";
                    }
                };
            </code>
        </pre>
        <pre>
            <code class="javascript highlight">
                alert('Hello, World!');
            </code>
        </pre>
        `;
  }
}
