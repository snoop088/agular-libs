import { Directive, OnInit, Output, EventEmitter } from '@angular/core';

export enum Modes {
  edit = 1,
  view = 2
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[dynaInput]'
})
export class DynaInputDirective implements OnInit {
  public controller: {
    edit: () => void;
    cancel: (prevValue: string | number) => void;
    confirm: () => void;
  };

  @Output() cancel = new EventEmitter<string | number>();
  private mode = Modes.view;

  constructor(

  ) {
    this.controller = {
      edit: () => { this.mode = Modes.edit; },
      cancel: (prevValue) => {
        this.cancel.emit(prevValue);
        this.mode = Modes.view;
      },
      confirm: () => { this.mode = Modes.view; }
    };

  }
  ngOnInit() {
    // this.vcr.createEmbeddedView(this.tpl, { controller: this.controller });
  }

  get currentMode(): Modes {
    return this.mode;
  }
}
