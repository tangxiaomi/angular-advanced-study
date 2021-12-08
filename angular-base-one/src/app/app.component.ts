import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'angular-base-one';
  public count = 10;
  public defaultValue = 19;

  public handleGetTitle(title: string): void {
    this.title = title;
    console.log(title);
  }

  public checkValue(value: string): void {
    console.log(value);
  }
}
