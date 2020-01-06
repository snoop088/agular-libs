import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'structinput';
  copy = 'This is a copy example';
  state = 'closed';
  public onCancel(str) {
    console.log('emitted ' + str);
    this.copy = str;
  }
}
