import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[my-fb-comments]',
})

export class FacebookCommentsDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}

