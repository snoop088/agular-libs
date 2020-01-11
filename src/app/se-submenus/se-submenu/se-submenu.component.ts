import {
  Component, Input, OnInit, ElementRef, Renderer2, ContentChildren,
  QueryList, ChangeDetectionStrategy, AfterContentInit, ChangeDetectorRef
} from '@angular/core';
import { SeSubmenusOptions } from '../se-submenus-options';
import { gsap } from 'gsap';
import { SeSubmenuItemDirective } from '../se-submenu-item.directive';

export type SubmenuState = 'opened' | 'closed';
@Component({
  selector: 'se-submenu',
  templateUrl: './se-submenu.component.html',
  styleUrls: ['./se-submenu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeSubmenuComponent implements OnInit, AfterContentInit {

  // Options Input to set up the SubMenu behaviour
  @Input() set options(options: SeSubmenusOptions) {
    if (options) {
      this._options = Object.assign(this._options, options);
    }
    this.renderer.addClass(this.container.nativeElement, 'position-' + this._options.position);
  }
  // Content Children are used to perform various operations on the SubMenu Items
  @ContentChildren(SeSubmenuItemDirective) menuItemsQueryList: QueryList<SeSubmenuItemDirective>;

  private tl: TimelineMax;
  private _submenuState: SubmenuState;
  private _options: SeSubmenusOptions;
  private isAnimating = false;

  get submenuState(): SubmenuState {
    return this._submenuState;
  }
  constructor(private container: ElementRef, private renderer: Renderer2, private changeDetectorRef: ChangeDetectorRef) {
    // Setting up default values
    // SubMenu is closed on page load
    // Animation timeline setup
    // Default options, if no options are supplied
    this._submenuState = 'closed';
    this.tl = gsap.timeline({
      paused: true,
      onComplete: this.onCompleteHandler,
      onReverseComplete: this.onCompleteHandler,
      onCompleteParams: ['opening'],
      onReverseCompleteParams: ['closing'],
      callbackScope: this
    });
    this._options = {
      position: 'top',
      animation: 'staggered-fade',
      itemTiming: 0.25,
      itemDelay: 0.25,
      scaleFrom: 0.8,
      moveFrom: 33,
      easing: 'power1.out'
    };
  }

  ngOnInit() {
  }
  ngAfterContentInit() {
    // Wait until component initialises the SubMenu Items to perform actions
    // If the menu is non-animated, the _submenuState is used to control the visibility of the SubMenu
    if (this._options.animation === 'non-animated') {
      this.menuItemsQueryList.forEach(item => this.renderer.setStyle(item.elementRef.nativeElement, 'opacity', 1));
    } else {
      this.animationSetup();
    }
    // Correct class to position the SubMenu to its parent component.
    this.renderer.addClass(this.container.nativeElement, 'position-' + this._options.position);
  }
  // Public method as interface to the SubMenu - it displays the SubMenu
  public showSubmenu() {
    if (!this.isAnimating && this._submenuState !== 'opened') {
      this._submenuState = 'opened';
      if (this._options.animation !== 'non-animated') {
        this.isAnimating = true;
        this.tl.play();
      }
      this.changeDetectorRef.markForCheck();
    }
  }
  // Public method as interface to the SubMenu - it hides the SubMenu
  public hideSubmenu() {
    if (!this.isAnimating && this._submenuState !== 'closed') {
      if (this._options.animation !== 'non-animated') {
        this.isAnimating = true;
        this.tl.reverse();
      } else {
        this._submenuState = 'closed';
      }
      this.changeDetectorRef.markForCheck();
    }
  }
  // Public method as interface to the SubMenu - it toggles the SubMenu shown/ hidden
  public toggleSubmenu() {
    if (!this.isAnimating) {
      this._submenuState === 'closed' ? this.showSubmenu() : this.hideSubmenu();
    }
  }
  private getMenuItemsElements(): HTMLElement[] {
    return this.menuItemsQueryList.map(item => item.elementRef.nativeElement);
  }
  // GSAP animation setup
  private animationSetup() {
    const moveDir = {
      left: {
        axis: 'xPercent',
        multiplier: -1
      },
      right: {
        axis: 'xPercent',
        multiplier: 1
      },
      top: {
        axis: 'yPercent',
        multiplier: -1
      },
      bottom: {
        axis: 'yPercent',
        multiplier: 1
      }
    };
    const staggerTime = this._options.animation === 'non-staggered' ? 0 : this._options.itemDelay;
    const animTo = {
      opacity: 1,
      duration: this._options.itemTiming,
      stagger: staggerTime,
      ease: this._options.easing
    };
    const moveAnim =
      moveDir[this._options.position].multiplier * (this._options.animation === 'staggered-move' ? this._options.moveFrom : 0);
    const scaleAnim = this._options.animation === 'staggered-scale' ? this._options.scaleFrom : 1;
    const animFrom = {
      duration: this._options.itemTiming,
      stagger: staggerTime,
      ease: this._options.easing,
      scaleX: scaleAnim,
      scaleY: scaleAnim,
      [moveDir[this._options.position].axis]: moveAnim
    };
    this.tl
      .from(this.getMenuItemsElements(), animFrom, 0)
      .to(this.getMenuItemsElements(), animTo, '<');
  }
  // OnComplete handler for the timeline to set various states and manage when buttons work
  private onCompleteHandler(transition) {
    this.isAnimating = false;
    if (transition === 'closing') {
      this._submenuState = 'closed';
    } else if (transition === 'opening') {
      this._submenuState = 'opened';
    }
    this.changeDetectorRef.markForCheck();
  }

}
