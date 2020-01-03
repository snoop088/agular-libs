import { Component, Input, OnInit, ElementRef, Renderer2, } from '@angular/core';
import { SeSubmenusOptions } from '../se-submenus-options';

@Component({
  selector: 'se-submenu',
  templateUrl: './se-submenu.component.html',
  styleUrls: ['./se-submenu.component.css']
})
export class SeSubmenuComponent implements OnInit {

  @Input() options: SeSubmenusOptions;

  constructor( private container: ElementRef, private renderer: Renderer2 ) { }

  ngOnInit() {
    console.log(this.options);
    this.renderer.addClass(this.container.nativeElement, 'position-' + this.options.position);
  }

}
