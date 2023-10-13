import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Hi Counter</h1>
  <h3>Counter: {{ counter }}</h3>

  <button (click)="incrementCounter(1)">+1</button>
  <button (click)="incrementCounter(-1)">-1</button>
  <button (click)="resetCounter()">Reset</button>
  `

})

export class CounterComponent{
  constructor() {
  }
  public counter: number = 0;

  incrementCounter(number: number): void {
    this.counter += number;
  }

  resetCounter(): void {
    this.counter = 0;
  }
}
