import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'se-submenu-item',
  templateUrl: './se-submenu-item.component.html',
  styleUrls: ['./se-submenu-item.component.css']
})
export class SeSubmenuItemComponent implements OnInit {

  constructor(private el: ElementRef) { }

  get elementRef(): ElementRef {
    return this.el;
  }

  ngOnInit() {
  }

}
