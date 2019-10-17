import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynaInputDirective } from './dyna-input.directive';
import { InputViewDirective } from './input-view.directive';
import { InputEditDirective } from './input-edit.directive';

@NgModule({
  declarations: [
    DynaInputDirective,
    InputViewDirective,
    InputEditDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DynaInputDirective,
    InputViewDirective,
    InputEditDirective
  ]
})
export class DynaInputModule { }
