import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeSubmenuComponent } from './se-submenu/se-submenu.component';
import { SeSubmenuItemDirective } from './se-submenu-item.directive';



@NgModule({
  declarations: [SeSubmenuComponent, SeSubmenuItemDirective],
  imports: [
    CommonModule
  ],
  exports: [
    SeSubmenuComponent,
    SeSubmenuItemDirective
  ]
})
export class SeSubmenusModule { }
