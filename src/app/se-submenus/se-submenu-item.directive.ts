import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[seSubmenuItem]'
})
export class SeSubmenuItemDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'opacity', 0);
    this.renderer.setStyle(this.element.nativeElement, 'display', 'flex');
  }
  get elementRef(): ElementRef {
    return this.element;
  }

}
