import { Component } from '@angular/core';



@Component({
  selector: 'app-hello-world',
  template: `
  <h1>{{displayName}}</h1>
  <div [ngClass]="isHasClass ? 'text-color' : ''">练习一下ngClass</div>
  <div [ngStyle]="styleObj">练习一下ngStyle</div>

  <ul *ngIf="userRole === 'backEnd'">
    <li *ngFor="let subject of studySubjects; let i = index; let count = count; odd as isOdd">
    {{i}} - {{subject}}{{count}}
    {{isOdd}}
    </li>
  </ul>

  <ul [hidden]="userRole === 'backEnd'">
  <li *ngFor="let subject of studySubjects; let i = index; let count = count; odd as isOdd">
  {{i}} - {{subject}}{{count}}
  {{isOdd}}
  </li>
</ul>

<div [ngSwitch]="age">
<span *ngSwitchCase="'12'">小学毕业</span>
<span *ngSwitchCase="'18'">高中毕业</span>
<span *ngSwitchCase="'22'">大学毕业</span>
<span *ngSwitchDefault>未知</span>
</div>

<img [src]="imgUrl">
<img src="{{imgUrl}}">
<button [disabled]="isDisabledBtn">是否置灰</button>
<span [innerHtml]="spanContent"></span>

<div [class.text-color]="isHasClass">练习class属性的使用</div>

<div>今天日期{{curDate}}</div>
<div>今天日期{{curDate | date | uppercase}}</div>
<div>今天日期{{curDate | date: 'MM:dd:yy'}}</div>

<button (click)="addCount($event, 5); addSubject()">累计加1</button>
<span>{{curCount}}</span>
  `,
  styles: [
    'h1 {color: red}',
    '.text-color {color: blue}'
  ]
})
export class HelloWorldComponent {
  public age = 50;
  public displayName = 'angular 第一课';
  public isHasClass = true;
  public styleObj = {
    'font-size':  this.isHasClass ? '20px' : '12px',
    'color' : this.isHasClass ? 'blue' : 'red',
  };
  public studySubjects = [
    '环境搭建',
    '项目目录介绍',
    '组件介绍',
    'ng-zorro组件库的引入介绍'
  ];
  public userRole = 'frontEnd';
  public imgUrl = '../assets/bg.png';
  public isDisabledBtn = false;
  public spanContent = '这是一个span标签';
  public curDate = new Date();
  public curCount = 1;

  public addCount(event: any, param: number): void {
    this.curCount ++ ;
  }

  public addSubject(): void {
    this.studySubjects.push('路由学习');
  }
}
