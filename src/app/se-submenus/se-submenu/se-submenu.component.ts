import { Component, Input, OnInit, ElementRef, Renderer2, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import { SeSubmenusOptions } from '../se-submenus-options';
import { gsap } from 'gsap';
import { SeSubmItemDirective } from '../se-subm-item.directive';
import { SeSubmenuItemComponent } from '../se-submenu-item/se-submenu-item.component';

export type SubmenuState = 'opened' | 'closed';
@Component({
  selector: 'se-submenu',
  templateUrl: './se-submenu.component.html',
  styleUrls: ['./se-submenu.component.css']
})
export class SeSubmenuComponent implements OnInit, AfterContentInit {

  @Input() options: SeSubmenusOptions;
  
  @ContentChildren(SeSubmenuItemComponent) menuItemsQueryList: QueryList<SeSubmenuItemComponent>;

  private tl = gsap.timeline();
  private menuItems: SeSubmenuItemComponent[];
  private _submenuState: SubmenuState;

  @Input() set submenuState(state: SubmenuState) {
    if (state === 'closed') {
      this.hideSubmenu();
    } else if (state === 'opened') {
      this.showSubmenu();
    }
  }
  get submenuState(): SubmenuState {
    return this._submenuState;
  }
  constructor( private container: ElementRef, private renderer: Renderer2 ) {
    this._submenuState = 'closed';
  }

  ngOnInit() {
    this.renderer.addClass(this.container.nativeElement, 'position-' + this.options.position);
  }
  ngAfterContentInit() {
    this.menuItemsQueryList.forEach(menuItem => {
      console.log(menuItem);
      this.renderer.addClass(menuItem.elementRef.nativeElement, 'menu-item');
      // this.tl.to(menuItem.elementRef.nativeElement, {duration: 1, x: 200, y: 100});
    });
  }
  private showSubmenu() {
    this._submenuState = 'opened';
    this.tl.to(this.getMenuItemsElements(), {duration: 1, x: 200, y: 100, stagger: 1});
  }
  private hideSubmenu() {
    this._submenuState = 'closed';

  }
  private getMenuItemsElements(): HTMLElement[] {
    return this.menuItemsQueryList.map(item => item.elementRef.nativeElement);
  }

}
