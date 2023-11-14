import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.scss'
})
export class TasksItemComponent {
  @Input() task! : Task
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter()

  public faTime =  faTimes

onDelete(task:Task) {
this.onDeleteTask.emit(task);
}

onToggle(task:Task) {
  this.onToggleTask.emit(task);
}

}
