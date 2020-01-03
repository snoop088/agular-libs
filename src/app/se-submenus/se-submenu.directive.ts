import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { SeSubmenusOptions } from './se-submenus-options';

@Directive({
  selector: '[appSeSubmenu]'
})
export class SeSubmenuDirective implements OnInit {
  @Input() options: SeSubmenusOptions;

  private mapPosition: {};

  constructor( private container: ElementRef, private renderer: Renderer2) {
    this.mapPosition = {
      top: 'translateY(-100%)'
    };
  }

  ngOnInit() {
    this.renderer.setStyle(this.container.nativeElement, 'transform', this.mapPosition[this.options.position]);
  }

}
