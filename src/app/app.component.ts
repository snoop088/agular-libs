import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public state: string;
  title = 'structinput';
  copy = 'This is a copy example';
  public onCancel(str) {
    console.log('emitted ' + str);
    this.copy = str;
  }
}
