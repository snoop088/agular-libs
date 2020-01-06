import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[seSubmenuItem]'
})
export class SeSubmItemDirective {

  constructor(private el: ElementRef) { }
  get elementRef(): ElementRef {
    return this.el;
  }

}
