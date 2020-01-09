import { Component } from '@angular/core';
import { SeSubmenusOptions } from './se-submenus/se-submenus-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'structinput';
  copy = 'This is a copy example';
  subOptions: SeSubmenusOptions = {
    position: 'bottom',
    animation: 'staggered-move',
    itemTiming: 0.5,
    itemDelay: 0.1,
    easing: 'power3.in',
    moveFrom: 100,
    scaleFrom: 1.3
  };
  public onCancel(str) {
    console.log('emitted ' + str);
    this.copy = str;
  }
}
