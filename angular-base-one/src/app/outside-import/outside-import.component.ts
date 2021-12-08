import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { IPerson, IDevelop, Status } from './outside-import.dto';


@Component({
  selector: 'app-outside-import',
  templateUrl: './outside-import.component.html',
  styleUrls: ['./outside-import.scss']
})
export class OutsideImportComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input() public defaultCount: number = 1;
  @Output() public displayTitle = new EventEmitter<string>();
  public  people: IPerson[] = [] ;
  public  developer: IDevelop[] = [];
  public tableStatus = Status.Fail;
  public age = 50;
  public displayName = '这是子组件';
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

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('这是onchange');
  }

  public ngOnInit(): void {
    console.log('这是init');
  }

  public ngAfterViewInit(): void {
    console.log('Dom元素被渲染之后执行');
  }

  public ngOnDestroy(): void {
    console.log('组件被销毁');
  }

  public addCount(event: any, param: number): void {
    this.defaultCount ++ ;
    this.displayTitle.emit('我是子组件，我收到父组件传过来的值了');
    // this.people = [{
    //   age: 18,
    //   gender: '男',
    //   address: '上海',
    // }];

    // this.developer = [{
    //   age: 18,
    //   gender: '男',
    //   address: '上海',
    //   code: true
    // }];
  }

  public addSubject(): void {
    this.studySubjects.push('路由学习');
  }
}
