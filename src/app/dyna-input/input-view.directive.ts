import { Directive, ViewContainerRef, TemplateRef, Host, OnInit, DoCheck } from '@angular/core';
import { DynaInputDirective, Modes } from './dyna-input.directive';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[inputView]'
})
export class InputViewDirective implements OnInit, DoCheck {
  public controller: {
    edit: () => void
  };
  private prevMode: Modes;
  constructor(
    private vcr: ViewContainerRef,
    private tpl: TemplateRef<any>,
    @Host() private dynaInput: DynaInputDirective
  ) {
    this.controller = {
      edit: this.dynaInput.controller.edit
    };
  }
  ngOnInit() {
    this.prevMode = this.dynaInput.currentMode;
    this.enforceView();
  }
  ngDoCheck() {
    if (this.prevMode !== this.dynaInput.currentMode) {
      this.prevMode = this.dynaInput.currentMode;
      this.enforceView();
    }
  }
  private enforceView() {
    if (this.dynaInput.currentMode === Modes.view) {
      this.vcr.createEmbeddedView(this.tpl, { controller: this.controller });
    } else {
      this.vcr.clear();
    }
  }

}
