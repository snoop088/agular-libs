import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeSimplSubmenuComponent } from './se-simpl-submenu.component';
import { SeSimplSubmenuItemDirective } from './se-simpl-submenu-item.directive';



@NgModule({
  declarations: [SeSimplSubmenuComponent, SeSimplSubmenuItemDirective],
  imports: [
    CommonModule
  ],
  exports: [SeSimplSubmenuComponent, SeSimplSubmenuItemDirective]
})
export class SeSimplSubmenuModule { }
