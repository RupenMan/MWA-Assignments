import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-counter',
  template: `
       <input type="button" value ="-" (click)="decreaseValue()"> 
       {{myValue}}
       <input type="button" value ="+" (click)="increaseValue()"> 
  `,
  styles: []
})
export class SimpleCounterComponent implements OnInit {
  @Input() myValue:number;
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    this.myValue=0;
  }

  increaseValue(){
    ++this.myValue;
    this.counterChange.emit(this.myValue);
  }

  decreaseValue(){
    --this.myValue;
    this.counterChange.emit(this.myValue);
  }
}
