import { Directive, ViewContainerRef, TemplateRef, Host, OnInit, Input, DoCheck } from '@angular/core';
import { DynaInputDirective, Modes } from './dyna-input.directive';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[inputEdit]'
})
export class InputEditDirective implements OnInit, DoCheck {

  public controller: {
    cancel: () => void,
    confirm: () => void
  };

  private prevValue: string | number | null;
  private prevMode: Modes;
  // tslint:disable-next-line:variable-name
  private _inputEdit: string | number;

  @Input() set inputEdit(val: string | number) {
    if (val !== this._inputEdit) {
      this._inputEdit = val;
    }
  }

  constructor(
      private vcr: ViewContainerRef,
      private tpl: TemplateRef<any>,
      @Host() private dynaInput: DynaInputDirective
  ) {
    this.controller = {
      confirm: () => {
        this.prevValue = this._inputEdit;
        this.dynaInput.controller.confirm();
      },
      cancel: () => {
        this.dynaInput.controller.cancel(this.prevValue);
      }
    };
  }

  ngOnInit() {
    this.prevValue = this._inputEdit;
    this.prevMode = this.dynaInput.currentMode;
    this.enforceView();
  }
  ngDoCheck() {
    if (this.dynaInput.currentMode !== this.prevMode) {
      this.prevMode = this.dynaInput.currentMode;
      this.enforceView();
    }
    console.log('fire edit directive');
  }
  private enforceView() {
    if (this.dynaInput.currentMode === Modes.edit) {
      this.vcr.createEmbeddedView(this.tpl, { controller: this.controller });
    } else {
      this.vcr.clear();
    }
  }
}
