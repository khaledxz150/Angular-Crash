import { Component,Output,EventEmitter,OnInit } from '@angular/core';
import {  } from '@angular/core';
import { Task } from '../../Task';

import {Subscription} from 'rxjs'
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask : EventEmitter<Task> =  new EventEmitter();
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showTaskDiv: boolean = false;
  subscription!: Subscription;

  constructor(private UiService:UiService) {
    this.subscription = this.UiService.onToggle().subscribe((value)=>this.showTaskDiv = value);
   }
  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert("please add a task correctly")
      return;
    }

    var newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.onAddTask.emit(newTask);

    this.text = "";
    this.day = "";
    this.reminder = false;
  }

}
