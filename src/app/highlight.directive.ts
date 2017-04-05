import { Directive, ElementRef, Input } from '@angular/core';

declare var hljs: any;


@Directive({ selector: 'pre' })
export class HighlightDirective {
  constructor(el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
    hljs.highlightBlock(el.nativeElement);
  }
}
