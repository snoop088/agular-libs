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

  @Input() set options(options: SeSubmenusOptions) {
    this._options = Object.assign({
      position: 'top',
      animation: 'staggered-fade',
      itemTiming: 0.25,
      itemDelay: 0.25,
      easing: 'power1.out'
    }, options);
    this.renderer.addClass(this.container.nativeElement, 'position-' + this._options.position);
  }

  @ContentChildren(SeSubmenuItemDirective) menuItemsQueryList: QueryList<SeSubmenuItemDirective>;

  private tl: TimelineMax;
  private _submenuState: SubmenuState;
  private _options: SeSubmenusOptions;
  private isAnimating = false;

  // @Input() set submenuState(state: SubmenuState) {
  //   console.log('click', state);
  //   if (!this.isAnimating && state !== this._submenuState) {
  //     if (state === 'closed') {
  //       this.hideSubmenu();
  //     } else if (state === 'opened') {
  //       this.showSubmenu();
  //     }
  //   }
  // }
  get submenuState(): SubmenuState {
    return this._submenuState;
  }
  constructor(private container: ElementRef, private renderer: Renderer2, private changeDetectorRef: ChangeDetectorRef) {
    this._submenuState = 'closed';
    this.tl = gsap.timeline({
      paused: true,
      onComplete: this.onCompleteHandler,
      onReverseComplete: this.onCompleteHandler,
      onCompleteParams: ['opening'],
      onReverseCompleteParams: ['closing'],
      callbackScope: this
    });
  }

  ngOnInit() {
  }
  ngAfterContentInit() {
    this.animationSetup();
  }
  public showSubmenu() {
    console.log('show', this.isAnimating);
    if (!this.isAnimating && this._submenuState !== 'opened') {
      this._submenuState = 'opened';
      this.isAnimating = true;
      this.changeDetectorRef.markForCheck();
      this.tl.play();
    }
  }
  public hideSubmenu() {
    console.log('hide', this.isAnimating);
    if (!this.isAnimating && this._submenuState !== 'closed') {
      this.isAnimating = true;
      this.changeDetectorRef.markForCheck();
      this.tl.reverse();
    }
  }
  public toggleSubmenu() {
    console.log('toggle', this.isAnimating);
    if (!this.isAnimating) {
      this._submenuState === 'closed' ? this.showSubmenu() : this.hideSubmenu();
    }
  }
  private getMenuItemsElements(): HTMLElement[] {
    return this.menuItemsQueryList.map(item => item.elementRef.nativeElement);
  }
  private animationSetup() {
    const staggerTime = this._options.animation === 'non-staggered' ? 0 : this._options.itemDelay;
    const animFrom = {
      duration: this._options.itemTiming,
      stagger: staggerTime,
      ease: this._options.easing
    };
    const animTo = {
      opacity: 1,
      duration: this._options.itemTiming,
      stagger: staggerTime,
      ease: this._options.easing
    };
    switch (this._options.position) {
      case 'top': {
        this.tl.fromTo(this.getMenuItemsElements(),
          Object.assign(animFrom, { yPercent: this._options.animation === 'staggered-move' ? -50 : 0 }),
          animTo, 0
        );
        break;
      }
      case 'left': {
        this.tl
          .from(this.getMenuItemsElements(),
            Object.assign(animFrom, { xPercent: this._options.animation === 'staggered-move' ? -50 : 0 }), 0)
          .to(this.getMenuItemsElements(), animTo, '<');
        break;
      }
    }
  }
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
