import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.scss'
})
export class CounterButtonComponent {
@Output() onBtnClick: EventEmitter<number>= new EventEmitter()


onClick(){
  this.onBtnClick.emit();
}
}
