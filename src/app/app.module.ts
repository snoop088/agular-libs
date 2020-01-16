import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynaInputModule } from './dyna-input/dyna-input.module';
// import { SeSubmenusModule } from './se-submenus/se-submenus.module';
import { SeSimplSubmenuModule} from 'se-simpl-submenu';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DynaInputModule,
    SeSimplSubmenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
