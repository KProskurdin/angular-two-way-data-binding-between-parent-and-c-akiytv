import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="background-color: red; padding: 10px;">
    <div>{{counter}}</div>
    <button (click)="increment()">increment from parent</button>
    <app-middle-child [(counter)]="counter"></app-middle-child>
  </div>
  `,
})
export class AppComponent {
  counter = 0;

  increment() {
    this.counter++;
  }

  onCounterChange(counter: number) {
    this.counter = counter;
  }
}

@Component({
  selector: 'app-middle-child',
  template: `
  <div style="background-color: orange; padding: 10px; margin: 10px;">
  <div>{{counter}}</div>
  <app-child [(counter)]="counter"></app-child>
  </div>
  `,
})
export class MiddleChildComponent {
  @Input() counter: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor() {}

  onCounterChange(counter: number) {
    console.log('middle onCounterChange ' + counter);
    this.counter = counter;
    this.counterChange.emit(this.counter);
  }
}

@Component({
  selector: 'app-child',
  template: `
  <div style="background-color: green; padding: 10px; margin: 10px;">
    <div>{{counter}}</div>
    <button (click)="increment()">increment from child</button>
  </div>
  `,
})
export class ChildComponent {
  @Input() counter: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor() {}

  increment() {
    console.log('ChildComponent increment' + counter);
    this.counterChange.emit(++this.counter);
  }
}
