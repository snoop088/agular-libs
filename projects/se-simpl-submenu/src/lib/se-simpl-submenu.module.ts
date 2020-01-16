import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeSimplSubmenuComponent } from './se-simpl-submenu.component';
import { SeSimplSubmenuItemDirective } from './se-simpl-submenu-item.directive';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [SeSimplSubmenuComponent, SeSimplSubmenuItemDirective],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [SeSimplSubmenuComponent, SeSimplSubmenuItemDirective]
})
export class SeSimplSubmenuModule { }
