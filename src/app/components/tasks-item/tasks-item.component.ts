import { Component, Input } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.scss'
})
export class TasksItemComponent {
   @Input() task! : Task
   public faTime =  faTimes
}
