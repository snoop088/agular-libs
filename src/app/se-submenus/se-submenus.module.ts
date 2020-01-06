import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeSubmenuDirective } from './se-submenu.directive';
import { SeSubmItemDirective } from './se-subm-item.directive';
import { SeSubmenuComponent } from './se-submenu/se-submenu.component';
import { SeSubmenuItemComponent } from './se-submenu-item/se-submenu-item.component';



@NgModule({
  declarations: [SeSubmenuDirective, SeSubmItemDirective, SeSubmenuComponent, SeSubmenuItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SeSubmenuDirective,
    SeSubmItemDirective,
    SeSubmenuComponent,
    SeSubmenuItemComponent
  ]
})
export class SeSubmenusModule { }
