import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeSubmenuDirective } from './se-submenu.directive';
import { SeSubmItemDirective } from './se-subm-item.directive';
import { SeSubmenuComponent } from './se-submenu/se-submenu.component';



@NgModule({
  declarations: [SeSubmenuDirective, SeSubmItemDirective, SeSubmenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SeSubmenuDirective,
    SeSubmItemDirective,
    SeSubmenuComponent
  ]
})
export class SeSubmenusModule { }
