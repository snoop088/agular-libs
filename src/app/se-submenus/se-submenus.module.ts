import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeSubmenuDirective } from './se-submenu.directive';
import { SeSubmenuComponent } from './se-submenu/se-submenu.component';
import { SeSubmenuItemComponent } from './se-submenu-item/se-submenu-item.component';
import { SeSubmenuItemDirective } from './se-submenu-item.directive';



@NgModule({
  declarations: [SeSubmenuDirective, SeSubmenuComponent, SeSubmenuItemComponent, SeSubmenuItemDirective],
  imports: [
    CommonModule
  ],
  exports: [
    SeSubmenuDirective,
    SeSubmenuComponent,
    SeSubmenuItemComponent,
    SeSubmenuItemDirective
  ]
})
export class SeSubmenusModule { }
