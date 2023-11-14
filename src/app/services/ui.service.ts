import { Injectable } from '@angular/core';
import {Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTaskDiv:boolean = false;
  private subject = new Subject<any>();
  constructor() { }


  toggleShowAddTaskDiv() : void
  {
    this.showAddTaskDiv = !this.showAddTaskDiv;
    this.subject.next(this.showAddTaskDiv);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable()
  }
}
